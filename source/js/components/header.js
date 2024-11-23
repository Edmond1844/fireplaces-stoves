
// // Объекты header
// let objectNamesHeader = {
//     typeBtn: 'button',
//     text: 'Каталог',

//     // Объекты для ссылок Header 
//     textLink: '+7 (812) 924-66-61',
//     urlLink: 'tel:78129246661',

//     // Объекты для img Header logo
//     srcLogo: './img/logo.png',
//     altText: 'Логотип',

//     // Объекты для input header
//     placeholder: 'Искать...',
//     type: 'text',
// };

// // Ссылки 
// let headerLinks = {
//     link1: { 
//         linkText: 'Дымоходы',
//         linkUrl: '#' },
//     link2: { 
//         linkText: 'Монтаж',
//         linkUrl: '#', 
//         isImportant: true },
//     link3: { 
//         linkText: 'Портфолио', 
//         linkUrl: '#', 
//         isImportant: false },
//     link4: { 
//         linkText: 'Доставка и оплата', 
//         linkUrl: '#' },
//     link5: { 
//         linkText: 'Отзывы', 
//         linkUrl: '#' },
//     link6: { 
//         linkText: 'Контакты', 
//         linkUrl: '#' }
// };

// // Кнопки 
// let headerButtons = {
//     btn1: { 
//         type: 'button', 
//         xlink: './img/sprite.svg#icon-basket'
//     },
//     btn2: { 
//         type: 'button', 
//         xlink: '#' 
//     }, 
//     btn3: { 
//         type: 'button', 
//         xlink: '#' } 
// };

// // Переменные header
// let header = document.createElement('header');
// let headerContainer = document.createElement('div');
// let headerWrapper = document.createElement('div');
// let headerWrapperSearch = document.createElement('div');
// let headerLogo = document.createElement('img');
// let headerForm = document.createElement('form');
// let headerInput = document.createElement('input');
// let headerBtnList = document.createElement('ul');
// let headerLinksWrapper = document.createElement('div');
// let headerButtonCatalog = document.createElement('button');
// let headerNav = document.createElement('nav');
// let headerNavList = document.createElement('ul');
// let headerNumber = document.createElement('a');

// // Подключение к header
// document.body.appendChild(header);
// header.appendChild(headerContainer);
// headerContainer.appendChild(headerWrapper);

// headerWrapper.appendChild(headerWrapperSearch);
// headerWrapperSearch.appendChild(headerLogo);
// headerWrapperSearch.appendChild(headerForm);
// headerForm.appendChild(headerInput);
// headerWrapperSearch.appendChild(headerBtnList);

// headerWrapper.appendChild(headerLinksWrapper);
// headerLinksWrapper.appendChild(headerButtonCatalog);
// headerLinksWrapper.appendChild(headerNav);
// headerNav.appendChild(headerNavList);
// headerLinksWrapper.appendChild(headerNumber);

// // Установка стилей классов, атрибутов header
// header.setAttribute('class', 'header');
// headerContainer.setAttribute('class', 'header__container');
// headerWrapper.setAttribute('class', 'header__wrapper');
// headerLinksWrapper.setAttribute('class', 'header__links-wrapper');
// headerWrapperSearch.setAttribute('class', 'header__search-wrapper');

// // header logo
// headerLogo.setAttribute('class', 'header__img');
// headerLogo.setAttribute('alt', objectNamesHeader.altText);
// headerLogo.setAttribute('src', objectNamesHeader.srcLogo);

// // form header
// headerForm.setAttribute('class', 'header__form');

// // header input
// headerInput.setAttribute('class', 'header__input');
// headerInput.setAttribute('placeholder', objectNamesHeader.placeholder);
// headerInput.setAttribute('type', objectNamesHeader.type);

// // header button list 
// headerBtnList.setAttribute('class', 'header__btn-list');

// for (let btnItem in headerButtons) {
//     let currentBtn = headerButtons[btnItem];

//     let headerBtnItem = document.createElement('li');
//     let headerBtn = document.createElement('button');
//     let headerSvgIcon = document.createElement('svg');
//     let headerSvgUse = document.createElement('use');

//     headerBtn.setAttribute('type', currentBtn.type);
//     headerBtn.setAttribute('class', 'header__btn-item');

//     headerBtnList.appendChild(headerBtnItem);
//     headerBtnItem.appendChild(headerBtn);
//     headerBtn.appendChild(headerSvgIcon);
//     headerSvgIcon.appendChild(headerSvgUse);

//     // Установка размеров иконки
//     headerSvgIcon.setAttribute('width', '16'); 
//     headerSvgIcon.setAttribute('height', '17'); 
//     headerSvgUse.setAttribute('href', currentBtn.xlink)

//     // Обработчик события для кнопки
//     headerBtn.addEventListener('click', function() {
//         let headerbuttons = document.querySelectorAll('.header__btn-item'); 
//         for (let btn of headerbuttons) {
//             btn.classList.remove('header__btn-item--active'); 
//         }
//         headerBtn.classList.add('header__btn-item--active'); 
//     });
// }

// // header button
// headerButtonCatalog.setAttribute('class', 'header__button');
// headerButtonCatalog.textContent = objectNamesHeader.text;
// headerButtonCatalog.setAttribute('type', objectNamesHeader.typeBtn);

// // header nav
// headerNav.setAttribute('class', 'header__nav');
// headerNavList.setAttribute('class', 'header__nav-list');
// headerNumber.setAttribute('class', 'header__number');
// headerNumber.setAttribute('href', objectNamesHeader.urlLink);
// headerNumber.textContent = objectNamesHeader.textLink;

// // Создание и добавление ссылок в навигацию
// for (let linkItem in headerLinks) {
//     let currentLink = headerLinks[linkItem];

//     let headerNavItem = document.createElement('li');
//     let headerLink = document.createElement('a');
//     headerLink.textContent = currentLink.linkText;
//     headerLink.setAttribute('href', currentLink.linkUrl);

//     headerNavItem.appendChild(headerLink);
//     headerNavList.appendChild(headerNavItem);

//     headerNavItem.setAttribute('class', 'header__nav-item');

//     if (currentLink.isImportant === true) { 
//         headerLink.classList.add('header--red');
//     }
// }
