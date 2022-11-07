const toggle_btn = document.querySelector('#toggle');
const open = document.querySelector('#open');
const modal = document.querySelector('#modal');
const close_btn = document.querySelector('#close');

toggle_btn.addEventListener('click', () => {
   document.body.classList.toggle('show-nav');
})

open.addEventListener('click', () => {
   modal.classList.add('show-modal');
});

close_btn.addEventListener('click', () => {
   modal.classList.remove('show-modal');
});

window.addEventListener('click', (e) => {
   e.target == modal ? modal.classList.remove('show-modal') : false;
});