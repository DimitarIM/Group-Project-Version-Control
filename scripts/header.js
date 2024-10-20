const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const logo = document.querySelector('.logo')
const link = document.querySelector('.menu li')

// GSAP Start Animation
gsap.from('.menu-toggle', { duration: 0.7 , opacity: 0, scale: 0, y: '-100%' })

gsap.from('.logo', { duration: 1 , opacity: 0, scale: 0})

gsap.from('.welcome-container h3', { duration: 1.5, opacity: 0, x: '-100%', delay: 0.5})
gsap.from('.welcome-container h2', { duration: 1.5, opacity: 0, x: '-100%', delay: 0.8})
gsap.from('.welcome-container h1', { duration: 1.5, opacity: 0, x: '-100%', delay: 1.2})
gsap.from('.welcome-container a ', { duration: 1.5, opacity: 0, delay: 2.5})

gsap.from('.team-container h3', { duration: 1.5, opacity: 0, x: '100%', delay: 1.7})
gsap.from('.team-container h1', { duration: 1.5, opacity: 0, x: '100%', delay: 1.9})



// Toggle
menuToggle.addEventListener('click', (event) => {
    event.preventDefault();

    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
})

// Hover
logo.addEventListener('mouseover', () =>{
    let pulse = document.createElement('div');

    pulse.classList.add('pulse');
    logo.appendChild(pulse);

    setTimeout(function () {
        pulse.remove();
    }, 1000);
})

