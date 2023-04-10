console.log('пагинация реализована только на ширине экрана 1280рх')

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
  ]
 
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
      item.childNodes[1].innerText = workingArr[index].name;
      item.childNodes[0].innerHTML = `<img src="${workingArr[index].img}" class="slider_item-foto" alt="${workingArr[index].name}">`
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
}




