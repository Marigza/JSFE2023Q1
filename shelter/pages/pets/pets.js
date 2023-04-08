{
  const body = document.querySelector('.body');
  const burger = document.querySelector('.burger');
  const modal = document.querySelector('.modal-window');
  const navigation = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.nav_item');
  const popup = document.querySelector('.popup');

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

  //popup

  let slideArray = Array.from(document.querySelectorAll('.slider_item'))
  
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
}

// pagination

