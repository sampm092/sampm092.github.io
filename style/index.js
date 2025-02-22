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

function projectDesc(elementId) {
    const dropdownButton = document.getElementById(elementId);
    const dropdownContent = document.getElementById(`dropdownContent-${elementId}`);
    // const icon = dropdownButton.querySelector('.icon');

    if (dropdownContent) {
        dropdownContent.classList.toggle('show');
        // icon.classList.toggle('open');
    }
}

// const dropdownButton2 = document.getElementById('dropdownButton2');
// const dropdownContent2 = document.getElementById('dropdownContent2');
// const icon2 = dropdownButton.querySelector('.icon2');

// dropdownButton2.addEventListener('click', () => {
//   dropdownContent2.classList.toggle('show');
//   icon2.classList.toggle('open');
// });

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
