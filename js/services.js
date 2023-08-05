let allPages = document.querySelectorAll('#headerPages li');
allPages.forEach(e => {
    e.classList.remove('active');
})
allPages[1].classList.add('active');


// get all services data
let allServices = document.getElementById('allServices');
let serviceHTML = '';
function getData(){
    fetch('php/services/getData.php')
    .then((Response) => Response.json())
    .then(data => {
        console.log(data);
        data.forEach( e => {
            
            serviceHTML += `<div class="serBox">
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
        allServices.innerHTML = serviceHTML;
    })
}

getData();
