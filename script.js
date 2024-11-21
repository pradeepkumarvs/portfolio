// Preloader Script
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    preloader.style.display = 'none'; // Hide preloader
    mainContent.classList.remove('hidden'); // Show main content
});
