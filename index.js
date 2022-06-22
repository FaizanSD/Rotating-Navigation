const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));

const para = document.querySelectorAll('p');

para.forEach( par => {
  par.innerText += 'FrontEnd Web Development is the year in the case of the year int he will be !';
})
