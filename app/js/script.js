/* бургер-меню*/

// const body = document.querySelector('body');                      //находим боди чтоб потом заблокировать скролл
// const overlay = document.querySelector('#overlay');               //находим само меню чтоб работать с ним
// const open = document.querySelector('#open');                     //находим кнопку открыть
// const close = document.querySelector('#close');                   //находим кнопку закрыть    
// const link = document.querySelectorAll('.overlay-menu__item');    //находим все элементы с классом overlay-menu__item


// open.addEventListener ('click', function (e) {                    //обработчик на кнопку открыть, отслеживаем клик, по которому
// body.classList.add('body-active-menu');                           //добавляем боди класс, блокирующий скролл
// overlay.classList.add('overlay--open');                           //добавляем оверлею класс, отображающий оверлей
// });

// close.addEventListener ('click', function (e) {                   //обработчик кнопки закрыть, отслеживаем клик, по которому
// body.classList.remove('body-active-menu');                        //с бади снимем примененный класс
// overlay.classList.remove('overlay--open');                        //и с оверлея
// });


// for (var i = 0; i < link.length; i++){                            //перебираем все элементы с классом overlay-menu__item
//   link[i].addEventListener ('click', function (e) {               //чтоб на каждый добавить событие по клику
//   body.classList.remove('body-active-menu');                      //убрать класс с боди
//   overlay.classList.remove('overlay--open');                      //убрать с оверлея
// })
// }


let menu =  (function(options) {

  let buttonOpen = document.querySelector(options.buttonOpen);
  let buttonClose = document.querySelector(options.buttonClose);
  let menu = document.querySelector(options.menu);
  let body = document.querySelector('body');

  let _toggleMenu = function(e) {
    menu.classList.toggle('overlay--open');
    body.classList.toggle('body-active-menu');
  }

  // let close = function(e) {
  //   e.preventDefault();
  //   menu.classList.remove('overlay--open');
  //   body.classList.remove('body-active-menu');
  // }

  let addListeners = function() {
    buttonOpen.addEventListener('click', _toggleMenu);
    let list = document.querySelector('.overlay-menu__list');

    list.addEventListener('click', function(e) {
      let target = e.target;
       if(target.classList.contains('overlay-menu__link')){
        _toggleMenu();
       };
    })
    buttonClose.addEventListener('click', _toggleMenu);    
  }

  return {open:addListeners}
})({
  buttonOpen: '#open',
  buttonClose: '#close',
  menu: '#overlay'
});


menu.open();



/* горизонтальный аккордеон*/

const accordElementVertical = document.querySelector('#acco_v');
 
createAccordV(accordElementVertical);

function createAccordV(element) {
  let activeContent;

  const titles = element.querySelectorAll('.team__block-title');

  element.addEventListener('click', function(event) {
   if (event.target.classList.contains('team__block-title')) {

    const title = event.target;
    let itemActive = document.querySelector('.team__block-item.active');

    if (activeContent) {
      activeContent.classList.remove('active');
    }

    activeContent = title.closest('.team__block-item');
    
    if(activeContent!==itemActive){ 
      activeContent.classList.add('active');
    }
  

  } 
});
}

/* горизонтальный аккордеон22222*/




  /* вертикальный аккордеон*/

let accoMenu = (function() {
  let items = document.querySelectorAll(".menu__acco-item"),
    container = document.querySelector("#acco_h");

  let addListeners = function() {
    container.addEventListener("click", function(e) {
      e.preventDefault();
      let target = e.target;
      while (target != container) {
        if (target.classList.contains("menu__acco-item")) {
          if (target.classList.contains("active")) {
            target.classList.remove("active");
          } else {
            for (let i = 0; i < items.length; i++) {
              items[i].classList.remove("active");
            }
            target.classList.add("active");
          }
          return;
        }
        target = target.parentNode;
      }

      // console.log(target)
    });
  };

  return {
    init: addListeners
  };
})();

accoMenu.init();


// const accordElementHorizontal = document.querySelector('#acco_h');

// createAccord(accordElementHorizontal);

// function createAccord(element) {
//   let activeContent;

//   const titles = element.querySelectorAll('.menu__acco-trigger');

//   element.addEventListener('click', function(event) {
//     event.preventDefault();
//    if (event.target.classList.contains('menu__acco-trigger')) {

//     const title = event.target;

//     if (activeContent) {
//       activeContent.classList.remove('active');
//     }


//     activeContent = title.parentElement;
//     activeContent.classList.add('active');

//   } 
// });
// }

  /* слайдер*/

const slide = (function(option){
  const left = document.querySelector(option.l); //выборка стрелка влево
  const right = document.querySelector(option.r); //выборка стрелка вправо
  const slider = document.querySelector(option.list); //выборка контейнера
  const computed = getComputedStyle(slider); //забираем стили
  const sliderWidth = parseInt(getComputedStyle(slider).width);
  var sliderItemsCounter = slider.children.length;

  let moveSlide = function direction (direction){
    direction.addEventListener("click", function(e) {
      e.preventDefault();
      let currentRight = parseInt(computed.right);
      
      if (currentRight < (sliderItemsCounter-1)*sliderWidth && direction==right) {
        slider.style.right = currentRight + sliderWidth + "px";
      }

      if (currentRight > 0 && direction==left) {
        slider.style.right = currentRight - sliderWidth + "px";
      }
    });
  }
 
  let addListeners = function(){
    moveSlide(right);
    moveSlide(left);
  }



  return {init: addListeners}
})({
  l: ".btn-arrow--prev",
  r: "#arrow_next",
  list: ".slider__list"
});


slide.init();


/*  выпадашка с составом в слайдере(секция бургерс)*/

$('.ingridients').on('mouseenter', e => {
  console.log('its live')
  $('.ingridients').addClass('ingridients--active');
})
$('.ingridients').on('mouseleave', e => {
  console.log('its dead')
  $('.ingridients').removeClass('ingridients--active');
})

  /* отзывы модалки*/
/* обработка формы*/

const overlay = (function() {
  let body = document.querySelector('body');           //переменная боди = находим боди чтоб потом заблокировать скрол
  let link = document.createElement('a');              //переменная линк = создаём ссылку которая добавляется в конце всего содержимого

  link.classList.add('modal_review__close');          //добавление класса ссылке для стилизации
  link.setAttribute('href', '#');                      //добавление атрибута href с содержимым #

  let openOverlay = function(modalId, content) {      //передаётся id модального окна и содержимое модального окна
    let overlay = document.querySelector(modalId);      //
    let innerOverlay = overlay.querySelector('.modal-review__inner');

    if (content) {            //если передали необязательный параметр, то вставить содержимое в блок и после добавить ссылку закрытия
      innerOverlay.innerHTML = content;  //внутрь innerOverlay добавится разметка либо просто строка с текстом
    }
    innerOverlay.appendChild(link);   //добавляем ссылку закрытия после всего содержимого модального окна

    overlay.classList.add('is-active');               //добавляем класс и показываем модалку
    body.classList.add('locked');                     //блокируем боди

    link.addEventListener('click', (e) => {              //обработка клика на созданный крестик
      e.preventDefault();
      closeOverlay(modalId);                             //закрытие
    })

     overlay.addEventListener('click', (e) => {           //обработка клика вне модалки       
      e.preventDefault();
      if (e.target === overlay) {
        closeOverlay(modalId);                           //закрываем
      }
    })

    document.addEventListener('keydown', function(e) {            
      if (e.keyCode == 27) closeOverlay(modalId);         //закрываем при нажатии ESC
    });
    }

  let closeOverlay = function(modalId) {              //функция закрытия, удаляет классы у выбранного модального окна и боди
    let overlay = document.querySelector(modalId);    //в качестве параметра передаётся id(или класс) формы
                                                      //главное чтоб передавалась строка 
    overlay.classList.remove('is-active');            //удаляем навешенные классы
    body.classList.remove('locked');
  }

  let setContent = function (modalId,content) {       //принимает два параметра, строка с классом модального окна и его содержимое
                                                      //заменяет контент который был в модалке при её открытии
    let overlay = document.querySelector(modalId);    //оверлей будет содержать тот элемент на который кликнули типа
    let innerOverlay = overlay.querySelector('modal-review__inner');  //выборка модуля modalreviewinner

    if (content) {          //если передали необязательный параметр, то вставить содержимое в блок и после добавить ссылку закрытия
      innerOverlay.innerHTML = content;
      nnerOverlay.appendChild(link);
    }
  }

  return {
    open: openOverlay,
    close: closeOverlay,
    setContent: setContent
  }
})();

/*обработка отправки формы*/

var ajaxForm = function(form) {

  let formData = new FormData();
  formData.append("name", form.elements.name.value);
  formData.append("phone", form.elements.phone.value);
  formData.append("comment", form.elements.comment.value);
  formData.append("to", "v8a8rt@gmail.com");      

  // var data = {
  //   name: form.elements.name.value,
  //   phone: form.elements.phone.value,
  //   comment: form.elements.comment.value,
  //   to: "v8a8rt@gmail.com"
  // },
  let url = "https://webdev-api.loftschool.com/sendmail/";

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", url);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send(formData);
  // xhr.send(JSON.stringify(data));

  return xhr;
}

var submitForm = function(e) {
  e.preventDefault();
  var form = e.target;
  let request = ajaxForm(form);

  request.addEventListener('load', () => {
    if (request.status >= 400) {
      let content = 'Ошибка соединения с сервером, попробуйте позже';

      overlay.open('#modal-review', `${content}. Ошибка ${request.status}`)
    } else if (request.response.status) {
      let content = request.response.message;
      overlay.open('#modal-review', content);
    } else {
      let content = request.response.message;
      overlay.open('#modal-review', content);
    }
  });
}

let myForm = document.querySelector('#main-form');
myForm.addEventListener('submit', submitForm);  



/*Функция открытия отзыва*/

let reviewOpen = function(content) {
  let button = document.querySelector('.review-btn');
      container = document.querySelector('.reviews__list');

  container.addEventListener('click', function(e) {
    e.preventDefault();
    let target = e.target;
    if (target.className === button.className) {
      overlay.open('#modal-review', content);
    }
  });
}

content = document.querySelector('#overlay1').innerHTML;
reviewOpen(content);



