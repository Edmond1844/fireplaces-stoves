// header !!!

// Объекты header
let headerBtn = {
    text: 'Каталог'
};

let headerLinks = {
    link1: {
        linkText: 'Дымоходы',
        linkUrl: '#'
    },
    link2: {
        linkText: 'Монтаж',
        linkUrl: '#'
    },
    link3: {
        linkText: 'Портфолио',
        linkUrl: '#'
    },
    link4: {
        linkText: 'Доставка и оплата',
        linkUrl: '#'
    },
    link5: {
        linkText: 'Отзывы',
        linkUrl: '#'
    },
    link6: {
        linkText: 'Контакты',
        linkUrl: '#'
    }
};

let headerNumberLink = {
    textLink: '+7 (812) 924-66-61',
    urlLink: 'tel:78129246661'
}

// Переменные header
let header = document.createElement('header');
let headerContainer = document.createElement('div');
let headerWrapper = document.createElement('div');
let headerLinksWrapper = document.createElement('div');
let headerButton = document.createElement('button');
let headerNav = document.createElement('nav');
let headerNavList = document.createElement('ul');
let headerNumber = document.createElement('a');

// Подключение header
document.body.appendChild(header);
header.appendChild(headerContainer);
headerContainer.appendChild(headerWrapper);
headerWrapper.appendChild(headerLinksWrapper);

headerLinksWrapper.appendChild(headerButton);
headerLinksWrapper.appendChild(headerNav);
headerNav.appendChild(headerNavList);
headerLinksWrapper.appendChild(headerNumber);



// Установка стилей классов, атрибутов header
header.setAttribute('class', 'header');
headerContainer.setAttribute('class', 'header__container');
headerWrapper.setAttribute('class', 'header__wrapper');

headerLinksWrapper.setAttribute('class', 'header__links-wrapper');

headerButton.setAttribute('class', 'header__button');
headerButton.textContent = headerBtn.text;

headerNav.setAttribute('class', 'header__nav');

headerNavList.setAttribute('class', 'header__nav-list');

headerNumber.setAttribute('class', 'header__number')
headerNumber.setAttribute('href', headerNumberLink.urlLink); 
headerNumber.textContent = headerNumberLink.textLink; 

// Создание и добавление ссылок в навигацию

for (let linkItem in headerLinks) {
    let currentLink = headerLinks[linkItem];

    let headerNavItem = document.createElement('li');

    let headerLink = document.createElement('a');
    headerLink.textContent = currentLink.linkText;
    headerLink.setAttribute('href', currentLink.linkUrl);

    headerNavItem.appendChild(headerLink); 
    headerNavList.appendChild(headerNavItem);

    headerNavItem.setAttribute('class', 'header__nav-item');
}

// main 

let main = document.createElement('main');

document.body.appendChild(main);

// Объекты  section-intro 
let introText = {
    textTitle: 'Печи и камины  под ключ в Санкт-Петербурге',
    textSubtitle: 'Поможем подобрать печь или камин в ваш дом и возьмем все заботы по установке на себя',
    textBtn: 'Получить консультацию'
}

// Переменные section-intro 

let sectionIntro = document.createElement('section');
let sectionIntroContainer = document.createElement('div');
let sectionIntroWrapper = document.createElement('div');
let sectionIntroTitle = document.createElement('h1');
let sectionIntroText = document.createElement('p');
let sectionIntroBtn = document.createElement('button');

// Подключение section-intro 
sectionIntro.appendChild(sectionIntroContainer);
sectionIntroContainer.appendChild(sectionIntroWrapper);

sectionIntroWrapper.appendChild(sectionIntroTitle);
sectionIntroWrapper.appendChild(sectionIntroText);
sectionIntroWrapper.appendChild(sectionIntroBtn);

// Стили классов, атрибуты section-intro 

sectionIntro.setAttribute('class', 'section-intro');
sectionIntroContainer.setAttribute('class', 'section-intro__container');

sectionIntroWrapper.setAttribute('class', 'section-intro__wrapper');

sectionIntroTitle.setAttribute('class', 'section-intro__title');
sectionIntroTitle.textContent = introText.textTitle;

sectionIntroText.setAttribute('class', 'section-intro__subtitle');
sectionIntroText.textContent = introText.textSubtitle;

sectionIntroBtn.setAttribute('class', 'section-intro__btn');
sectionIntroBtn.textContent = introText.textBtn;

// Подключение секций к main 

main.appendChild(sectionIntro);







// Catalog !!!

// Объекты  Catalog

// let CatalogTitle = {
//     title: 'Каталог'
// }

// // Переменные Catalog

// let main = document.createElement('main');
// let sectionCatalog = document.createElement('div');
// let sectionCatalogContainer = document.createElement('div');
// let sectionCatalogСontent = document.createElement('div');
// let sectionCatalogTitle = document.createElement('h2');

// // Подключение Catalog

// document.body.appendChild(main);

// main.appendChild(sectionCatalog);

// sectionCatalog.appendChild(sectionCatalogContainer);
// sectionCatalogContainer.appendChild(sectionCatalogСontent);
// sectionCatalogСontent.appendChild(sectionCatalogTitle);


// // Стили классов, атрибуты Catalog

// sectionCatalog.setAttribute('class', 'section-catalog');
// sectionCatalogContainer.setAttribute('class', 'section-catalog__container');
// sectionCatalogСontent.setAttribute('class', 'section-catalog__content');

// sectionCatalogTitle.setAttribute('class', 'section-catalog__title');
// sectionCatalogTitle.textContent = CatalogTitle.title;



