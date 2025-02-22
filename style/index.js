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

    if (dropdownContent) {
        dropdownContent.classList.toggle('shows');
        dropdownButton.classList.toggle('open');
    }
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
    formattedDate = now1.toLocaleDateString("en-GB", { weekday:"long", year: "numeric", month: "long", day: "numeric" });

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
