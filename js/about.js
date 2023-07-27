let allPages = document.querySelectorAll('#headerPages li');
allPages.forEach(e => {
    e.classList.remove('active');
})
allPages[2].classList.add('active');
