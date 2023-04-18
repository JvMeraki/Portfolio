// Desplegar navbar de menu hamburguesa
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
	menu.classList.toggle('show');
});

// Código a implementar Cards
const cards = document.querySelectorAll('.card');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let cardsPerPage = 6;

function showCards(cards, page, cardsPerPage) {
   for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add('hide');
      if (i >= (page * cardsPerPage) - cardsPerPage && i < page * cardsPerPage) {
         cards[i].classList.remove('hide');
      }
   }
}

function createPagination(cards, cardsPerPage) {
   let pages = Math.ceil(cards.length / cardsPerPage);
   for (let i = 1; i <= pages; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#';
      a.innerHTML = i;
      li.appendChild(a);
      pagination.appendChild(li);

      a.addEventListener('click', function() {
         currentPage = i;
         showCards(cards, currentPage, cardsPerPage);
      });
   }

   let li = document.createElement('li');
   let a = document.createElement('a');
   a.href = '#';
   a.innerHTML = '>';
   li.appendChild(a);
   pagination.appendChild(li);

   a.addEventListener('click', function() {
      if (currentPage < pages) {
         currentPage++;
         showCards(cards, currentPage, cardsPerPage);
      }
   });

   showCards(cards, currentPage, cardsPerPage);
}

createPagination(cards, cardsPerPage);
