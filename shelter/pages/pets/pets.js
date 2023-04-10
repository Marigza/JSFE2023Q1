console.log('пагинация реализована только на ширине экрана 1280рх')

{
  const body = document.querySelector('.body');
  const burger = document.querySelector('.burger');
  const modal = document.querySelector('.modal-window');
  const navigation = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.nav_item');
  const popup = document.querySelector('.popup');

  const BUTTON_LEFTLEFT = document.querySelector('.button_left-left');
  const BUTTON_LEFT = document.querySelector('.button_left');
  const BUTTON_CENTER = document.querySelector('.button_center');
  const BUTTON_RIGHT = document.querySelector('.button_right');
  const BUTTON_RIGHTRIGHT = document.querySelector('.button_right-right');
  const sliderContainer = document.querySelector('.slider_container-pets'); 

  const popupButton = document.querySelector('.popup_button');
  const popupImage = document.querySelector('.popup_image');
  const popupTitle = document.querySelector('.popup_title');
  const popupType = document.querySelector('.popup_type');
  const popupText = document.querySelector('.popup_text');
  const popupAge = document.querySelector('.popup_age');
  const popupInoculations = document.querySelector('.popup_inoculations');
  const popupDiseases = document.querySelector('.popup_diseases');
  const popupParasites = document.querySelector('.popup_parasites');

// burger

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

  // pagination

  let nameArr = [["Jennifer", "../../assets/modal/jennifer.png"],
  ["Sophia", "../../assets/modal/sophia.png"], ["Woody", "../../assets/modal/woody.png"],
  ["Scarlett", "../../assets/modal/Scarlett.png"], ["Katrine", "../../assets/modal/katrine.png"],
  ["Timmy", "../../assets/modal/timmy.png"], ["Freddie", "../../assets/modal/freddie.png"], ["Charly", "../../assets/modal/charly.png"]]

  function shiffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function createCardTemplate() {
    const slideItem = document.createElement('div');
    slideItem.classList.add('slider_item');
      const sliderFoto = document.createElement('div');
      const sliderName = document.createElement('div');
      const sliderButton = document.createElement('div');
      sliderName.classList.add('slider_item-name');
      sliderButton.classList.add('slider_item-button');
      sliderButton.innerText = 'Learn more';
      slideItem.appendChild(sliderFoto);
      slideItem.appendChild(sliderName);
      slideItem.appendChild(sliderButton);
    return slideItem;
  }

  function createblockCardsTemplate() {
    const sliderTrack = document.createElement('div');
    sliderTrack.classList.add('slider-track_pets');
    for (let i = 0; i < 8; i++) {
      sliderTrack.appendChild(createCardTemplate());
    }
    return sliderTrack;
  }

  sliderContainer.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    sliderContainer.appendChild(createblockCardsTemplate());
  }

  let arrayOfLists = Array.from(sliderContainer.childNodes);
 
  let arrayOfItems0 = Array.from(arrayOfLists[0].childNodes);
  let arrayOfItems1 = Array.from(arrayOfLists[1].childNodes);
  let arrayOfItems2 = Array.from(arrayOfLists[2].childNodes);
  let arrayOfItems3 = Array.from(arrayOfLists[3].childNodes);
  let arrayOfItems4 = Array.from(arrayOfLists[4].childNodes);
  let arrayOfItems5 = Array.from(arrayOfLists[5].childNodes);

  const ARRsliderTrack = Array.from(document.querySelectorAll('.slider-track_pets'));

  function fillContentToBlock(array) {
    let workingArr = nameArr.slice();
    shiffleArray(workingArr);
    array.forEach((item, index) => {
      item.childNodes[1].innerText = workingArr[index][0];
      item.childNodes[0].innerHTML = `<img src="${workingArr[index][1]}" class="slider_item-foto" alt="${workingArr[index][0]}">`
  })
  };
  fillContentToBlock(arrayOfItems0);
  fillContentToBlock(arrayOfItems1);
  ARRsliderTrack[1].classList.add('hidden')
  fillContentToBlock(arrayOfItems2);
  ARRsliderTrack[2].classList.add('hidden')
  fillContentToBlock(arrayOfItems3);
  ARRsliderTrack[3].classList.add('hidden')
  fillContentToBlock(arrayOfItems4);
  ARRsliderTrack[4].classList.add('hidden')
  fillContentToBlock(arrayOfItems5);
  ARRsliderTrack[5].classList.add('hidden')

  BUTTON_RIGHT.addEventListener('click', moveToRight);
  BUTTON_RIGHTRIGHT.addEventListener('click', movetoEnd);

  function moveToRight() {
    BUTTON_LEFT.addEventListener('click', moveToLeft);
    BUTTON_LEFTLEFT.addEventListener('click', moveToStart);
    BUTTON_LEFT.classList.remove('button_disabled');
    BUTTON_LEFTLEFT.classList.remove('button_disabled');
    BUTTON_CENTER.innerText = Number(BUTTON_CENTER.innerText) + 1;
    if (Number(BUTTON_CENTER.innerText) === 6) {
      BUTTON_RIGHT.removeEventListener('click', moveToRight);
      BUTTON_RIGHTRIGHT.removeEventListener('click', movetoEnd);
      BUTTON_RIGHT.classList.add('button_disabled');
      BUTTON_RIGHTRIGHT.classList.add('button_disabled');
    }
    let currentPage = Number(BUTTON_CENTER.innerText);
    ARRsliderTrack.forEach(item => item.classList.add('hidden'));
    ARRsliderTrack[currentPage - 1].classList.remove('hidden');
  }

  function movetoEnd() {
    BUTTON_LEFT.addEventListener('click', moveToLeft);
    BUTTON_LEFTLEFT.addEventListener('click', moveToStart);
    BUTTON_LEFT.classList.remove('button_disabled');
    BUTTON_LEFTLEFT.classList.remove('button_disabled');
    BUTTON_CENTER.innerText = 6;
    BUTTON_RIGHT.removeEventListener('click', moveToRight);
    BUTTON_RIGHTRIGHT.removeEventListener('click', movetoEnd);
    BUTTON_RIGHT.classList.add('button_disabled');
    BUTTON_RIGHTRIGHT.classList.add('button_disabled');
    ARRsliderTrack.forEach(item => item.classList.add('hidden'));
    ARRsliderTrack[5].classList.remove('hidden');
  }

  function moveToLeft() {
    BUTTON_RIGHT.addEventListener('click', moveToRight);
    BUTTON_RIGHTRIGHT.addEventListener('click', movetoEnd);
    BUTTON_RIGHT.classList.remove('button_disabled');
    BUTTON_RIGHTRIGHT.classList.remove('button_disabled');
    BUTTON_CENTER.innerText = Number(BUTTON_CENTER.innerText) - 1;
    if (Number(BUTTON_CENTER.innerText) === 1) {
      BUTTON_LEFT.removeEventListener('click', moveToLeft)
      BUTTON_LEFTLEFT.removeEventListener('click', moveToStart)
      BUTTON_LEFT.classList.add('button_disabled');
      BUTTON_LEFTLEFT.classList.add('button_disabled');
    }
    let currentPage = Number(BUTTON_CENTER.innerText);
    ARRsliderTrack.forEach(item => item.classList.add('hidden'));
    ARRsliderTrack[currentPage - 1].classList.remove('hidden');
  }

  function moveToStart() {
    BUTTON_RIGHT.addEventListener('click', moveToRight);
    BUTTON_RIGHTRIGHT.addEventListener('click', movetoEnd);
    BUTTON_RIGHT.classList.remove('button_disabled');
    BUTTON_RIGHTRIGHT.classList.remove('button_disabled');
    BUTTON_CENTER.innerText = 1;
    BUTTON_LEFT.removeEventListener('click', moveToLeft);
    BUTTON_LEFTLEFT.removeEventListener('click', moveToStart);
    BUTTON_LEFT.classList.add('button_disabled');
    BUTTON_LEFTLEFT.classList.add('button_disabled');
    ARRsliderTrack.forEach(item => item.classList.add('hidden'));
    ARRsliderTrack[0].classList.remove('hidden');
  }

  //popup

  let slideArray = Array.from(document.querySelectorAll('.slider_item'));
 
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
    const pets ='../../pets.json';
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
}




