<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maurya Laser Clinic | Pitampura</title>
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
    <meta name="author" content="xtar dhananjay">
    <link rel="stylesheet" href="css/root.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js" integrity="sha256-tG5mcZUtJsZvyKAxYLVXrmjKBVLd6VpVccqz/r4ypFE=" crossorigin="anonymous"></script>
</head>
<body>
    
    <header>
        <nav>
            <a href="home"><img src="img/mainLogo.png" alt="mauryalaserclinic-Logo"></a>
            <ul id="headerPages">
                <li class="active"><a href="inquiry.php">Inquiry</a></li>
                <li><a href="services.php">Services</a></li>
                <li><a href="blogs">Blogs</a></li>
                <li><a href="seo.php">SEO</a></li>
                <li id="contactMenu"><a href="contact">Contact</a></li>
            </ul>
            <ul id="donContact">
                <a href="inqury.php"><li><button id="headerContactBtn" onclick="inquiryForm.classList.toggle('active');">Book Appointment</button></li></a>
            </ul>
            <i id="menuIcon" class="fa-solid fa-bars"></i>
        </nav>
    </header>

    <script src="js/header.js"></script>
    <?php include 'message.php'; ?>

</body>
</html>