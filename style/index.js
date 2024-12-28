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

function toggleTheme() {
    const toggle = document.querySelector('.toggle-container');
    const knob = document.querySelector('.toggle-knob');
    toggle.classList.toggle('dark');
    knob.classList.toggle('darknob');
}

function confirmDelete() {
    Swal.fire({
        title: "You sure?",
        text: "Proceed to gmail?",
        icon: "question",
        confirmButtonText: '<a href="https://gmail.com">OK</a>' 
      });
}

function toBio() {
    const bio = document.getElementById('biodata');
    const nonbio = document.getElementById('non-bio');

    bio.classList.toggle('none');
    nonbio.classList.toggle('none');
}