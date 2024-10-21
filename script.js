// script.js

// Selecteer de elementen
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    // Toggle de class 'active' om het menu te tonen/verbergen
    nav.classList.toggle('active');
});
