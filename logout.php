<?php
session_start();
require 'auth_functions.php';

logout();
header('Location: login.php');
exit;
?>