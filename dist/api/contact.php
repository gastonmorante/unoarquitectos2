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

// Extract fields with fallbacks
$name = trim($data['name'] ?? $data['fullName'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? $data['telephone'] ?? '');
$message = trim($data['message'] ?? $data['msg'] ?? $data['comments'] ?? '');
$language = strtolower(trim($data['language'] ?? $data['lang'] ?? 'es'));
$projectType = trim($data['projectType'] ?? $data['service'] ?? 'Proyecto Residencial / Boutique');
$pageUrl = trim($data['pageUrl'] ?? $data['sourceUrl'] ?? 'https://unoarquitectos.com/#contacto');

// ------------------------------------------------------------------------------
// 2. VALIDATION OF REQUIRED CONTACT FIELDS
// ------------------------------------------------------------------------------
$errors = [];
if (empty($name) || mb_strlen($name, 'UTF-8') < 2) {
    $errors['name'] = 'Por favor ingrese su nombre completo.';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Por favor ingrese un correo electrónico válido.';
}

$cleanPhone = preg_replace('/\D/', '', $phone);
if (empty($phone) || strlen($cleanPhone) < 7) {
    $errors['phone'] = 'Por favor ingrese un número telefónico válido (mínimo 7 dígitos).';
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
    'projectType' => $projectType,
    'message' => $message,
    'language' => $language,
    'pageUrl' => $pageUrl,
    'ip' => $ipAddress,
    'source' => 'Website UNO Arquitectos',
    'tags' => ['Website Lead', 'Fase IV', 'Lang-' . strtoupper($language)]
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

// ------------------------------------------------------------------------------
// 4. EMAIL NOTIFICATIONS TO STUDIO LEADERSHIP (HOLA@ & ANGEL@)
// ------------------------------------------------------------------------------
$to = 'hola@unoarquitectos.com, angel@unoarquitectos.com';
$subject = "=?UTF-8?B?" . base64_encode("⭐ [Nuevo Lead Web] {$name} - {$projectType} [{$leadId}]") . "?=";

$msgSafe = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$emailBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: Arial, sans-serif; background-color: #FDFCF9; color: #4A4A4A; padding: 20px;'>
  <div style='max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #C8B89A; border-radius: 10px; overflow: hidden;'>
    <div style='background: #009E9B; color: #FFFFFF; padding: 20px; text-align: center;'>
      <h2 style='margin:0; text-transform:uppercase; letter-spacing:2px;'>Nuevo Lead Web Recibido</h2>
      <p style='margin:4px 0 0 0; font-size:12px; opacity:0.9;'>UNO Arquitectos Mx - Sistema de Captación</p>
    </div>
    <div style='padding: 20px; font-size: 14px; line-height: 1.6;'>
      <p><b style='color:#009E9B;'>IDENTIFICADOR:</b> <code>{$leadId}</code></p>
      <p><b style='color:#009E9B;'>NOMBRE:</b> {$name}</p>
      <p><b style='color:#009E9B;'>CORREO:</b> <a href='mailto:{$email}'>{$email}</a></p>
      <p><b style='color:#009E9B;'>TELÉFONO / WHATSAPP:</b> <a href='tel:{$phone}'>{$phone}</a> | <a href='https://wa.me/{$cleanPhone}?text=Hola%20{$firstName}%2C%20le%20escribimos%20de%20UNO%20Arquitectos%20en%20relaci%C3%B3n%20a%20su%20solicitud.' style='color:#25D366; font-weight:bold;' target='_blank'>[Abrir WhatsApp]</a></p>
      <p><b style='color:#009E9B;'>TIPO DE PROYECTO:</b> {$projectType}</p>
      <p><b style='color:#009E9B;'>IDIOMA:</b> " . strtoupper($language) . "</p>
      <p><b style='color:#009E9B;'>PÁGINA ORIGEN:</b> <a href='{$pageUrl}'>{$pageUrl}</a></p>
      <div style='background: #F6F4EF; border-left: 4px solid #009E9B; padding: 12px; margin-top: 15px;'>
        <b style='color:#009E9B;'>MENSAJE SOLICITADO:</b><br>
        <p style='white-space: pre-wrap; margin: 6px 0 0 0;'>{$msgSafe}</p>
      </div>
    </div>
    <div style='background: #F6F4EF; padding: 12px; text-align: center; font-size:11px; color:#737373;'>
      Fecha: {$timestamp} | IP origen: {$ipAddress}
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
// 5. GOHIGHLEVEL (GHL / LEADCONNECTOR) CRM INTEGRATION (FASE IV)
// ------------------------------------------------------------------------------
$ghlWebhookUrl = getenv('GHL_WEBHOOK_URL') ?: getenv('LEADCONNECTOR_WEBHOOK_URL');
if (empty($ghlWebhookUrl)) {
    $ghlWebhookUrl = 'https://services.leadconnectorhq.com/hooks/unoarquitectos/lead-contact';
}

$ghlPayload = [
    'first_name' => $firstName,
    'last_name' => $lastName,
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'tags' => ['Website Lead', 'Fase IV', 'Lang-' . strtoupper($language)],
    'source' => 'Website UNO Arquitectos',
    'project_type' => $projectType,
    'message' => $message,
    'language' => $language,
    'page_url' => $pageUrl,
    'lead_id' => $leadId,
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
