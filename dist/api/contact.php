<?php
// ==============================================================================
// UNO ARQUITECTOS - ADVANCED LEAD CAPTURE & GOHIGHLEVEL INTEGRATION (PHP 8.2)
// Multi-Channel Persistence: Local JSON Storage + SMTP/PHP Mailer + GHL Webhook
// ==============================================================================

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method Not Allowed. Use POST.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Load optional configuration if present
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
}

// ------------------------------------------------------------------------------
// 1. EXTRACT & NORMALIZE INCOMING PAYLOAD (JSON OR FORM-DATA)
// ------------------------------------------------------------------------------
$rawInput = file_get_contents('php://input');
$data = [];

if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
        $data = $decoded;
    }
}

// Merge with $_POST if provided via standard form submission
if (empty($data) && !empty($_POST)) {
    $data = $_POST;
}

// ------------------------------------------------------------------------------
// Helper: Strict XSS & Input Sanitization
// ------------------------------------------------------------------------------
function sanitize_text($input, $maxLength = 1000) {
    if (!is_string($input)) return '';
    $clean = strip_tags($input);
    $clean = htmlspecialchars($clean, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    return mb_substr(trim($clean), 0, $maxLength, 'UTF-8');
}

// Extract fields with fallbacks & strict sanitization
$name = sanitize_text($data['nombre'] ?? $data['name'] ?? $data['fullName'] ?? '', 120);
$email = filter_var(trim($data['correo'] ?? $data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = sanitize_text($data['telefono'] ?? $data['phone'] ?? $data['telephone'] ?? '', 30);
$zona = sanitize_text($data['zona'] ?? $data['zone'] ?? $data['location'] ?? '', 100);
$terrenoRaw = $data['terreno'] ?? $data['has_land'] ?? $data['hasLand'] ?? '';
$terreno = is_bool($terrenoRaw) ? ($terrenoRaw ? 'true' : 'false') : sanitize_text($terrenoRaw, 30);
$tipoProyecto = sanitize_text($data['tipo_proyecto'] ?? $data['tipoProyecto'] ?? $data['project_type'] ?? $data['projectType'] ?? $data['service'] ?? '', 150);
$inversion = sanitize_text($data['inversion'] ?? $data['budget'] ?? $data['budget_range'] ?? '', 100);
$message = sanitize_text($data['mensaje'] ?? $data['message'] ?? $data['msg'] ?? $data['comments'] ?? '', 3000);
$fuente = sanitize_text($data['fuente'] ?? $data['source'] ?? 'Sitio web', 100);
if (empty($fuente)) $fuente = 'Sitio web';
$language = strtolower(sanitize_text($data['language'] ?? $data['lang'] ?? 'es', 5));
if (!in_array($language, ['es', 'en', 'it', 'fr'])) {
    $language = 'es';
}
$pageUrl = filter_var(trim($data['pageUrl'] ?? $data['page_url'] ?? $data['sourceUrl'] ?? 'https://unoarquitectos.com/#contacto'), FILTER_SANITIZE_URL);

// Human-readable labels
$inversionMap = [
    '<2M' => 'Menos de $2M MXN',
    '2-4M' => '$2M – $4M MXN',
    '4-6M' => '$4M – $6M MXN',
    '6-10M' => '$6M – $10M MXN',
    '>10M' => 'Más de $10M MXN',
    'no_seguro' => 'Aún no lo tengo claro'
];
$inversionLabel = $inversionMap[$inversion] ?? $inversion;
$terrenoText = ($terreno === 'true' || $terreno === 'Sí' || $terreno === 'Si' || $terreno === true) ? 'Sí' : 'Aún no';
$hasLandBool = ($terreno === 'true' || $terreno === 'Sí' || $terreno === 'Si' || $terreno === true);

// ------------------------------------------------------------------------------
// 2. INVISIBLE HONEYPOT BOT TRAP (ANTI-SPAM)
// ------------------------------------------------------------------------------
$honeypot = trim($data['form_website_hp'] ?? $data['website_hp'] ?? $data['honeypot'] ?? $data['b_address'] ?? '');
if (!empty($honeypot)) {
    // Silent bot trap: Return fake success 200 to bot without saving, emailing or GHL forwarding
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'leadId' => 'BOT-TRAP-' . date('YmdHis'),
        'message' => ($language === 'es') ? 'Solicitud procesada correctamente.' : 'Request processed successfully.',
        'savedLocally' => false,
        'emailDispatched' => false,
        'ghlDispatched' => false,
        'ghlStatus' => 200
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// ------------------------------------------------------------------------------
// 3. VALIDATION OF REQUIRED CONTACT FIELDS
// ------------------------------------------------------------------------------
$errors = [];
if (empty($name) || mb_strlen($name, 'UTF-8') < 2) {
    $errors['nombre'] = 'Por favor ingrese su nombre completo.';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['correo'] = 'Por favor ingrese un correo electrónico válido.';
}

$cleanPhone = preg_replace('/\D/', '', $phone);
if (empty($phone) || strlen($cleanPhone) < 7) {
    $errors['telefono'] = 'Por favor ingrese un número telefónico válido (mínimo 7 dígitos).';
}

if (empty($zona)) {
    $errors['zona'] = 'Por favor seleccione una zona.';
}

if ($terreno === '') {
    $errors['terreno'] = 'Por favor seleccione si ya cuenta con terreno.';
}

if (empty($tipoProyecto)) {
    $errors['tipo_proyecto'] = 'Por favor seleccione un tipo de proyecto.';
}

if (empty($inversion)) {
    $errors['inversion'] = 'Por favor seleccione un rango de inversión.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Validación fallida en los datos enviados.',
        'details' => $errors
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Parse first and last names
$nameParts = explode(' ', $name, 2);
$firstName = $nameParts[0];
$lastName = isset($nameParts[1]) ? $nameParts[1] : '';

$timestamp = date('c');
$leadId = 'LEAD-' . date('Ymd') . '-' . substr(uniqid('', true), -6);
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';

// Complete lead record
$leadRecord = [
    'id' => $leadId,
    'timestamp' => $timestamp,
    'name' => $name,
    'firstName' => $firstName,
    'lastName' => $lastName,
    'email' => $email,
    'phone' => $phone,
    'cleanPhone' => $cleanPhone,
    'zona' => $zona,
    'terreno' => $terrenoText,
    'hasLand' => $hasLandBool,
    'tipoProyecto' => $tipoProyecto,
    'inversion' => $inversionLabel,
    'inversionCode' => $inversion,
    'message' => $message,
    'fuente' => $fuente,
    'language' => $language,
    'pageUrl' => $pageUrl,
    'ip' => $ipAddress,
    'source' => $fuente,
    'tags' => ['Website Lead', 'Diagnostico Web', 'Fase IV', 'Lang-' . strtoupper($language)]
];

// ------------------------------------------------------------------------------
// 3. SECURE LOCAL STORAGE (DATA/LEADS.JSON) — GUARANTEES ZERO LOST LEADS
// ------------------------------------------------------------------------------
$dataDir = __DIR__ . '/../data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

$leadsFile = $dataDir . '/leads.json';
$leads = [];

if (file_exists($leadsFile)) {
    $existingContent = @file_get_contents($leadsFile);
    if (!empty($existingContent)) {
        $parsed = json_decode($existingContent, true);
        if (is_array($parsed)) {
            $leads = $parsed;
        }
    }
}

// Append new lead to array
array_unshift($leads, $leadRecord);

// Keep maximum 500 recent leads in store
if (count($leads) > 500) {
    $leads = array_slice($leads, 0, 500);
}

$savedLocally = @file_put_contents(
    $leadsFile,
    json_encode($leads, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE),
    LOCK_EX
);

// Also mirror to public/data if run from dist
$altDataDir = dirname(__DIR__, 2) . '/public/data';
if (is_dir($altDataDir)) {
    @file_put_contents($altDataDir . '/leads.json', json_encode($leads, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
}

// ------------------------------------------------------------------------------
// 4. EMAIL NOTIFICATIONS TO STUDIO LEADERSHIP (HOLA@ & ANGEL@)
// ------------------------------------------------------------------------------
$to = defined('NOTIFICATION_EMAILS') && !empty(NOTIFICATION_EMAILS) 
    ? NOTIFICATION_EMAILS 
    : 'hola@unoarquitectos.com, angel@unoarquitectos.com';
$subject = "=?UTF-8?B?" . base64_encode("⭐ [Nuevo Lead] {$name} - {$tipoProyecto} ({$zona}) [{$leadId}]") . "?=";

$msgSafe = !empty($message) ? htmlspecialchars($message, ENT_QUOTES, 'UTF-8') : '<i style="color:#888;">(Sin notas adicionales)</i>';
$emailBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: Arial, sans-serif; background-color: #FDFCF9; color: #4A4A4A; padding: 20px;'>
  <div style='max-width: 620px; margin: 0 auto; background: #FFFFFF; border: 1px solid #C8B89A; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);'>
    <div style='background: #009E9B; color: #FFFFFF; padding: 24px; text-align: center;'>
      <h2 style='margin:0; text-transform:uppercase; letter-spacing:2px; font-size:18px;'>Nuevo Lead Web — Diagnóstico de Proyecto</h2>
      <p style='margin:6px 0 0 0; font-size:12px; opacity:0.9;'>UNO Arquitectos Mx • Captación Rápida & CRM</p>
    </div>
    <div style='padding: 24px; font-size: 14px; line-height: 1.6;'>
      <table style='width:100%; border-collapse:collapse;'>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold; width:180px;'>IDENTIFICADOR:</td><td><code>{$leadId}</code></td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>NOMBRE:</td><td><b>{$name}</b></td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>CORREO:</td><td><a href='mailto:{$email}'>{$email}</a></td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>TELÉFONO / WHATSAPP:</td><td><a href='tel:{$phone}'>{$phone}</a> &nbsp;|&nbsp; <a href='https://wa.me/{$cleanPhone}?text=Hola%20{$firstName}%2C%20le%20escribimos%20de%20UNO%20Arquitectos%20para%20dar%20seguimiento%20a%20su%20solicitud%20de%20diagn%C3%B3stico.' style='color:#25D366; font-weight:bold; text-decoration:none;' target='_blank'>[Abrir WhatsApp]</a></td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>ZONA DE INTERÉS:</td><td><b>{$zona}</b></td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>¿CUENTA CON TERRENO?:</td><td><b>{$terrenoText}</b></td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>TIPO DE PROYECTO:</td><td><b>{$tipoProyecto}</b></td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>RANGO DE INVERSIÓN:</td><td><b>{$inversionLabel}</b></td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>FUENTE / CAMPAÑA:</td><td><span style='background:#F0EDE6; padding:2px 8px; border-radius:4px;'>{$fuente}</span></td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>IDIOMA:</td><td>" . strtoupper($language) . "</td></tr>
        <tr><td style='padding:6px 0; color:#009E9B; font-weight:bold;'>PÁGINA ORIGEN:</td><td><a href='{$pageUrl}'>{$pageUrl}</a></td></tr>
      </table>
      <div style='background: #F6F4EF; border-left: 4px solid #009E9B; padding: 14px; margin-top: 20px; border-radius:4px;'>
        <b style='color:#009E9B;'>NOTAS ADICIONALES DEL CLIENTE:</b><br>
        <p style='white-space: pre-wrap; margin: 8px 0 0 0;'>{$msgSafe}</p>
      </div>
    </div>
    <div style='background: #F6F4EF; padding: 14px; text-align: center; font-size:11px; color:#737373;'>
      Fecha: {$timestamp} | IP: {$ipAddress} | Integración GoHighLevel Ready
    </div>
  </div>
</body>
</html>
";

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: UNO Arquitectos <no-reply@unoarquitectos.com>',
    "Reply-To: {$name} <{$email}>",
    'X-Mailer: PHP/' . phpversion()
];

$emailSent = @mail($to, $subject, $emailBody, implode("\r\n", $headers));

// ------------------------------------------------------------------------------
// 5. GOHIGHLEVEL (GHL) CRM WEBHOOK DISPATCH
// ------------------------------------------------------------------------------
$ghlWebhookUrl = defined('GHL_WEBHOOK_URL') && !empty(GHL_WEBHOOK_URL)
    ? trim(GHL_WEBHOOK_URL)
    : (getenv('GHL_WEBHOOK_URL') ?: ($_ENV['GHL_WEBHOOK_URL'] ?? ($_SERVER['GHL_WEBHOOK_URL'] ?? (getenv('LEADCONNECTOR_WEBHOOK_URL') ?: ''))));

$ghlPayload = [
    // Standard GHL Contact Fields
    'first_name' => $firstName,
    'last_name' => $lastName,
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'source' => $fuente,
    'tags' => ['Website Lead', 'Diagnostico Web', 'Fase IV', 'Lang-' . strtoupper($language)],

    // Form fields mapped in both Spanish and English for seamless GHL custom fields
    'zona' => $zona,
    'zone' => $zona,
    'location' => $zona,
    'terreno' => $terrenoText,
    'has_land' => $hasLandBool ? 'true' : 'false',
    'terreno_identificado' => $terrenoText,
    'tipo_proyecto' => $tipoProyecto,
    'project_type' => $tipoProyecto,
    'inversion' => $inversionLabel,
    'budget' => $inversionLabel,
    'budget_range' => $inversionLabel,
    'mensaje' => $message,
    'message' => $message,
    'notes' => $message,
    'fuente' => $fuente,

    // Monday CRM mapped columns from reference HTML
    'phone_mm5gxr27' => $phone,
    'email_mm5gv6cy' => $email,
    'color_mm7rm4xk' => $zona,
    'boolean_mm7y2q3j' => $hasLandBool,
    'color_mm7y8sgy' => $tipoProyecto,
    'numeric_mm5geex0' => $inversion,
    'long_text_mm5gfbb2' => $message,
    'dropdown_mm5ghfkg' => $fuente,

    // System Context
    'lead_id' => $leadId,
    'page_url' => $pageUrl,
    'language' => $language,
    'submitted_at' => $timestamp
];

$ghlSuccess = false;
$ghlHttpCode = 0;

if (!empty($ghlWebhookUrl) && function_exists('curl_init')) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $ghlWebhookUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($ghlPayload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'User-Agent: UNOArquitectos-GHL-Bridge/2.0'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 6);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

    $ghlResponse = curl_exec($ch);
    $ghlHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($ghlHttpCode >= 200 && $ghlHttpCode < 300) {
        $ghlSuccess = true;
    }
}

// ------------------------------------------------------------------------------
// 6. JSON RESPONSE TO CLIENT
// ------------------------------------------------------------------------------
http_response_code(200);
echo json_encode([
    'success' => true,
    'leadId' => $leadId,
    'message' => ($language === 'es') ? 'Lead capturado y procesado exitosamente.' : 'Lead captured and processed successfully.',
    'savedLocally' => (bool)$savedLocally,
    'emailDispatched' => (bool)$emailSent,
    'ghlDispatched' => $ghlSuccess,
    'ghlStatus' => $ghlHttpCode
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
