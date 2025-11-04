let lastScrollY = window.scrollY;
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

// Find all cards
const cards = document.querySelectorAll('.card');

// Loop through each card and fill in data
cards.forEach(card => {
    const data = JSON.parse(card.getAttribute('data-card'));
    console.log(data);

    card.querySelector('.name').textContent = data.name;
    card.querySelector('.duration').textContent = data.duration;
    card.querySelector('.price').textContent = data.price;
    card.querySelector('.rating').textContent = data.rating;
    card.querySelector('.member').textContent = data.member;
});

// For slider 
document.addEventListener('DOMContentLoaded', () => {
    //Run the code inside this block only after the HTML document has finished loading.
    const slidesContainer = document.querySelector('.slider');
    const slides = Array.from(document.querySelectorAll('.containment'));
    const dotsContainer = document.querySelector('.dots');

    let current = 0;
    const total = slides.length;

    // build dots
    slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(btn);
    });
    const dots = Array.from(dotsContainer.children);

    function updateUI() {
        // translate slides container
        slidesContainer.style.transform = `translateX(-${current * 100}%)`;
        // update dots
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function goTo(i) {
        current = (i + total) % total;
        updateUI();
        resetAuto(); // optional: reset auto timer on manual change
    }

    // auto slide
    let auto = setInterval(() => goTo(current + 1), 10000);
    function resetAuto() {
        clearInterval(auto);
        auto = setInterval(() => goTo(current + 1), 10000);
    }

    // initial UI
    goTo(0);
});