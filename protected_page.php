<?php
session_start();
require 'auth_functions.php';

if (!isLoggedIn()) {
    header('Location: login.php');
    exit;
}

// Page content goes here
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protected Page - Jouline School</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php include 'header.php'; ?>
    
    <main>
        <h1>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?></h1>
        <p>This is a protected page that only logged-in users can access.</p>
        <a href="logout.php">Logout</a>
    </main>
    
    <?php include 'footer.php'; ?>
</body>
</html>