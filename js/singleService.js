let allPages = document.querySelectorAll('#headerPages li');
allPages.forEach(e => {
    e.classList.remove('active');
})
allPages[1].classList.add('active');