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

console.log(scaner);

let HWDonateBtn = document.getElementById('HWDonateBtn');
// let scaner = document.getElementById('scaner');
HWDonateBtn.onclick = () =>{
    scaner.classList.toggle('active');
}

console.log('this is working now');
