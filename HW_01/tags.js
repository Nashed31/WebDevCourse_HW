
const cssFiles = ['basic.css', 'dark.css', 'modern.css'];
let current = 0;

const themeLink = document.getElementById('themeStylesheet');
const switchBtn = document.getElementById('switchThemeBtn');

switchBtn.addEventListener('click', () => {
    current = (current + 1) % cssFiles.length;
    themeLink.setAttribute('href', `SKINS/${cssFiles[current]}`);
});