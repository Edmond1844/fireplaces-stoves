// Header

let header =  document.createElement('header');
let headerContainer = document.createElement('div');
let headerLogo = document.createElement('div');
let headerImg = document.createElement('img');
let headerNav = document.createElement('div');

let headerPopup = document.createElement('div');
let headerPopupWrapper = document.createElement('div');
let headerPopupTitle = document.createElement('h1');
let headerPopupText = document.createElement('p');
let headerPopupClose = document.createElement('button');
let headerPopupWrapperBtn = document.createElement('div');
let headerPopupButton1 = document.createElement('button');
let headerPopupButton2 = document.createElement('button');


let headerNavList = document.createElement('ul');
let headerNavItem = document.createElement('li');
let headerNavLink1 = document.createElement('a');
let headerNavLink2 = document.createElement('a');
let headerNavLink3 = document.createElement('a');
let headerButton = document.createElement('button');



// Подключение

document.body.appendChild(header);

header.appendChild(headerContainer);
headerContainer.appendChild(headerLogo);
headerLogo.appendChild(headerImg);
headerContainer.appendChild(headerNav);

headerNav.appendChild(headerNavList);
headerNav.appendChild(headerButton);
headerNav.appendChild(headerPopup);

headerPopup.appendChild(headerPopupWrapper);
headerPopupWrapper.appendChild(headerPopupTitle);
headerPopupWrapper.appendChild(headerPopupText);
headerPopupWrapper.appendChild(headerPopupWrapperBtn);
headerPopupWrapper.appendChild(headerPopupClose);

headerPopupWrapperBtn.appendChild(headerPopupButton1);
headerPopupWrapperBtn.appendChild(headerPopupButton2);

headerNavList.appendChild(headerNavItem);
headerNavItem.appendChild(headerNavLink1);
headerNavItem.appendChild(headerNavLink2);


// Стили для классов, атрибуты

header.setAttribute('class', 'header');
headerContainer.setAttribute('class', 'header__container');
headerLogo.setAttribute('class', 'header__logo');
headerImg.setAttribute('src', './img/png/logo.png');
headerNav.setAttribute('class', 'header__nav');

headerPopup.setAttribute('class', 'header__info');
headerPopupClose.setAttribute('type', 'button');
headerPopupClose.setAttribute('class', 'header__close');
headerPopupClose.textContent = 'X';
headerPopupClose.addEventListener('click', function() {
    headerPopup.classList.remove('header__open');
});

headerPopupWrapperBtn.setAttribute('class', 'header__popup-wrapper-button');
headerPopupButton1.setAttribute('type', 'button');
headerPopupButton1.setAttribute('class', 'header__popup-button');
headerPopupButton1.textContent = 'Кнопка 1'
headerPopupButton2.setAttribute('type', 'button');
headerPopupButton2.setAttribute('class', 'header__popup-button');
headerPopupButton2.textContent = 'Кнопка 2';



headerPopupWrapper.setAttribute('class', 'header__popup-wrapper');
headerPopupTitle.setAttribute('class', 'header__popup-title');
headerPopupTitle.textContent = 'Заголовок';
headerPopupText.setAttribute('class', 'header__popup-text');
headerPopupText.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolores doloribus necessitatibus, eum odio a debitis, consequuntur fugit similique cupiditate commodi recusandae accusantium id modi tempora iste ab omnis assumenda ipsam impedit cum facilis soluta! Atque quis doloribus exercitationem qui quam ullam provident odit enim accusantium molestiae nostrum deleniti, quidem culpa eius distinctio a numquam!';

headerButton.setAttribute('type', 'button');
headerButton.setAttribute('class', 'header__button');
headerButton.textContent = 'кнопка';
headerButton.addEventListener('click', function() {
    headerPopup.classList.add('header__open');
});

headerNavItem.setAttribute('class', 'header__nav-item');

headerNavLink1.setAttribute('class', 'header__link');
headerNavLink1.setAttribute('href', 'https://www.youtube.com/watch?v=S2-31A3nqKQ&ab_channel=PeterCetera-Topic');
headerNavLink1.textContent = 'Видео';

headerNavLink2.setAttribute('class', 'header__link');
headerNavLink2.setAttribute('href', 'https://www.youtube.com/watch?v=_91hNV6vuBY&ab_channel=BruceSpringsteenVEVO');
headerNavLink2.textContent = 'Другое видео';



