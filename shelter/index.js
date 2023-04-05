console.log('shelter1:\n Main +60: \nПроверка верстки +7\nВёрстка соответствует макету +35\nТребования к css +6\nИнтерактивность элементов +12\n\n Pets +40:\nПроверка верстки +7\nВёрстка соответствует макету +15\nТребования к css +4\nИнтерактивность элементов +14');
console.log('shelter2:\n1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14;\n2.Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14;\n3.Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14;\n4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6;\n5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6;\n6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6;\n7.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20;\n8.Верстка резиновая: +8;\n9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4;\n10.Верстка обеих страниц валидная: +8')

  
  // Burger menu

  {
    const body = document.querySelector('.body')
    const burger = document.querySelector('.burger');
    const modal = document.querySelector('.modal-window');
    const navigation = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.nav_item');

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
      burger.classList.remove('burger_rotate');
    }

    modal.addEventListener('click', removeModal);
    navLinks.forEach(item => item.addEventListener('click', removeModal));
  };