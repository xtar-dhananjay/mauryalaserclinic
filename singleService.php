<?php include 'header.php'; ?>
<link rel="stylesheet" href="css/singleService.css">

<input type="text" hidden id="permalink" value="<?php echo $_GET['permalink']; ?>">
<div id="singleService">

    <div id="leftSide">
        <div class="imgBox">
            <img id="sreviceImg" src="img/servicesImg/1.png" alt="maurya laser clinic Delhi services images">
            <span class="serPrice"><span class="newPrice" id="serviceNewPrice">₹2999</span><strike>₹<span id="servicesOldPrice">4999</span></strike></span>
        </div>
        <div id="singleServiceDetails">
            <h1 id="serviceTitle">Maurya Laser clinic Services In Delhi</h1>
            <p id="serviceDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia tempora, autem consectetur nesciunt iusto in possimus veritatis, quod ducimus nisi, voluptate deleniti? Aliquam debitis qui iure obcaecati earum velit, saepe deleniti esse temporibus atque repellat sequi. Ab tempora nisi provident!</p>
    
            <h2>Benefits of this service</h2>
            <ul id="listOfBenefits">
                <li>Beneifts</li>
                <li>Beneifts</li>
                <li>Beneifts</li>
                <li>Beneifts</li>
                <li>Beneifts</li>
                <li>Beneifts</li>
                <li>Beneifts</li>
            </ul>
    
            <div id="bookBtn">
                <button onclick="inquiryForm.classList.toggle('active');">Book Appointment</button>
            </div>
        </div>

    </div>

    <div id="rightSide">
        <h2 id="bestServiceHeading">Best <span>Services</span></h2>

        <div id="bestServices">

            <div class="service">
                <div class="serviceImg">
                    <a href=""><img src="img/servicesImg/1.png" alt="best services in maurya laser clinic delhi"></a>        
                    <span class="serPrice"><span class="newPrice">₹2999</span><strike>₹<span>4999</span></strike></span>
                </div>
                <div class="serviceDetails">
                    <a href=""><h2>Maurya laser clinic in delhi</h2></a>
                    <a href=""><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, cupiditate!...</p></a>
                    <button onclick="inquiryForm.classList.toggle('active');">Book Appointment</button>
                </div>
            </div>
            
            <div class="service">
                <div class="serviceImg">
                    <a href=""><img src="img/servicesImg/1.png" alt="best services in maurya laser clinic delhi"></a>        
                    <span class="serPrice"><span class="newPrice">₹2999</span><strike>₹<span>4999</span></strike></span>
                </div>
                <div class="serviceDetails">
                    <a href=""><h2>Maurya laser clinic in delhi</h2></a>
                    <a href=""><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, cupiditate!...</p></a>
                    <button onclick="inquiryForm.classList.toggle('active');">Book Appointment</button>
                </div>
            </div>

            <div class="service">
                <div class="serviceImg">
                    <a href=""><img src="img/servicesImg/1.png" alt="best services in maurya laser clinic delhi"></a>        
                    <span class="serPrice"><span class="newPrice">₹2999</span><strike>₹<span>4999</span></strike></span>
                </div>
                <div class="serviceDetails">
                    <a href=""><h2>Maurya laser clinic in delhi</h2></a>
                    <a href=""><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, cupiditate!...</p></a>
                    <button onclick="inquiryForm.classList.toggle('active');">Book Appointment</button>
                </div>
            </div>

            <div class="service">
                <div class="serviceImg">
                    <a href=""><img src="img/servicesImg/1.png" alt="best services in maurya laser clinic delhi"></a>        
                    <span class="serPrice"><span class="newPrice">₹2999</span><strike>₹<span>4999</span></strike></span>
                </div>
                <div class="serviceDetails">
                    <a href=""><h2>Maurya laser clinic in delhi</h2></a>
                    <a href=""><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, cupiditate!...</p></a>
                    <button onclick="inquiryForm.classList.toggle('active');">Book Appointment</button>
                </div>
            </div>

        </div>

    </div>

</div>

<?php include 'footer.php'; ?>







<script src="js/singleService.js"></script>