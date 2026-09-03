<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Cache-Control: public, max-age=3600');

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$cacheDir = __DIR__ . '/../data';
if (!is_dir($cacheDir)) {
    @mkdir($cacheDir, 0755, true);
}
$cacheFile = $cacheDir . '/google-reviews-cache.json';
$cacheDuration = 21600;

if (file_exists($cacheFile) && (time() - filemtime($cacheFile)) < $cacheDuration) {
    $cachedData = file_get_contents($cacheFile);
    if (!empty($cachedData)) {
        echo $cachedData;
        exit;
    }
}

$placeId = getenv('GOOGLE_PLACE_ID') ?: 'ChIJORKbm4VDTo8Rkfcfhdpqyho';
$apiKey = getenv('GOOGLE_MAPS_API_KEY') ?: getenv('VITE_GOOGLE_MAPS_API_KEY') ?: '';

$defaultResponse = [
    'success' => true,
    'name' => 'UNO Arquitectos Mx',
    'rating' => 4.8,
    'reviewCount' => 50,
    'reviews' => [],
    'hasLiveGoogleSync' => false,
    'placeUrl' => 'https://www.google.com/maps/place/UNO+Arquitectos+Mx/@20.6718486,-87.0504611,17z/data=!4m8!3m7!1s0x8f4e43859b311239:0x1a9cb6da851ff691!8m2!3d20.6718486!4d-87.0504611!9m1!1b1!16s%2Fg%2F11r_t7kdfg',
    'updatedAt' => date('c')
];

if (!empty($apiKey)) {
    $apiUrl = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' . $placeId . '&fields=name,rating,user_ratings_total,reviews,url&language=es&key=' . $apiKey;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    $apiResult = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200 && !empty($apiResult)) {
        $json = json_decode($apiResult, true);
        if (isset($json['result'])) {
            $res = $json['result'];
            $liveData = [
                'success' => true,
                'name' => $res['name'] ?? 'UNO Arquitectos Mx',
                'rating' => isset($res['rating']) ? (float)$res['rating'] : 4.8,
                'reviewCount' => isset($res['user_ratings_total']) ? (int)$res['user_ratings_total'] : 50,
                'reviews' => $res['reviews'] ?? [],
                'hasLiveGoogleSync' => true,
                'placeUrl' => $res['url'] ?? $defaultResponse['placeUrl'],
                'updatedAt' => date('c')
            ];
            @file_put_contents($cacheFile, json_encode($liveData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
            echo json_encode($liveData, JSON_UNESCAPED_UNICODE);
            exit;
        }
    }
}

@file_put_contents($cacheFile, json_encode($defaultResponse, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
echo json_encode($defaultResponse, JSON_UNESCAPED_UNICODE);
