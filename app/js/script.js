/* бургер-меню*/

const body = document.querySelector('body');                      //находим боди чтоб потом заблокировать скролл
const overlay = document.querySelector('#overlay');               //находим само меню чтоб работать с ним
const open = document.querySelector('#open');                     //находим кнопку открыть
const close = document.querySelector('#close');                   //находим кнопку закрыть    
const link = document.querySelectorAll('.overlay-menu__item');    //находим все элементы с классом overlay-menu__item


open.addEventListener ('click', function (e) {                    //обработчик на кнопку открыть, отслеживаем клик, по которому
body.classList.add('body-active-menu');                           //добавляем боди класс, блокирующий скролл
overlay.classList.add('overlay--open');                           //добавляем оверлею класс, отображающий оверлей
});

close.addEventListener ('click', function (e) {                   //обработчик кнопки закрыть, отслеживаем клик, по которому
body.classList.remove('body-active-menu');                        //с бади снимем примененный класс
overlay.classList.remove('overlay--open');                        //и с оверлея
});


for (var i = 0; i < link.length; i++){                            //перебираем все элементы с классом overlay-menu__item
  link[i].addEventListener ('click', function (e) {               //чтоб на каждый добавить событие по клику
  body.classList.remove('body-active-menu');                      //убрать класс с боди
  overlay.classList.remove('overlay--open');                      //убрать с оверлея
})
}


// let menu = (function(options) {

//   let buttonOpen = document.querySelector(options.buttonOpen);
//   let buttonClose = document.querySelector(options.buttonClose);
//   let menu = document.querySelector(options.menu);
//   let body = document.querySelector('body');

//   let _toggleMenu = function(e) {
//     menu.classList.toggle('overlay--open');
//     body.classList.toggle('body-active-menu');
//   }

//   // let close = function(e) {
//   //   e.preventDefault();
//   //   menu.classList.remove('overlay--open');
//   //   body.classList.remove('body-active-menu');
//   // }
  
//   let addListeners = function() {
//     buttonOpen.addEventListener('click', _toggleMenu);
    
//     let link = document.qu ('link');
    
//     link.addEventListener('click', _toggleMenu);
//     buttonClose.addEventListener('click', _toggleMenu);
//   }

//   return {
//     open: addListeners
//     // close: close
//   };
// })({
//   buttonOpen: '#open',
//   buttonClose: '#close',
//   menu: '#overlay'
// });

// menu.open();




/* вертикальный аккордеон*/

/* горизонтальный аккордеон*/

/* слайдер*/

/* отзывы модалки*/

/* обработка формы*/