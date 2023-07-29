let allPages = document.querySelectorAll('#headerPages li');
allPages.forEach(e => {
    e.classList.remove('active');
})
allPages[4].classList.add('active');



// Form validation
let submitBtn = document.getElementById('submitBtn');
let form = document.getElementById('form');
submitBtn.onclick = (e) => {
    let contactName = document.getElementById('contactName');
    let contactPhone = document.getElementById('contactPhone');
    let contactEmail = document.getElementById('contactEmail');
    let contactStatus = false;
    e.preventDefault();

    // name
    if (contactName.value.length > 1) {
        contactStatus = true;

        // email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(contactEmail.value)){

            // phone
            let numberRegex = /^[6-9]\d{9}$/;
            if (numberRegex.test(contactPhone.value)){
                contactStatus = true;
                
            }else{
                contactStatus = false;
                errMsg('Write a valid Phone number');
            }
            
        }else{
            contactStatus = false;
            errMsg('Write a valid Email');
        }        
        
    }else{
        contactStatus = false;
        errMsg('Write a Name');
    }

    if (contactStatus == true) {
        sendEmail();
    }

}

function sendEmail(){
    let contactName = document.getElementById('contactName');
    let contactPhone = document.getElementById('contactPhone');
    let contactEmail = document.getElementById('contactEmail');
    let contactMsg = document.getElementById('contactMsg');
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sanjeevteachuz@gmail.com",
        Password : "C67D15B680498961E22205E7C767A1C99BF8",
        To : 'mauryalaserclinic07@gmail.com',
        From : 'sanjeevtechuz@gmail.com',
        Subject : "New Message From MansinghFoundation.com",
        Body : `Name: ${contactName.value} <br> Email: ${contactEmail.value} <br> Phone No.: +91 ${contactPhone.value} <br> Message: ${contactMsg.value}`
    }).then(
      message => {
        sucMsg('Form Submitted Successfully')
        form.reset();
    }
    );
}