let lastScrollY = window.scrollY;
const header = document.getElementById('header');
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
const icon = dropdownButton.querySelector('.icon');

dropdownButton.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
  icon.classList.toggle('open');
});


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
        confirmButtonText: '<a href="https://gmail.com" target="_blank">OK</a>'
    });
}

function toBio() {
    const bio = document.getElementById('biodata');
    const nonbio = document.getElementById('non-bio');

    bio.classList.toggle('none');
    nonbio.classList.toggle('none');
}

function timeNow() {
    const timeNow = document.getElementById("time-now");
    const now = new Date();

    timeNow.textContent = now;
}
timeNow();
