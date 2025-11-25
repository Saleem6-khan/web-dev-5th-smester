<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Class</title>
    <link rel="stylesheet" href="style.css">
   
</head>
<body>
    <!-- Live Class Section
      there will be just  a scedule of live classes and a link to join the class of zoom or google meet  --> 
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
    <div class="live-class-container">
        <h2>Live Class Schedule</h2>
        <table class="class-schedule">
            <tr>
                <th>Course</th>
                <th>Date</th>
                <th>Time</th>
                <th>Join Link</th>
            </tr>
            <tr>
                <td>Web Development</td>
                <td>2024-07-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td><a href="https://zoom.us/j/1234567890" target="_blank">Join Class</a></td>
            </tr>
            <tr>
                <td>Data Science</td>
                <td>2024-07-02</td>
                <td>2:00 PM - 4:00 PM</td>
                <td><a href="https://meet.google.com/abc-defg-hij" target="_blank">Join Class</a></td>
            </tr>
            <tr>
                <td>Machine Learning</td>
                <td>2024-07-03</td>
                <td>11:00 AM - 1:00 PM</td>
                <td><a href="https://zoom.us/j/0987654321" target="_blank">Join Class</a></td>
            </tr>
        </table>

    </div>
    <footer>
        <p>&copy; 2025 Learning Management System. All rights reserved.</p> 
    </footer>
    <script src="app.js"></script>
</body>
</html>