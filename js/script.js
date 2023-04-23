// Desplegar navbar de menu hamburguesa
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav ul');

function toggleMenu() {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function resetMenu() {
  if (window.innerWidth <= 874) {
    menuIcon.addEventListener('click', toggleMenu);
  } else {
    menuIcon.removeEventListener('click', toggleMenu);
    menu.style.display = '';
  }
}

resetMenu();
window.addEventListener('resize', resetMenu);


// Pantalla principal
let name = 'Javi...';
const nameColors = {
    'Jv_meraki': '#e6a733',
    'Javi...': '#e6a733'
};

setInterval(() => {
    if (name === 'Jv_meraki') {
        name = 'Javi...';
    } else {
        name = 'Jv_meraki';
    }
    document.querySelector('.title2').style.color = nameColors[name];
    document.querySelector('.title2').textContent = name;
    document.querySelector('.name-title').textContent = name;
}, 3000);


// Show more cards
const CARDS_PER_PAGE = 6;
const TOTAL_CARDS = document.querySelectorAll('.card').length;

const loadMoreBtn = document.getElementById('load-more-btn');
// let currentCards = CARDS_PER_PAGE;
let currentCards = 3;

// Código para mostrar las primeras 6 tarjetas al cargar la página, actualmente deshabilitado ya que al tener un gallery con 6 imagenes, sería un total de 12 imagenes a cargar y se vuelve un poco lento, se muestran solo 3 para optimizar la carga mostrando solo 9 al inicio
// const cardsToShow = document.querySelectorAll(`.card:nth-of-type(-n+${currentCards})`);
// cardsToShow.forEach(card => card.style.display = 'inline-block');
// currentCards += CARDS_PER_PAGE;

loadMoreBtn.addEventListener('click', () => {
  const cardsToShow = document.querySelectorAll(`.card:nth-of-type(n+${currentCards + 1}):nth-of-type(-n+${currentCards + CARDS_PER_PAGE})`);
  cardsToShow.forEach(card => card.style.display = 'inline-block');
  currentCards += CARDS_PER_PAGE;
  if (currentCards >= TOTAL_CARDS) {
    loadMoreBtn.style.display = 'none';
  }
});
