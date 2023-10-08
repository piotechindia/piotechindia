// JavaScript to toggle menu button class
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('clicked');
});