/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const header = document.getElementById('header')

/*===== Menu Show ======== */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== Menu Hidden ======== */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  // When the scroll is greater than 50 viewport height, add the scroll-header class
  this.scrollY >= 50
    ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
