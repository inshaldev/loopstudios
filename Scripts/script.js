const navBtn = document.querySelector('#hamburger-1');
const navItems = document.querySelectorAll('.nav-link-items');
const topRow = document.querySelector('.top-row');
const navToggle = () => {
  const navbar = document.querySelector('.nav-links');

  navbar.classList.remove('none');
  navbar.classList.toggle('navbar-closed');
  navBtn.classList.toggle('is-active');
  topRow.classList.toggle('fixed');
};
navBtn.addEventListener('click', navToggle);
navItems.forEach((item) => {
  console.log('IRPESSED');
  item.addEventListener('click', navToggle);
});
