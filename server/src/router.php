<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$uri = $_SERVER['REQUEST_URI'];

if ($uri === '/api/users') {
    require_once __DIR__ . '/controllers/UserController.php';
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Route non trouvée']);
}
