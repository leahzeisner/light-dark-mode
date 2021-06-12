// DOM Elements
const rootElement = document.documentElement
const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

const white = 'rgb(255 255 255 / 50%)'
const black = 'rgb(0 0 0 / 50%)'



// Dark or Light Images
function imageMode(mode) {
    image1.src = `img/undraw_proud_coder_${mode}.svg`
    image2.src = `img/undraw_feeling_proud_${mode}.svg`
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`
}



// Set Light/Dark Mode Styles
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? black : white
    textBox.style.backgroundColor = isDark ? white : black
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode'
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') 
            : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    isDark ? imageMode('dark') : imageMode('light')
}



// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        rootElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        toggleDarkLightMode(isDark = true)
    } else {
        rootElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        toggleDarkLightMode(isDark = false)
    }
}



// Event Listener
toggleSwitch.addEventListener('change', switchTheme)



// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
    rootElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
        toggleDarkLightMode(true)
    }
}