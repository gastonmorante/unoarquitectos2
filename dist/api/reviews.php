<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Cache-Control: public, max-age=3600");

if (["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

 = __DIR__ . "/../data";
if (!is_dir()) {
    @mkdir(, 0755, true);
}
 =  . "/google-reviews-cache.json";
 = 21600; // 6 horas

if (file_exists() && (time() - filemtime()) < ) {
     = file_get_contents();
    if (!empty()) {
        echo ;
        exit;
    }
}

 = getenv("GOOGLE_PLACE_ID") ?: "ChIJORKbm4VDTo8Rkfcfhdpqyho";
 = getenv("GOOGLE_MAPS_API_KEY") ?: getenv("VITE_GOOGLE_MAPS_API_KEY") ?: "";

 = [
    "success" => true,
    "name" => "UNO Arquitectos Mx",
    "rating" => 5.0,
    "reviewCount" => 28,
    "reviews" => [],
    "hasLiveGoogleSync" => false,
    "placeUrl" => "https://www.google.com/maps/place/UNO+Arquitectos+Mx/@20.6718486,-87.0504611,17z/data=!4m8!3m7!1s0x8f4e43859b311239:0x1a9cb6da851ff691!8m2!3d20.6718486!4d-87.0504611!9m1!1b1!16s%2Fg%2F11r_t7kdfg",
    "updatedAt" => date("c")
];

if (!empty()) {
     = "https://maps.googleapis.com/maps/api/place/details/json?place_id={}&fields=name,rating,user_ratings_total,reviews,url&language=es&key={}";
     = curl_init();
    curl_setopt(, CURLOPT_URL, );
    curl_setopt(, CURLOPT_RETURNTRANSFER, true);
    curl_setopt(, CURLOPT_TIMEOUT, 5);
    curl_setopt(, CURLOPT_SSL_VERIFYPEER, true);
     = curl_exec();
     = curl_getinfo(, CURLINFO_HTTP_CODE);
    curl_close();

    if ( === 200 && !empty()) {
         = json_decode(, true);
        if (isset(["result"])) {
             = ["result"];
             = [
                "success" => true,
                "name" => ["name"] ?? "UNO Arquitectos Mx",
                "rating" => isset(["rating"]) ? (float)["rating"] : 0.0,
                "reviewCount" => isset(["user_ratings_total"]) ? (int)["user_ratings_total"] : 0,
                "reviews" => ["reviews"] ?? [],
                "hasLiveGoogleSync" => true,
                "placeUrl" => ["url"] ?? ["placeUrl"],
                "updatedAt" => date("c")
            ];
            @file_put_contents(, json_encode(, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
            echo json_encode(, JSON_UNESCAPED_UNICODE);
            exit;
        }
    }
}

if (file_exists()) {
     = file_get_contents();
    if (!empty()) {
        echo ;
        exit;
    }
}

@file_put_contents(, json_encode(, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
echo json_encode(, JSON_UNESCAPED_UNICODE);
