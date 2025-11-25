<?php
require_once 'db_config.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    # $_SERVER superglobal variable to check request method is post
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm-password'];
    
    // echo "Name: " . $fullname . "<br>";
    // echo "Email: " . $email . "<br>";
    // echo "Password: " . $password . "<br>";
    // echo "Confirm: " . $confirm_password . "<br>";
    $errors = [];
    
    // Validation Rule 1: Check if fullname is empty
    if (empty($fullname)) {
        $errors[] = "Full name is required";
    }
    
    // Validation Rule 2: Check if email is empty
    if (empty($email)) {
        $errors[] = "Email is required";
    }
    
    // Validation Rule 3: Check if email format is valid
    if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    // Validation Rule 4: Check if password is empty
    if (empty($password)) {
        $errors[] = "Password is required";
    }
    
    // Validation Rule 5: Check if password is at least 6 characters
    if (!empty($password) && strlen($password) < 6) {
        $errors[] = "Password must be at least 6 characters";
    }
    
    // Validation Rule 6: Check if passwords match
    if ($password !== $confirm_password) {
        $errors[] = "Passwords do not match";
    }
    
    // If no errors, we'll save to database (next step)
    if (empty($errors)) {
        echo "Validation passed! Ready to save to database.";
    } else {
        // Show errors
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - LMS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="nav-bar">
        <ul class="nav-links">
            <li><a href="index.php">Home</a></li>
            <li><a href="About_us.php">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="contact_us.php">Contact</a></li>
        </ul>
        <div class="auth-buttons">
            <button onclick="window.location.href='login.php'">Login</button>
            <button onclick="window.location.href='signup.php'">Sign Up</button>
        </div>
    </nav>

    <div class="signup-container">
        <h2>Create an Account</h2>
        <form class="signup-form" action = "" method = "POST"> <!-- form action and method can be added later -->
            <div class="form-group">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required>
            </div>
            <button type="submit" class="signup-btn">Sign Up</button>
        </form>
        <p class="login-link">Already have an account? <a href="login.php">Login here</a></p>
    </div>

    <footer>
        <p>&copy; 2025 Learning Management System. All rights reserved.</p>
    </footer>
    <script src="app.js"></script>
</body>
</html>