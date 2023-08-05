// this is for menu status bar
let allMenu = document.querySelectorAll('header nav ul li');
allMenu.forEach(e => {
    e.classList.remove('active');
})
allMenu[3].classList.add('active');
