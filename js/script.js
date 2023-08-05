let thinkBoxs = document.querySelectorAll('#allThink .thinks');
thinkBoxs.forEach( e => {
    thinkBtn = e.querySelector('i');
    
    thinkBtn.onclick = () => {
        thinks = e.querySelector('p');
        thinkBtnActive = e.querySelector('i');
        thinks.classList.toggle('active');
        thinkBtnActive.classList.toggle('active');
    }
})



// get best services
let servicesBox = document.getElementById('allServices');
let allServicesData = '';
function getServices(){
    fetch('php/bestServices/getData.php')
    .then((Response) => Response.json())
    .then(data => {
        console.log(data);
        data.forEach( e => {
            allServicesData += `<div class="swiper-slide blogServices">
                                    <div class="imgBox">
                                        <span class="serPrice"><span>₹${e.newPrice}</span><strike>₹<span>${e.oldPrice}</span></strike></span>
                                        <a href="singleService.php?permalink=${e.permalink}"><img src="img/servicesImg/${e.serviceImage}" alt="services-image"></a>
                                    </div>
                                    <div class="servicesDetails">
                                        <a href="singleService.php?permalink=${e.permalink}"><h3>${e.serviceName.length > 25 ?  e.serviceName.substring(0, 24) + '...' : e.serviceName}</h3></a>
                                        <a href="singleService.php?permalink=${e.permalink}"><p>${e.desc.length > 50 ?  e.desc.substring(0, 100) + '...' : e.desc}</p></a>
                                        <button onclick="inquiryForm.classList.toggle('active');">Book Appointment</button>
                                    </div>
                                </div>`;
        })
        servicesBox.innerHTML = allServicesData;
    })
}
getServices();


// Get all reviews
let reviewBox = document.getElementById('allReviewBox');
let allReviews = '';
function getReviews(){
    fetch('php/review/getReviews.php')
    .then((Response) => Response.json())
    .then(data => {
        console.log(data);
        data.forEach( e => {
            allReviews += `<div class="swiper-slide Reviews">
                            <div class="customerProfile">
                                <img src="img/reviews/${e.customerImg}"
                                    alt="customer-Photo | Maurya laser clinic customer in delhi, Pitampura">
                                <div class="personDetails">
                                    <h3>${e.customerName}</h3>
                                    <p>${e.reviewTiming}</p>
                                </div>
                            </div>
                            <p class="customerTypes">${e.customerDesc}</p>`

                            if (e.customerStar == 1) {
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>`;
                            }else if(e.customerStar == 2){
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>`;
                                
                            }else if(e.customerStar == 3){
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>`;
                                
                            }else if(e.customerStar == 4){
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>`;

                            }else if(e.customerStar == 5){
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>`;

                            }
                        allReviews += `</div>`;
            reviewBox.innerHTML = allReviews;
        })
    })
}
getReviews();