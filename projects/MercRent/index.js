
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

    card.querySelector('.name').textContent = data.name;
    card.querySelector('.duration').textContent = data.duration;
    card.querySelector('.price').textContent = data.price;
    card.querySelector('.rating').textContent = data.rating;
    card.querySelector('.member').textContent = data.member;
});

function openModal(event) {
    const card = event.currentTarget;
    const data = JSON.parse(card.getAttribute('data-card'));

    // Fill modal content
    document.getElementById('name').textContent = data.name;
    document.getElementById('duration').textContent = data.duration;
    document.getElementById('price').textContent = data.price;
    document.getElementById('rating').textContent = data.rating;
    document.getElementById('member').textContent = data.member;

    // Show modal
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

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

function showAnswer(x) {
    const questions = Array.from(document.querySelectorAll('.question'));
    const answers = Array.from(document.querySelectorAll('.answer'));

    questions.forEach((question, index) => {
        if (index === x) {
            question.classList.add('active');
        } else {
            question.classList.remove('active');
        }
    });

    answers.forEach((answer, index) => {
        if (index === x) {
            answer.classList.remove('hidden');
        } else {
            answer.classList.add('hidden');
        }
    });
}