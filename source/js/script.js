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

// Переменные header
let header = document.createElement('header');
let headerContainer = document.createElement('div');
let headerWrapper = document.createElement('div');
let headerButton = document.createElement('button');
let headerNav = document.createElement('nav');

// Подключение header
document.body.appendChild(header);
header.appendChild(headerContainer);
headerContainer.appendChild(headerWrapper);
headerWrapper.appendChild(headerButton);
headerWrapper.appendChild(headerNav);

// Установка стилей классов, атрибутов header
header.setAttribute('class', 'header');
headerContainer.setAttribute('class', 'header__container');
headerWrapper.setAttribute('class', 'header__wrapper');

headerButton.setAttribute('class', 'header__button');
headerButton.textContent = headerBtn.text;

headerNav.setAttribute('class', 'header__nav');

// Создание и добавление ссылок в навигацию

for (let linkItem in headerLinks) {
    let currentLink = headerLinks[linkItem];

    let headerLink = document.createElement('a');
    headerLink.textContent = currentLink.linkText;
    headerLink.setAttribute('href', currentLink.linkUrl);

    headerNav.appendChild(headerLink); 
}


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



