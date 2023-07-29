<?php include 'header.php'; ?>
<link rel="stylesheet" href="css/contact.css">

<div id="contactWelcome">
    <img src="img/contact/contactWelcome.png" alt="mansinghfoundation-contact-img">
    <div id="welcomeDetails">
        <h1>Contact</h1>
        <p>We are here to answer any question you may have. Feel free to reach via contact form.</p>
    </div>
</div>


<div id="midContact">
    <div id="googleMap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56051.1559017508!2d76.986416!3d28.593859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d101a266c6743%3A0xac6817de68ddd66c!2sDindarpur%2C%20Najafgarh%2C%20Delhi%2C%20110043%2C%20India!5e0!3m2!1sen!2sus!4v1689762912155!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div id="contactDetails">
        <div id="contactInfoBox">
            <div class="cInfo cInfo1">
                <div class="cHeading">
                    <i class="fa-solid fa-phone"></i>
                    <h2>PHONE :</h2>
                </div>
                <div class="cDetails">
                    <p><span>+91 </span>9999359343</p>
                    <p><span>+91 </span>9810028004</p>
                </div>
            </div>
            <div class="cInfo cInfo2">
                <div class="cHeading">
                    <i class="fa-solid fa-envelope"></i>
                    <h2>EMAIL :</h2>
                </div>
                <div class="cDetails">
                    <p>MansinghTrp@gmail.com</p>
                </div>
            </div>
            <div class="cInfo cInfo3">
                <div class="cHeading">
                    <i class="fa-solid fa-location-dot"></i>
                    <h2>Address</h2>
                </div>
                <div class="cDetails">
                    <p>Plot no 10, First Floor,349, opposite pillar number 348, Kapil Vihar,PitamPura, Delhi, 110034</p>
                </div>
            </div>
        </div>

        <div id="contactForm">
            <h2><span>Contact</span> form</h2>
            <form id="form">
                <input type="text" id="contactName" name="contactName" placeholder="Name">
                <input type="email" id="contactEmail" name="contactEmail" placeholder="Email">
                <input type="number" id="contactPhone" name="contactPhone" placeholder="Phone Number">
                <textarea placeholder="Message (Optional)" id="contactMsg" name="contactMessage"></textarea>
                <button id="submitBtn">Submit</button>
            </form>
        </div>
    </div>

</div>

<?php include 'footer.php'; ?>

<!-- smtpjs cdn -->
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script src="js/contact.js"></script>