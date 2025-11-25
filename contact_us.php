<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="nav-bar">
        <ul class="nav-links">
            <li><a href="index.php">Home</a></li>
            <li><a href="About_us.php">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="contact_us.php">Contact</a></li>
        </ul>
        <div class="auth-buttons">
            <button onclick="window.location.href='login.php'">Login</button>
            <button onclick="window.location.href='signup.php'">Sign Up</button>
        </div>
    </nav>
    <div class="contact-container">
        <div class="contact-header">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Please fill out this form or use our contact information.</p>
        </div>
        <form class="contact-form">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group
">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>
    <footer>
        <p>&copy; 2025 Learning Management System. All rights reserved.</p>
    </footer>


       
    <script src="app.js"></script>
</body>
</html>