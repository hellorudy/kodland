const menuButton = document.querySelector('#mobileMenuBtn')
const closeMenuButton = document.querySelector('#closeMenuBtn')
const menu = document.querySelector('#mobileMenu')

const toggleMobileMenu = () => {
   menu.classList.toggle('header__wrapper__nav--active')
}

menuButton.addEventListener('click', toggleMobileMenu)
closeMenuButton.addEventListener('click', toggleMobileMenu)

