let menuBtn = document.getElementById('menuIcon');
let menuBox = document.getElementById('headerPages');

menuBtn.onclick = () => {
    menuBox.classList.toggle('active');
} 

// make a payment popup
let donateBtn = document.getElementById('headerDonate');
let scaner = document.getElementById('scaner');
donateBtn.onclick = () =>{
    console.log('this');
    scaner.classList.toggle('active');
}

donateBtn.onclick = () =>{
    scaner.classList.toggle('active');
}

scaner.onclick = () => {
    scaner.classList.toggle('active');
}