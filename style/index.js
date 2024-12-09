let lastScrollY = window.scrollY;
const header = document.getElementById('header');   

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling up
        header.classList.add('show');
    } else {
        // Scrolling down
        header.classList.remove('show');
    }

    lastScrollY = currentScrollY;
});

function showAccount(elementId) {
    const social = document.getElementById(elementId);
        social.classList.toggle('visible'); // hide/show the class to show the box

}
