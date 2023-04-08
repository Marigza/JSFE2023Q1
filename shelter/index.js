console.log('shelter1:\n Main +60: \nПроверка верстки +7\nВёрстка соответствует макету +35\nТребования к css +6\nИнтерактивность элементов +12\n Pets +40:\nПроверка верстки +7\nВёрстка соответствует макету +15\nТребования к css +4\nИнтерактивность элементов +14');
console.log('shelter2:\n1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px, 768px, 320px: +42;\n2.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px, 768px, 320px: +18;\n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки: +20;\n4.Верстка резиновая: +8;\n5.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4;\n6.Верстка обеих страниц валидная: +8')

{
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
  
  // let ComputedStyleBody = getComputedStyle(document.body);
  // let amount = (parseInt(ComputedStyleBody.width) > 1000 ? 3 : parseInt(ComputedStyleBody.width) > 500 ? 2 : 1);

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

  console.log(indexLeft);
  console.log(indexCenter);
  console.log(indexRight);

  // очистить стартовый набор карточек и заполнить новым

  let nameArr = [["Jennifer", "../../assets/modal/jennifer.png"],
    ["Sophia", "../../assets/modal/sophia.png"], ["Woody", "../../assets/modal/woody.png"],
    ["Scarlett", "../../assets/modal/Scarlett.png"], ["Katrine", "../../assets/modal/katrine.png"],
    ["Timmy", "../../assets/modal/timmy.png"], ["Freddie", "../../assets/modal/freddie.png"], ["Charly", "../../assets/modal/charly.png"]]

  const slideArray = [];
  
  function fillContentToCard() {

    ITEM_LEFT.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const slideItem = createCardTemplate();
      const sliderItemFoto = document.createElement('div');
      const sliderItemName = document.createElement('div');
      const sliderItemButton = document.createElement('div');
      //sliderItemFoto.classList.add('slider_item-foto');
      sliderItemName.classList.add('slider_item-name');
      sliderItemButton.classList.add('slider_item-button');
      sliderItemButton.innerText = 'Learn more';
      slideItem.appendChild(sliderItemFoto);
      slideItem.appendChild(sliderItemName);
      slideItem.appendChild(sliderItemButton);
      sliderItemFoto.innerHTML = `<img src="${nameArr[indexLeft[i]][1]}" class="slider_item-foto" alt="${nameArr[indexLeft[i]][0]}">`
      sliderItemName.innerText = nameArr[indexLeft[i]][0];
      
      ITEM_LEFT.appendChild(slideItem);
      //slideArray.push(slideItem);
    }
    ITEM_CENTER.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const slideItem = createCardTemplate();
      const sliderItemFoto = document.createElement('div');
      const sliderItemName = document.createElement('div');
      const sliderItemButton = document.createElement('div');
      //sliderItemFoto.classList.add('slider_item-foto');
      sliderItemName.classList.add('slider_item-name');
      sliderItemButton.classList.add('slider_item-button');
      sliderItemButton.innerText = 'Learn more';
      slideItem.appendChild(sliderItemFoto);
      slideItem.appendChild(sliderItemName);
      slideItem.appendChild(sliderItemButton);
      sliderItemFoto.innerHTML = `<img src="${nameArr[indexCenter[i]][1]}" class="slider_item-foto" alt="${nameArr[indexCenter[i]][0]}">`
      sliderItemName.innerText = nameArr[indexCenter[i]][0];
      //slideItem.innerText = indexCenter[i];
      ITEM_CENTER.appendChild(slideItem);
      slideArray.push(slideItem);
    }
    ITEM_RIGHT.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const slideItem = createCardTemplate();
      const sliderItemFoto = document.createElement('div');
      const sliderItemName = document.createElement('div');
      const sliderItemButton = document.createElement('div');
      //sliderItemFoto.classList.add('slider_item-foto');
      sliderItemName.classList.add('slider_item-name');
      sliderItemButton.classList.add('slider_item-button');
      sliderItemButton.innerText = 'Learn more';
      slideItem.appendChild(sliderItemFoto);
      slideItem.appendChild(sliderItemName);
      slideItem.appendChild(sliderItemButton);
      sliderItemFoto.innerHTML = `<img src="${nameArr[indexRight[i]][1]}" class="slider_item-foto" alt="${nameArr[indexRight[i]][0]}">`
      sliderItemName.innerText = nameArr[indexRight[i]][0];
      //slideItem.innerText = indexRight[i];
      ITEM_RIGHT.appendChild(slideItem);
      //slideArray.push(slideItem);
    }
    return slideArray;

  }
  fillContentToCard();

  //const slideArray = Array.from(document.querySelectorAll('.slider_item'));

  console.log(slideArray);

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
  
  async function getPets(nameOfPet) {
    const pets = '../../pets.json';
    const res = await fetch(pets);
    const data = await res.json();
    let index = data.findIndex(item => item.name === nameOfPet);
    popupTitle.textContent = data[index].name;
    popupImage.innerHTML = `<img src="${data[index].img}" alt="${data[index].name}">`;
    popupType.textContent = data[index].type + ' - ' + data[index].breed;
    popupText.textContent = data[index].description;
    popupAge.textContent = data[index].age;
    popupInoculations.textContent = data[index].inoculations;
    popupDiseases.textContent = data[index].diseases;
    popupParasites.textContent = data[index].parasites;
  }
  
};
  



