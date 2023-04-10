//console.log('shelter1:\n Main +60: \nПроверка верстки +7\nВёрстка соответствует макету +35\nТребования к css +6\nИнтерактивность элементов +12\n Pets +40:\nПроверка верстки +7\nВёрстка соответствует макету +15\nТребования к css +4\nИнтерактивность элементов +14');
//console.log('shelter2:\n1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px, 768px, 320px: +42;\n2.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px, 768px, 320px: +18;\n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки: +20;\n4.Верстка резиновая: +8;\n5.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4;\n6.Верстка обеих страниц валидная: +8')
console.log('1.Реализация burger menu на обеих страницах: +26\n2.Реализация слайдера-карусели на странице Main: +36\n3.Реализация пагинации на странице Pets: +32: при изменении ширины экрана пагинация перестраивается и работает ТОЛЬКО после перезагрузки страницы -4\n4.Реализация попап на обеих страницах: +12')

{

  let nameArr = [
    {
      "name": "Jennifer",
      "img": "../../assets/modal/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/modal/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/modal/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/modal/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/modal/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/modal/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/modal/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/modal/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

  const body = document.querySelector('.body');
  const burger = document.querySelector('.burger');
  const modal = document.querySelector('.modal-window');
  const navigation = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.nav_item');
  const popup = document.querySelector('.popup');
  
  const BTN_RIGHT = document.querySelector('.slider_button__right');
  const BTN_LEFT = document.querySelector('.slider_button__left');
  const CAROUSEL = document.querySelector('.slider-track');
  const ITEM_LEFT = document.querySelector('.block-left');
  const ITEM_RIGHT = document.querySelector('.block-right');
  const ITEM_CENTER = document.querySelector('.block-active');

  
  const popupButton = document.querySelector('.popup_button');
  const popupImage = document.querySelector('.popup_image');
  const popupTitle = document.querySelector('.popup_title');
  const popupType = document.querySelector('.popup_type');
  const popupText = document.querySelector('.popup_text');
  const popupAge = document.querySelector('.popup_age');
  const popupInoculations = document.querySelector('.popup_inoculations');
  const popupDiseases = document.querySelector('.popup_diseases');
  const popupParasites = document.querySelector('.popup_parasites');

// Burger menu

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_rotate');
    modal.classList.toggle('modal-window_active');
    navigation.classList.toggle('navigation_active');
    body.classList.toggle('body_fixed');
  })

  const removeModal = () => {
    navigation.classList.remove('navigation_active');
    modal.classList.remove('modal-window_active');
    body.classList.remove('body_fixed');
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    burger.classList.remove('burger_rotate');
    popup.classList.remove('popup_active');
  }

  modal.addEventListener('click', removeModal);
  
  navLinks.forEach(item => item.addEventListener('click', removeModal));

// main slider
  
  function createCardTemplate() {
    const slideItem = document.createElement('div');
    slideItem.classList.add('slider_item');
    return (slideItem);
  }

  function createStartElem() {
    let indexArr = [];
    while (indexArr.length < 3) {
      let e = Math.floor(Math.random() * 8);
      if (!indexArr.includes(e)) {
        indexArr.push(e)
      }
    }
    return indexArr;
  }

  function createNewElem() {
    let indexArr = [];
    while (indexArr.length < 3) {
      let e = Math.floor(Math.random() * 8);
      if (!indexCenter.includes(e) && !indexArr.includes(e)) {
        indexArr.push(e)
      }
    }
    return indexArr;
  }

  let indexLeft = createStartElem();
  let indexCenter = indexLeft;
  indexLeft = [];
  indexLeft = createNewElem();
  let indexRight = indexCenter;
  indexCenter = indexLeft;
  indexLeft = [];
  indexLeft = createNewElem();

  // очистить стартовый набор карточек и заполнить новым

  const slideArray = [];
  
  function fillContentToCard() {

    ITEM_LEFT.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const slideItem = createCardTemplate();
      const sliderItemFoto = document.createElement('div');
      const sliderItemName = document.createElement('div');
      const sliderItemButton = document.createElement('div');
      sliderItemName.classList.add('slider_item-name');
      sliderItemButton.classList.add('slider_item-button');
      sliderItemButton.innerText = 'Learn more';
      slideItem.appendChild(sliderItemFoto);
      slideItem.appendChild(sliderItemName);
      slideItem.appendChild(sliderItemButton);
      sliderItemFoto.innerHTML = `<img src="${nameArr[indexLeft[i]].img}" class="slider_item-foto" alt="${nameArr[indexLeft[i]].name}">`
      sliderItemName.innerText = nameArr[indexLeft[i]].name;
      ITEM_LEFT.appendChild(slideItem);
    }
    ITEM_CENTER.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const slideItem = createCardTemplate();
      const sliderItemFoto = document.createElement('div');
      const sliderItemName = document.createElement('div');
      const sliderItemButton = document.createElement('div');
      sliderItemName.classList.add('slider_item-name');
      sliderItemButton.classList.add('slider_item-button');
      sliderItemButton.innerText = 'Learn more';
      slideItem.appendChild(sliderItemFoto);
      slideItem.appendChild(sliderItemName);
      slideItem.appendChild(sliderItemButton);
      sliderItemFoto.innerHTML = `<img src="${nameArr[indexCenter[i]].img}" class="slider_item-foto" alt="${nameArr[indexCenter[i]].name}">`
      sliderItemName.innerText = nameArr[indexCenter[i]].name;
      ITEM_CENTER.appendChild(slideItem);
      slideArray.push(slideItem);
    }
    ITEM_RIGHT.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const slideItem = createCardTemplate();
      const sliderItemFoto = document.createElement('div');
      const sliderItemName = document.createElement('div');
      const sliderItemButton = document.createElement('div');
      sliderItemName.classList.add('slider_item-name');
      sliderItemButton.classList.add('slider_item-button');
      sliderItemButton.innerText = 'Learn more';
      slideItem.appendChild(sliderItemFoto);
      slideItem.appendChild(sliderItemName);
      slideItem.appendChild(sliderItemButton);
      sliderItemFoto.innerHTML = `<img src="${nameArr[indexRight[i]].img}" class="slider_item-foto" alt="${nameArr[indexRight[i]].name}">`
      sliderItemName.innerText = nameArr[indexRight[i]].name;
      ITEM_RIGHT.appendChild(slideItem);
    }
    return slideArray;

  }
  fillContentToCard();

  function moveToRight() {
    CAROUSEL.classList.add('transition-right');
    BTN_LEFT.removeEventListener('click', moveToLeft);
    BTN_RIGHT.removeEventListener('click', moveToRight);
  }
  function moveToLeft() {
    CAROUSEL.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click', moveToLeft);
    BTN_RIGHT.removeEventListener('click', moveToRight);
  }

  BTN_RIGHT.addEventListener('click', moveToRight);
  BTN_LEFT.addEventListener('click', moveToLeft);

  CAROUSEL.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left') {
      CAROUSEL.classList.remove('transition-left');
      indexRight = [];
      indexRight = indexCenter;
      indexCenter = indexLeft;
      indexLeft = [];
      indexLeft = createNewElem();
      fillContentToCard();
      activatePopup();
    } else {
      CAROUSEL.classList.remove('transition-right');
      indexLeft = [];
      indexLeft = indexCenter;
      indexCenter = indexRight;
      indexRight = [];
      indexRight = createNewElem();
      fillContentToCard();
      activatePopup();
    }

    BTN_LEFT.addEventListener('click', moveToLeft);
    BTN_RIGHT.addEventListener('click', moveToRight);
  });

  
// popup

  popupButton.addEventListener('click', removeModal);
  
  function activatePopup() {
    for (let i = 0; i < slideArray.length; i++) {
      slideArray[i].addEventListener('click', () => {
        let elem = slideArray[i].querySelector('.slider_item-name');
        popup.classList.add('popup_active');
        modal.classList.add('modal-window_active');
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
        getPets(elem.textContent);
      })
    }
  }
  activatePopup();
  
  function getPets(nameOfPet) {
    let index = nameArr.findIndex(item => item.name === nameOfPet);
    popupTitle.textContent = nameArr[index].name;
    popupImage.innerHTML = `<img src="${nameArr[index].img}" alt="${nameArr[index].name}">`;
    popupType.textContent = nameArr[index].type + ' - ' + nameArr[index].breed;
    popupText.textContent = nameArr[index].description;
    popupAge.textContent = nameArr[index].age;
    popupInoculations.textContent = nameArr[index].inoculations;
    popupDiseases.textContent = nameArr[index].diseases;
    popupParasites.textContent = nameArr[index].parasites;
  }
};
  



