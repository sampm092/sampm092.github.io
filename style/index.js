let lastScrollY = window.scrollY;
const header = document.getElementById('header');


// function showAccount() {
//     setTimeout(() => ig.classList.remove("none"), 500);
    
// }

function showAccount() {
    const ig = document.getElementById('ig-a');
        ig.classList.toggle('visible'); // hide/show the class to show the box

}
   

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

