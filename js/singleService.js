let allPages = document.querySelectorAll('#headerPages li');
allPages.forEach(e => {
    e.classList.remove('active');
})
allPages[1].classList.add('active');

// get single services data
function getData(){
    let benefitsLi = '';
    let permalink = document.getElementById('permalink').value;
    fetch(`php/services/getSingleData.php?permalink=${permalink}`)
    .then((Response) => Response.json())
    .then(data => {
        console.log(data);
        let serviceTitle = document.getElementById('serviceTitle');
        let serviceDesc = document.getElementById('serviceDesc');
        let serviceNewPrice = document.getElementById('serviceNewPrice');
        let servicesOldPrice = document.getElementById('servicesOldPrice');
        let sreviceImg = document.getElementById('sreviceImg');
        let listOfBenefits = document.getElementById('listOfBenefits');
        serviceTitle.innerText = data[0].serviceName;
        serviceDesc.innerText = data[0].desc;
        serviceNewPrice.innerText = data[0].newPrice;
        servicesOldPrice.innerText = data[0].oldPrice;
        sreviceImg.src = 'img/servicesImg/' + data[0].serviceImage;
        let benefitsData = data[0].benefits;
        let aryList = benefitsData.split(",");
        aryList.forEach( e => {
            benefitsLi += `<li>${e}</li>`;
        })
        listOfBenefits.innerHTML = benefitsLi;
    })
}
getData();

// get best services data
let allServices = document.getElementById('bestServices');
let serviceHTML = '';
function allGetData(){
    let permalink = document.getElementById('permalink').value;
    fetch('php/bestServices/getData.php')
    .then((Response) => Response.json())
    .then(data => {
        console.log(data);
        data.forEach( e => {
            if (permalink != e.permalink) {
                serviceHTML += `<div class="service">
                                    <div class="serviceImg">
                                        <a href="singleService.php?permalink=${e.permalink}"><img src="img/servicesImg/${e.serviceImage}" alt="best services in maurya laser clinic delhi"></a>        
                                        <span class="serPrice"><span class="newPrice">₹${e.newPrice}</span><strike>₹<span>${e.oldPrice}</span></strike></span>
                                    </div>
                                    <div class="serviceDetails">
                                        <a href="singleService.php?permalink=${e.permalink}"><h2>${e.serviceName.length > 25 ?  e.serviceName.substring(0, 24) + '...' : e.serviceName}</h2></a>
                                        <a href="singleService.php?permalink=${e.permalink}"><p>${e.desc.length > 50 ?  e.desc.substring(0, 49) + '...' : e.desc}</p></a>
                                        <button onclick="inquiryForm.classList.toggle('active');">Book Appointment</button>
                                    </div>
                                </div>`;
            }
        })
        allServices.innerHTML = serviceHTML;
    })
}
allGetData();