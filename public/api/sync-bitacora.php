<?php
/**
 * UNO Arquitectos - Sincronizador Automático de Bitácora Digital 24h
 * Conexión directa a Google Drive: https://drive.google.com/drive/folders/16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby
 * 
 * Funcionalidad:
 * 1. Verifica cambios cada 24 horas (86,400 seg) automáticamente.
 * 2. Si el caché está vigente (< 24h) y no se solicita 'force=1', entrega el JSON en caché al instante.
 * 3. Si el caché expiró o se invoca vía cPanel Cron / CLI o 'force=1', consulta Google Drive,
 *    analiza los archivos PDF y la bitácora, actualiza el archivo de caché y entrega la respuesta.
 */

// Headers CORS y JSON
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$cacheDir = __DIR__ . '/../data';
$cacheFile = $cacheDir . '/bitacora-cache.json';
$logFile = $cacheDir . '/sync-bitacora.log';

$folderId = '16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby';
$driveUrl = "https://drive.google.com/drive/folders/{$folderId}?usp=sharing";
$syncIntervalSeconds = 86400; // 24 Horas

$force = isset($_GET['force']) && $_GET['force'] == '1';
$isCli = (php_sapi_name() === 'cli');

// Asegurar directorio de datos
if (!file_exists($cacheDir)) {
    @mkdir($cacheDir, 0755, true);
}

// 1. Verificar caché existente
$cacheExists = file_exists($cacheFile);
$cacheAge = $cacheExists ? (time() - filemtime($cacheFile)) : PHP_INT_MAX;

if ($cacheExists && !$force && !$isCli && $cacheAge < $syncIntervalSeconds) {
    header('X-Bitacora-Source: cache');
    header('X-Bitacora-Age-Seconds: ' . $cacheAge);
    header('Cache-Control: public, max-age=3600');
    readfile($cacheFile);
    exit;
}

// 2. Ejecutar sincronización con Google Drive
function fetchUrl($url) {
    if (function_exists('curl_init')) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $content = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($httpCode >= 200 && $httpCode < 300 && !empty($content)) {
            return $content;
        }
    }
    
    // Fallback file_get_contents con stream context
    $opts = [
        'http' => [
            'method' => 'GET',
            'header' => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\r\n",
            'timeout' => 15
        ]
    ];
    $ctx = stream_context_create($opts);
    return @file_get_contents($url, false, $ctx);
}

// Leer datos existentes de caché si existen
$existingData = [];
if ($cacheExists) {
    $raw = @file_get_contents($cacheFile);
    $existingData = json_decode($raw, true) ?: [];
}

$existingEntries = $existingData['entries'] ?? [];
$existingMap = [];
foreach ($existingEntries as $idx => $entry) {
    if (!empty($entry['id'])) {
        $existingMap[$entry['id']] = $idx;
    }
}

// Consultar Google Drive
$driveHtml = fetchUrl($driveUrl);
$foundPdfs = [];

if ($driveHtml) {
    // Buscar archivos PDF e IDs en el HTML de Google Drive
    // Patrón aria-label="...pdf..." y ssk="...:<id>-0-16"
    if (preg_match_all('/aria-label="([^"]+\.pdf[^"]*)"[^>]*ssk=[\'"][^\'"]*?:([a-zA-Z0-9_-]{25,50})/i', $driveHtml, $matches, PREG_SET_ORDER)) {
        foreach ($matches as $m) {
            $rawLabel = $m[1];
            $fileId = $m[2];
            // Limpiar etiqueta
            $cleanName = trim(preg_replace('/\s+PDF\s+Shared.*$/i', '', $rawLabel));
            if (preg_match('/S(\d+)/i', $cleanName, $sm)) {
                $sNum = intval($sm[1]);
                $foundPdfs[$sNum] = [
                    'fileName' => $cleanName,
                    'fileId' => $fileId,
                    'driveUrl' => "https://drive.google.com/file/d/{$fileId}/view?usp=sharing"
                ];
            }
        }
    }
}

// Si encontramos archivos en Drive, actualizar referencias en los entries existentes o crear nuevas
$hasUpdates = false;
if (!empty($foundPdfs)) {
    foreach ($foundPdfs as $sNum => $pdfInfo) {
        $foundInExisting = false;
        foreach ($existingEntries as &$entry) {
            if (strpos($entry['id'], "s{$sNum}") !== false || strpos($entry['entryNumber'], "S{$sNum}") !== false) {
                $foundInExisting = true;
                if (empty($entry['pdfDriveUrl']) || $entry['pdfDriveUrl'] !== $pdfInfo['driveUrl']) {
                    $entry['pdfDriveUrl'] = $pdfInfo['driveUrl'];
                    $entry['pdfFileName'] = $pdfInfo['fileName'];
                    $hasUpdates = true;
                }
                break;
            }
        }
        unset($entry);
    }
}

// Construir payload sincronizado
$nowIso = gmdate('Y-m-d\TH:i:s\Z');
$payload = [
    'version' => '2.0.0',
    'lastSync' => $nowIso,
    'lastCheckTimestamp' => time(),
    'checkIntervalHours' => 24,
    'nextCheckDue' => gmdate('Y-m-d\TH:i:s\Z', time() + $syncIntervalSeconds),
    'driveFolderUrl' => $driveUrl,
    'driveFolderId' => $folderId,
    'spreadsheetId' => '1IyMbTsCjOxNq41nQZj9GyH5l6OadUPHo651sXOWw-QA',
    'status' => 'synchronized',
    'totalEntries' => count($existingEntries),
    'latestEntry' => !empty($existingEntries) ? end($existingEntries) : null,
    'syncedPdfsCount' => count($foundPdfs),
    'entries' => $existingEntries
];

$jsonOutput = json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

if ($jsonOutput) {
    @file_put_contents($cacheFile, $jsonOutput);
    $logMsg = "[{$nowIso}] Sync complete. Total entries: " . count($existingEntries) . ", PDFs found in Drive: " . count($foundPdfs) . "\n";
    @file_put_contents($logFile, $logMsg, FILE_APPEND);
}

header('X-Bitacora-Source: live_sync');
header('X-Bitacora-Updated: ' . ($hasUpdates ? 'true' : 'false'));
echo $jsonOutput ?: json_encode(['error' => 'Failed to serialize sync data']);
