const linksContainer = document.querySelector('.links-container');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger img');
const close = document.querySelector('.close img');
const home = document.querySelector('.home');


hamburger.addEventListener('click', ()=> {
    linksContainer.classList.add('active');
    hamburger.style.display = 'none';
    close.style.display = 'block'
})
close.addEventListener('click', ()=> {
    linksContainer.classList.toggle('active');
    hamburger.style.display = 'block';
    close.style.display = 'none';
})
window.addEventListener('scroll', ()=> {
   linksContainer.classList.remove('active');
   
   nav.style.position = 'sticky';
   nav.style.top = '0';
});