// Desplegar navbar de menu hamburguesa
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
	menu.classList.toggle('show');
});

// Show more cards
const CARDS_PER_PAGE = 3;
const TOTAL_CARDS = document.querySelectorAll('.card').length;

const loadMoreBtn = document.getElementById('load-more-btn');
let currentCards = CARDS_PER_PAGE;

loadMoreBtn.addEventListener('click', () => {
  const cardsToShow = document.querySelectorAll(`.card:nth-of-type(n+${currentCards + 1}):nth-of-type(-n+${currentCards + CARDS_PER_PAGE})`);
  cardsToShow.forEach(card => card.style.display = 'block');
  currentCards += CARDS_PER_PAGE;
  if (currentCards >= TOTAL_CARDS) {
    loadMoreBtn.style.display = 'none';
  }
});
