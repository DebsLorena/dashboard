/*menu*/

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => { 
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

/*theme*/

const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('ion-icon:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('ion-icon:nth-child(2)').classList.toggle('active');
})