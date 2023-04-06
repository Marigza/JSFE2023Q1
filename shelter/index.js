

console.log('shelter1:\n Main +60: \nПроверка верстки +7\nВёрстка соответствует макету +35\nТребования к css +6\nИнтерактивность элементов +12\n\n Pets +40:\nПроверка верстки +7\nВёрстка соответствует макету +15\nТребования к css +4\nИнтерактивность элементов +14');
console.log('shelter2:\n1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14;\n2.Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14;\n3.Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14;\n4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6;\n5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6;\n6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6;\n7.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20;\n8.Верстка резиновая: +8;\n9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4;\n10.Верстка обеих страниц валидная: +8')

  
 

{
  const body = document.querySelector('.body');
  const burger = document.querySelector('.burger');
  const modal = document.querySelector('.modal-window');
  const navigation = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.nav_item');
  const popup = document.querySelector('.popup');
  const petsItems = Array.from(document.querySelectorAll('.slider_item'));
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
  
// popup
  
  popupButton.addEventListener('click', removeModal);
  
  for (let i = 0; i < petsItems.length; i++) {
    petsItems[i].addEventListener('click', () => {
      let elem = petsItems[i].querySelector('.slider_item-name');
      popup.classList.add('popup_active');
      modal.classList.add('modal-window_active');
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
      getPets(elem.textContent);
    })
  }
  
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
  



