let allPages = document.querySelectorAll('#headerPages li');
allPages.forEach(e => {
    e.classList.remove('active');
})
allPages[3].classList.add('active');
