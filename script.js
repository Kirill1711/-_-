let burger_btn = document.querySelector('.burger_menu-icon');
let close_btn = document.querySelector('.icon_close');
let burger_menu = document.querySelector('.burger_menu-slider');



burger_btn.addEventListener('click', function() {
    burger_btn.style.display = 'none';
    close_btn.style.display = 'block';
    burger_menu.classList.add('open');
});

close_btn.addEventListener('click', function() {
    close_btn.style.display = 'none';
    burger_btn.style.display = 'block';
    burger_menu.classList.remove('open');
});