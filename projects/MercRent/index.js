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