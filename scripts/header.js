const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')

// GSAP Start Animation

gsap.from('.menu-toggle', { duration: 0.7 , opacity: 0, scale: 0, y: '-100%' })

gsap.from('.logo', { duration: 1 , opacity: 0, scale: 0, y: '-100%' })

// Toggle Script
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
})

// Logo Hover

let logo = document.querySelector('.logo')

