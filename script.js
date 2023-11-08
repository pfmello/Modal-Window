'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

document.querySelector('.show-modal').addEventListener('click', function () {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

document.querySelector('.close-modal').addEventListener('click', function () {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.querySelector('.modal').style.display = 'none';
    overlay.style.display = 'none';
  }
});

overlay.addEventListener('click', function () {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});
