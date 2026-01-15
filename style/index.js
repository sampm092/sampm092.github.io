// Initialize Lenis FOR SMOOTH SCROLLL
const lenis = new Lenis();
let cuLang = 'en';
let lastScrollY = window.scrollY;

document.querySelectorAll('[data-lang="id"]').forEach(element => {
    element.style.display = 'none';
});

window.addEventListener('scroll', () => { //menghilangkan header ketika scroll
    const currentScrollY = window.scrollY;
    const about = document.getElementById('about');
    const sectionTop = about.offsetTop;
    const sectionHeight = about.offsetHeight;

    if (currentScrollY > lastScrollY) {
        // Scrolling up
        header.classList.add('show');
    } else {
        // Scrolling down
        header.classList.remove('show');
    }

    lastScrollY = currentScrollY;

    if (scrollY >= sectionTop && scrollY) {
        header.classList.remove('text-greenText')
        header.classList.add('text-greenBG');
    } else {
        header.classList.remove('text-greenBG');
        header.classList.add('text-greenText');
    }
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function projectDesc(elementId) {
    const dropdownButton = document.getElementById(elementId);
    const dropdownContent = document.getElementById(`dropdownContent-${elementId}`);

    if (dropdownContent) {
        dropdownContent.classList.toggle('shows');
        dropdownButton.classList.toggle('open');
    }
}

function showAccount(elementId) {
    const social = document.getElementById(elementId);
    social.classList.toggle('visible'); // hide/show the class to show the box
}

function toggleTheme() {
    const toggle = document.querySelector('.toggle-container');
    const knob = document.querySelector('.toggle-knob');
    const bgdark = document.querySelectorAll('[class*="bg130"]')
    const nava = document.querySelectorAll('.nav a, header')
    toggle.classList.toggle('dark');
    knob.classList.toggle('darknob');

    cuLang = cuLang === 'en' ? 'id' : 'en';

    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.classList.contains('btn')) { //handle button
            element.style.display = element.getAttribute('data-lang') === cuLang ? 'inline-block' : 'none';
        } else {
            element.style.display = element.getAttribute('data-lang') === cuLang ? 'block' : 'none';
        }
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
            element.style.backgroundColor = '#000';
        });
        nava.forEach(element => {
            element.style.color = '#fff';
        });
    }
}

function a(duration) { // duration in ms
    const start = window.scrollY;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4); // Ease-out effect
        window.scrollTo(0, start * (1 - ease));

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}

function openNavigation() {
    const navDiv = document.querySelectorAll('#navi div');
    const open = document.getElementById('open-b');
    const close = document.getElementById('close-b');

    navDiv.forEach(element => {
        if (!element.id.includes('eo')) {
            element.style.transform =
                element.style.transform == 'translateX(100%)'
                    ? 'translateX(0)'
                    : 'translateX(100%)';
        }
    });

    open.classList.toggle('none');
    close.classList.toggle('none');
}

function confirmDelete() {
    Swal.fire({
        title: "You sure?",
        text: "Proceed to gmail",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Go",
        cancelButtonText: "No",
        confirmButtonColor: "#7fd067",
        cancelButtonCOlor: "#ef4444",
        background: "#03300f", // dark background
        color: "#fff",      // text color
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(
                "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlLWRkCnGkQzgpwngjTLVqBXHWVrLsrGTwRDkQnqfRxwKtrvZzVtjLMbRVrzhRPfvtzDFL", "_blank"
            );
        }
    });
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

