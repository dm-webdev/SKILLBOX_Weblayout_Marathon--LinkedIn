'use strict';

window.onload = function () {

  //Табы

  let tabLinks = document.querySelectorAll(".tabs a");
  let tabPanels = document.querySelectorAll(".tabs-panel");

  for (let el of tabLinks) {
    el.addEventListener("click", e => {
      e.preventDefault();

      document.querySelector('.tabs li.tabs_active').classList.remove("tabs_active");
      document.querySelector('.tabs-panel.tabs-panel_active').classList.remove("tabs-panel_active");

      let parentListItem = el.parentElement;
      parentListItem.classList.add("tabs_active");
      let index = [...parentListItem.parentElement.children].indexOf(parentListItem);

      let panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
      panel[0].classList.add("tabs-panel_active");
    });
  }

  // Основное меню и окно поиска

  let body = document.querySelector('body');
  let main = document.querySelector('main');
  let header = document.querySelector('header');
  let container = document.querySelector('.form-container');
  let popUpMenu = document.querySelector('.popup-menu');
  let openMenu = document.querySelector('.openMenu');
  let closeMenu = document.querySelector('.popMenuClose');

  let searchButton = document.querySelector('.search-form__button');
  let searchButtonNew = document.querySelector('.search-form__button__new');
  let screen = document.querySelector('.screen');
  let searchFooter = document.querySelector('.search-form__footer');
  let searchClose = document.querySelector('.screen');
  let searchInput = document.querySelector('.search-form__input');



  openMenu.addEventListener('click', function () {
    body.classList.add('fixed');
    main.classList.add('blur');
    header.classList.add('blur');
    container.classList.remove('off');
    popUpMenu.classList.remove('off', 'smoke');
    container.classList.add('on');
    popUpMenu.classList.add('on');
  });

  closeMenu.addEventListener('click', function () {
    body.classList.remove('fixed');
    main.classList.remove('blur');
    header.classList.remove('blur');
    container.classList.remove('on');
    popUpMenu.classList.remove('on');
    setTimeout(function () {
      popUpMenu.classList.add('off');
      container.classList.add('off');
    }, 500);
    popUpMenu.classList.add('smoke');
  });



  searchInput.addEventListener('input', function () {
    body.classList.add('fixed');
    searchButton.classList.add('off');
    searchButtonNew.classList.remove('off');
    searchButtonNew.classList.add('on_fast');
    screen.classList.remove('off');
    screen.classList.add('on_fast');
    searchFooter.classList.remove('off', 'smoke_fast');
    searchFooter.classList.add('on_fast');
  });

  searchClose.addEventListener('click', function () {
    body.classList.remove('fixed');
    searchButton.classList.remove('off');
    searchButtonNew.classList.add('off');
    searchButtonNew.classList.remove('on_fast');
    screen.classList.remove('on_fast');
    searchFooter.classList.add('smoke_fast');
    searchFooter.classList.remove('on_fast');
    setTimeout(function () {
      screen.classList.add('off');
      searchFooter.classList.add('off');
    }, 250);
  });


  // показать проекты

  let allCount = document.querySelectorAll('.projects__list__item');
  let visibleCount = document.querySelectorAll('.projects__list__item__visible');
  let unvisibleCount = document.querySelectorAll('.projects__list__item__off');
  let visibleNumber = document.querySelector('.projects__count__visible');
  let allNumber = document.querySelectorAll('.projects__count__all');
  let showAll = document.querySelector('.show__all__link');

  let fillCount = function () {
    visibleNumber.innerHTML = visibleCount.length;

    for (let i = 0; i < allNumber.length; i++) {
      allNumber[i].innerHTML = allCount.length;
    };
  };

  fillCount();

  showAll.addEventListener('click', function (e) {
    e.preventDefault();

    for (let j = 0; j < unvisibleCount.length; j++) {
      unvisibleCount[j].classList.add('projects__list__item__visible');
      unvisibleCount[j].classList.remove('projects__list__item__off');
    };

    visibleCount = document.querySelectorAll('.projects__list__item__visible');
    unvisibleCount = document.querySelectorAll('.projects__list__item__off');
    fillCount();
    showAll.classList.add('off');
  });

  // темная тема

  const setTheme = document.querySelector('.footer-btn__settings');

  function initialState(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.classList = themeName;
  }


  function toggleTheme() {
    if (localStorage.getItem('theme') == 'dark-theme') {
      initialState('light-theme');
    } else {
      initialState('dark-theme');
    }
  }

  setTheme.addEventListener('click', (e) => {
    e.preventDefault();
    toggleTheme();
  })

  // смена фотографии

  function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();
      reader.onload = (function (theFile) {
        return function (e) {
          var img = document.querySelector('.header-profile');
          img.style.backgroundImage = `url(${e.target.result})`;
        };
      })(f);
      reader.readAsDataURL(f);
    };

    alert.classList.remove('on');
    setTimeout(function () {
      alert.classList.add('off');
    }, 500);
    alert.classList.add('smoke');
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);

  let alert = document.getElementById('alert');
  let cleanAlert = document.getElementById('cleanAlert');
  let upLoad = document.querySelector('.btn-upload');



  upLoad.addEventListener('click', function () {
    alert.classList.remove('off', 'smoke');
    alert.classList.add('on');
  });

  cleanAlert.addEventListener('click', function () {
    alert.classList.remove('on');
    setTimeout(function () {
      alert.classList.add('off');
    }, 500);
    alert.classList.add('smoke');
  });

  // показать cкилы

  let allCountSkills = document.querySelectorAll('.skills-list__item');
  let visibleCountSkills = document.querySelectorAll('.skills-list__item_active');
  let unvisibleCountSkills = document.querySelectorAll('.skills-list__item_unactive');
  let visibleNumberSkills = document.querySelector('.skill__count__active');
  let allNumberSkills = document.querySelectorAll('.skill__count__all');
  let showAllSkills = document.querySelector('.show__all__link_skills');

  let fillCountSkills = function () {
    visibleNumberSkills.innerHTML = visibleCountSkills.length;

    for (let i = 0; i < allNumberSkills.length; i++) {
      allNumberSkills[i].innerHTML = allCountSkills.length;
    };
  };

  fillCountSkills();

  showAllSkills.addEventListener('click', function (e) {
    e.preventDefault();

    for (let j = 0; j < unvisibleCountSkills.length; j++) {
      unvisibleCountSkills[j].classList.add('skills-list__item_active');
      unvisibleCountSkills[j].classList.remove('skills-list__item_unactive');
    };

    visibleCountSkills = document.querySelectorAll('.skills-list__item_active');
    unvisibleCountSkills = document.querySelectorAll('.skills-list__item_unactive');
    fillCountSkills();
    showAllSkills.classList.add('off');
  });

}