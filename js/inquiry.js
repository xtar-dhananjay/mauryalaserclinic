let inquiryBtn = document.getElementById('inquiryBtn');
let inquiryName = document.getElementById('inquiryName');
let inquiryPhone = document.getElementById('inquiryPhone');
let inquiryCloseBtn = document.getElementById('inquiryCloseBtn');
let inquiryForm = document.getElementById('inquiryForm');

inquiryCloseBtn.onclick = () => {
    inquiryForm.classList.toggle('active');
}

inquiryBtn.onclick = (e) => {
    let inquiryStatus = false;
    e.preventDefault();

    // name
    if (inquiryName.value.length > 1) {
        inquiryStatus = true;

        // phone
        let numberRegex = /^[6-9]\d{9}$/;
        if (numberRegex.test(inquiryPhone.value)){
            inquiryStatus = true;
        }else{
            inquiryStatus = false;
            errMsg('Write a valid Phone number');
        }

        
    }else{
        inquiryStatus = false;
        errMsg('Write a Name');
    }

    if (inquiryStatus == true) {
        inquiryBtn.style.pointerEvents = "none";
        inquiryBtn.innerText = "Submitting";
        inquiryBtn.style.background = "lightgray";
        let mainForm = document.querySelector('#inquiryForm form');
        let inquiryName = document.getElementById('inquiryName').value;
        let inquiryPhone = document.getElementById('inquiryPhone').value;

        // Create an object with the data
        let jsonObject = {
            name: inquiryName,
            phoneNumber: inquiryPhone
        };

        // Convert the object to JSON string
        let jsonData = JSON.stringify(jsonObject);
        
        fetch('php/bookApointment/insert.php', {
            method: "POST",
            body: jsonData,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( Response => Response.json())
        .then( data => {
            if (data.status == "success") {
                inquiryForm.classList.toggle('active');
                mainForm.reset();
                sucMsg('Wait Maurya Team Call you after view minuts');
            }else{
                errMsg(status.message);
            }
            inquiryBtn.style.pointerEvents = "auto";
            inquiryBtn.innerText = "Submit";    
            inquiryBtn.style.background = "var(--main-color)";
        })
    }

}
