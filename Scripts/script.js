const navBtn = document.querySelector('.menu-icon');
const navItems = document.querySelectorAll('.nav-link-items');
const navToggle = () => {
  const navbar = document.querySelector('.nav-links');

  navbar.classList.remove('none');
  navbar.classList.toggle('navbar-closed');
  navBtn.classList.toggle('closed');
};
navBtn.addEventListener('click', navToggle);
navItems.forEach((item) => {
  console.log('IRPESSED');
  item.addEventListener('click', navToggle);
});
