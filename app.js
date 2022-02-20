const home = document.querySelector('#home');
const aboutMe = document.querySelector('#perfil');
const portfolio = document.querySelector('#portfolio');
const services = document.querySelector('#services');

// const redireccionarHome = () => {
//     window.location.href = './index.html'
// }

const redireccionarAboutMe = () => {
    window.location.href = './about_me.html'
}

const redireccionarPortfolio = () => {
    window.location.href = './portfolio.html'
}

const redireccionarServices = () => {
    window.location.href = './services.html'
}

// home.addEventListener('click', redireccionarHome);
aboutMe.addEventListener('click', redireccionarAboutMe);
portfolio.addEventListener('click', redireccionarPortfolio);
services.addEventListener('click', redireccionarServices);