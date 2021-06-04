// Menu

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuOverlay = document.querySelector('.menu__overlay'),
      menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach( item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Progress

const progress = document.querySelectorAll('.skills__progress-item-percent'),
    bars = document.querySelectorAll('.skills__progress-item-bar--colored');

progress.forEach( (item, i) => {
    bars[i].style.width = item.innerHTML;
});