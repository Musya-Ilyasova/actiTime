const burger = document.querySelector('.burger');
const mainMenu = document.querySelector('.header__nav');
const mainheader = document.querySelector('.header');
const subMenu = document.querySelector('.header-menu__item_toggle');
burger.addEventListener('click', function (event) {
  event.preventDefault()
  openMenu(event);
})

subMenu.addEventListener('click', function (event) {
  event.preventDefault();
  openSubMenu(event);
})

const openMenu = (event) => {
  let me = event.currentTarget
  me.classList.add('burger-close')
  mainMenu.classList.add('open-menu')
  document.body.classList.add('noscroll')
  me.addEventListener('click', closeMenu)
}
const openSubMenu = (event) => {
  subMenu.classList.toggle('open-submenu')
}

const closeMenu = () => {
  burger.classList.remove('burger-close')
  mainMenu.classList.remove('open-menu')
  document.body.classList.remove('noscroll')
  burger.removeEventListener('click', closeMenu)
}

