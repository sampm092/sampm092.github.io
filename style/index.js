let lastScrollY = window.scrollY;
let cuLang = 'en';
const header = document.getElementById('header');


window.addEventListener('scroll', () => { //menghilangkan header ketika scroll
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

// Function to open the modal and display the clicked image
function openPreview(imageSrc) {
    var modal = document.getElementById("preview");
    var modalImg = document.getElementById("img01");

    modal.style.display = "block";
    modalImg.src = imageSrc;

    document.addEventListener("keydown", handleEscapeKey);
}

// Function to close the modal
function closePreview() {
    var modal = document.getElementById("preview");
    modal.style.display = "none";

    document.removeEventListener("keydown", handleEscapeKey);
}

function handleEscapeKey(event) { //menutup section dengan key 'esc'
    if (event.key === "Escape" || event.keyCode === 27) {
        closePreview();
    }
}

function showAccount(elementId) {
    const social = document.getElementById(elementId);
    social.classList.toggle('visible'); // hide/show the class to show the box

}

function projectDesc(elementId) {
    const dropdownButton = document.getElementById(elementId);
    const dropdownContent = document.getElementById(`dropdownContent-${elementId}`);

    if (dropdownContent) {
        dropdownContent.classList.toggle('shows');
        dropdownButton.classList.toggle('open');
    }
}

document.querySelectorAll('[data-lang="id"]').forEach(element => {
    element.style.display = 'none';
});

function toggleTheme() {
    const toggle = document.querySelector('.toggle-container');
    const knob = document.querySelector('.toggle-knob');
    const bgdark = document.querySelectorAll('[class*="bg130"]')
    const nava = document.querySelectorAll('.nav a,footer, header')
    toggle.classList.toggle('dark');
    knob.classList.toggle('darknob');

    cuLang = cuLang === 'en' ? 'id' : 'en';
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.style.display = 'none';
    });

    document.querySelectorAll(`[data-lang="${cuLang}"]`).forEach(element => {
        element.style.display = 'block';
    });

    if (cuLang == 'id') {
        bgdark.forEach(element => {
            element.style.backgroundColor = '#fff';
        });
        nava.forEach(element => {
            element.style.color = '#000';
        });

    } else {
        bgdark.forEach(element => {
            element.style.backgroundColor = '#130c0b';
        });
        nava.forEach(element => {
            element.style.color = '#fff';
        });
    }
}

function confirmDelete() {
    Swal.fire({
        title: "You sure?",
        text: "Proceed to gmail?",
        icon: "question",
        confirmButtonText: '<a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlLWRkCnGkQzgpwngjTLVqBXHWVrLsrGTwRDkQnqfRxwKtrvZzVtjLMbRVrzhRPfvtzDFL" target="_blank">OK</a>'
    });
}

function toBio() {
    const bio = document.getElementById('biodata');
    const nonbio = document.getElementById('non-bio');

    bio.classList.toggle('none');
    nonbio.classList.toggle('none');
}

function timeNow1() {
    const timeNow = document.getElementById("date-now");
    const now1 = new Date();
    formattedDate = now1.toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

    timeNow.textContent = "Date: " + formattedDate;
}
timeNow1();

function timeNow() {
    const timeNowElement = document.getElementById("time-now");

    function updateTime() {
        const now = new Date();
        timeNow.textContent = now;
        timeNowElement.textContent = now.toLocaleTimeString(); // Format time nicely
    }

    updateTime(); // Run immediately
    setInterval(updateTime, 1000); // Update every second
}

timeNow(); // Start ticking
