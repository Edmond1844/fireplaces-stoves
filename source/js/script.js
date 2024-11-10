// header !!!

// Объекты header
let objectNamesHeader = {
    typeBtn: 'button',
    text: 'Каталог',

    // Объекты для ссылок Header 
    textLink: '+7 (812) 924-66-61',
    urlLink: 'tel:78129246661',

    // Объекты для img Header logo
    srcLogo: './img/logo.png',
    altText: 'Логотип',

    // Объекты для input header
    placeholder: 'Искать...',
    type: 'text',
};

// Ссылки 
let headerLinks = {
    link1: { 
        linkText: 'Дымоходы',
        linkUrl: '#' },
    link2: { 
        linkText: 'Монтаж',
        linkUrl: '#', 
        isImportant: true },
    link3: { 
        linkText: 'Портфолио', 
        linkUrl: '#', 
        isImportant: false },
    link4: { 
        linkText: 'Доставка и оплата', 
        linkUrl: '#' },
    link5: { 
        linkText: 'Отзывы', 
        linkUrl: '#' },
    link6: { 
        linkText: 'Контакты', 
        linkUrl: '#' }
};

// Кнопки 
let headerButtons = {
    btn1: { 
        type: 'button', 
        xlink: './img/sprite.svg#icon-basket'
    },
    btn2: { 
        type: 'button', 
        xlink: '#' 
    }, 
    btn3: { 
        type: 'button', 
        xlink: '#' } 
};

// Переменные header
let header = document.createElement('header');
let headerContainer = document.createElement('div');
let headerWrapper = document.createElement('div');
let headerWrapperSearch = document.createElement('div');
let headerLogo = document.createElement('img');
let headerForm = document.createElement('form');
let headerInput = document.createElement('input');
let headerBtnList = document.createElement('ul');
let headerLinksWrapper = document.createElement('div');
let headerButtonCatalog = document.createElement('button');
let headerNav = document.createElement('nav');
let headerNavList = document.createElement('ul');
let headerNumber = document.createElement('a');

// Подключение к header
document.body.appendChild(header);
header.appendChild(headerContainer);
headerContainer.appendChild(headerWrapper);

headerWrapper.appendChild(headerWrapperSearch);
headerWrapperSearch.appendChild(headerLogo);
headerWrapperSearch.appendChild(headerForm);
headerForm.appendChild(headerInput);
headerWrapperSearch.appendChild(headerBtnList);

headerWrapper.appendChild(headerLinksWrapper);
headerLinksWrapper.appendChild(headerButtonCatalog);
headerLinksWrapper.appendChild(headerNav);
headerNav.appendChild(headerNavList);
headerLinksWrapper.appendChild(headerNumber);

// Установка стилей классов, атрибутов header
header.setAttribute('class', 'header');
headerContainer.setAttribute('class', 'header__container');
headerWrapper.setAttribute('class', 'header__wrapper');
headerLinksWrapper.setAttribute('class', 'header__links-wrapper');
headerWrapperSearch.setAttribute('class', 'header__search-wrapper');

// header logo
headerLogo.setAttribute('class', 'header__img');
headerLogo.setAttribute('alt', objectNamesHeader.altText);
headerLogo.setAttribute('src', objectNamesHeader.srcLogo);

// form header
headerForm.setAttribute('class', 'header__form');

// header input
headerInput.setAttribute('class', 'header__input');
headerInput.setAttribute('placeholder', objectNamesHeader.placeholder);
headerInput.setAttribute('type', objectNamesHeader.type);

// header button list 
headerBtnList.setAttribute('class', 'header__btn-list');

for (let btnItem in headerButtons) {
    let currentBtn = headerButtons[btnItem];

    let headerBtnItem = document.createElement('li');
    let headerBtn = document.createElement('button');
    let headerSvgIcon = document.createElement('svg');
    let headerSvgUse = document.createElement('use');

    headerBtn.setAttribute('type', currentBtn.type);
    headerBtn.setAttribute('class', 'header__btn-item');

    headerBtnList.appendChild(headerBtnItem);
    headerBtnItem.appendChild(headerBtn);
    headerBtn.appendChild(headerSvgIcon);
    headerSvgIcon.appendChild(headerSvgUse);

    // Установка размеров иконки
    headerSvgIcon.setAttribute('width', '16'); 
    headerSvgIcon.setAttribute('height', '17'); 
    headerSvgUse.setAttribute('href', currentBtn.xlink)

    // Обработчик события для кнопки
    headerBtn.addEventListener('click', function() {
        let headerbuttons = document.querySelectorAll('.header__btn-item'); 
        for (let btn of headerbuttons) {
            btn.classList.remove('header__btn-item--active'); 
        }
        headerBtn.classList.add('header__btn-item--active'); 
    });
}

// header button
headerButtonCatalog.setAttribute('class', 'header__button');
headerButtonCatalog.textContent = objectNamesHeader.text;
headerButtonCatalog.setAttribute('type', objectNamesHeader.typeBtn);

// header nav
headerNav.setAttribute('class', 'header__nav');
headerNavList.setAttribute('class', 'header__nav-list');
headerNumber.setAttribute('class', 'header__number');
headerNumber.setAttribute('href', objectNamesHeader.urlLink);
headerNumber.textContent = objectNamesHeader.textLink;

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

    if (currentLink.isImportant === true) { 
        headerLink.classList.add('header--red');
    }
}

console.log('привет');

// main 
let main = document.createElement('main');
document.body.appendChild(main);

// section-intro

// Объекты section-intro 
let introText = {
    textTitle: 'Печи и камины под ключ в Санкт-Петербурге',
    textSubtitle: 'Поможем подобрать печь или камин в ваш дом и возьмем все заботы по установке на себя',
    textBtn: 'Получить консультацию'
};

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

// section-catalog

let objectCatalog = {
    textTitle: 'Каталог',
    textBtn: 'все товары',
    typeBtn: 'button'
}

// Переменные section-catalog 
let sectionCatalog = document.createElement('section');
let sectionCatalogContainer = document.createElement('div');
let sectionCatalogWrapper = document.createElement('div');
let sectionCatalogTitle = document.createElement('h2');
let sectionCatalogList = document.createElement('ul');
let sectionCatalogBtn = document.createElement('button');

// Подключение section-catalog
sectionCatalog.appendChild(sectionCatalogContainer);
sectionCatalogContainer.appendChild(sectionCatalogWrapper);
sectionCatalogWrapper.appendChild(sectionCatalogTitle);
sectionCatalogWrapper.appendChild(sectionCatalogList);
sectionCatalogWrapper.appendChild(sectionCatalogBtn);


// Стили классов, атрибуты section-catalog
sectionCatalog.setAttribute('class', 'section-catalog');
sectionCatalogContainer.setAttribute('class', 'section-catalog__container');

sectionCatalogWrapper.setAttribute('class', 'section-catalog__wrapper');

sectionCatalogTitle.setAttribute('class', 'section-catalog__title');
sectionCatalogTitle.textContent = objectCatalog.textTitle;

sectionCatalogList.setAttribute('class', 'section-catalog__list');

sectionCatalogBtn.setAttribute('class', 'section-catalog__button');
sectionCatalogBtn.setAttribute('type', objectCatalog.typeBtn);
sectionCatalogBtn.textContent = objectCatalog.textBtn;


// Объекты section-intro 
let sectionCatalogLinks = {
    link1: {
        textLink: 'Печи-камины',
        urlLink: '#',
        linkImg: './img/catalog/stoves-fireplaces.png',
        width: '302',
        height: '286'
    },
    link2: {
        textLink: 'Печи',
        urlLink: '#',
        linkImg: './img/catalog/ovens.png',
        width: '302',
        height: '286'
    },
    link3: {
        textLink: 'Банные печи',
        urlLink: '#',
        linkImg: './img/catalog/sauna-stoves.png',
        width: '302',
        height: '286'
    },
    link4: {
        textLink: 'Камины',
        urlLink: '#',
        linkImg: './img/catalog/fireplaces.png',
        width: '302',
        height: '286'
    },
    link5: {
        textLink: 'Котлы',
        urlLink: '#',
        linkImg: './img/catalog/boilers.png',
        width: '237',
        height: '221'
    },
    link6:{
        textLink: 'Дымоходы',
        urlLink: '#',
        linkImg: './img/catalog/chimneys.png',
        width: '237',
        height: '221'
    },
    link7:{
        textLink: 'Топки',
        urlLink: '#',
        linkImg: './img/catalog/fireboxes.png',
        width: '237',
        height: '221'
    },
    link8:{
        textLink: 'Барбекю',
        urlLink: '#',
        linkImg: './img/catalog/b-b-q.png',
        width: '237',
        height: '221'
    },
    link9:{
        textLink: 'Монтаж',
        urlLink: '#',
        linkImg: './img/catalog/installation.png',
        width: '237',
        height: '221'
    },

}

// Создание и добавление ссылок в section-catalog
for (let catalogLinkItem in sectionCatalogLinks) {
    let currentLinkCatalog = sectionCatalogLinks[catalogLinkItem];

    let sectionCatalogItem = document.createElement('li');
    let sectionCatalogLink = document.createElement('a');
    
    sectionCatalogLink.textContent = currentLinkCatalog.textLink;
    sectionCatalogLink.setAttribute('href', currentLinkCatalog.urlLink); 
    sectionCatalogLink.setAttribute('class', 'section-catalog__link'); 

    let linkCatalogImage = document.createElement('img');
    linkCatalogImage.setAttribute('src', currentLinkCatalog.linkImg); 
    linkCatalogImage.setAttribute('alt', currentLinkCatalog.textLink); 
    linkCatalogImage.setAttribute('width', currentLinkCatalog.width);
    linkCatalogImage.setAttribute('height', currentLinkCatalog.height);

    sectionCatalogLink.appendChild(linkCatalogImage);

    sectionCatalogItem.appendChild(sectionCatalogLink);
    sectionCatalogList.appendChild(sectionCatalogItem);
}

// section-production

// Объекты section-production
let objectProduction = {
    textTitle: 'Производители',
    textButton: 'Все производители',
    typeBtn: 'button'
}

let objectProductionLinks = {
    link1: {
        urlLink: '#',
        linkImg: './img/production/dimplex.png',
        width: '156',
        height: '133'
    },
    link2: {
        urlLink: '#',
        linkImg: './img/production/chazelles.png',
        width: '156',
        height: '133'
    },
    link3: {
        urlLink: '#',
        linkImg: './img/production/abx.png',
        width: '194',
        height: '133'
    },
    link4: {
        urlLink: '#',
        linkImg: './img/production/bella.png',
        width: '193',
        height: '133'
    },
    link5: {
        urlLink: '#',
        linkImg: './img/production/dimplex.png',
        width: '136',
        height: '133'
    },
    link6: {
        urlLink: '#',
        linkImg: './img/production/abx.png',
        width: '194',
        height: '133'
    }
}

// Переменные section-production
let sectionProduction = document.createElement('section');
let sectionProductionContainer = document.createElement('div');

let sectionProductionWrapper = document.createElement('div');
let sectionProductionTitle = document.createElement('h2');

let sectionProductionList = document.createElement('ul');

let sectionProductionBtn = document.createElement('button');

// Подключение к section-production
sectionProduction.appendChild(sectionProductionContainer);
sectionProductionContainer.appendChild(sectionProductionWrapper);

sectionProductionWrapper.appendChild(sectionProductionTitle);
sectionProductionWrapper.appendChild(sectionProductionList);
sectionProductionWrapper.appendChild(sectionProductionBtn);

// Стили классов, атрибуты section-production

sectionProduction.setAttribute('class', 'section-production');
sectionProductionContainer.setAttribute('class', 'section-production__container');

sectionProductionWrapper.setAttribute('class', 'section-production__wrapper ');
sectionProductionTitle.setAttribute('class', 'section-production__title');
sectionProductionTitle.textContent = objectProduction.textTitle;

sectionProductionBtn.setAttribute('class', 'section-production__button');
sectionProductionBtn.textContent = objectProduction.textButton;
sectionProductionBtn.setAttribute('type', objectProduction.typeBtn);

sectionProductionList.setAttribute('class', 'section-production__list');

// Создание и добавление ссылок в section-production
for (let productionLinkItem in objectProductionLinks) {
    let currentLinkProductio= objectProductionLinks[productionLinkItem];

    let sectionProductionItem = document.createElement('li');
    let sectionProductionLink = document.createElement('a');
    
    sectionProductionLink.textContent = currentLinkProductio.textLink;
    sectionProductionLink.setAttribute('href', currentLinkProductio.urlLink); 
    sectionProductionLink.setAttribute('class', 'section-production__link'); 

    let linkProductionImage = document.createElement('img');
    linkProductionImage.setAttribute('src', currentLinkProductio.linkImg); 
    linkProductionImage.setAttribute('alt', currentLinkProductio.textLink); 
    linkProductionImage.setAttribute('width', currentLinkProductio.width);
    linkProductionImage.setAttribute('height', currentLinkProductio.height);

    sectionProductionLink.appendChild(linkProductionImage);

    sectionProductionItem.appendChild(sectionProductionLink);
    sectionProductionList.appendChild(sectionProductionItem);
}

// section-goods

// Объекты section-goods 

let objectGoods = {
    title: 'Популярные товары'
}

let goodsButtons = {
    button1: {
        textButton: 'Печи',
        typeButton: 'button'
    },
    button2: {
        textButton: 'Печи-камины',
        typeButton: 'button'
    },
    button3: {
        textButton: 'Топки',
        typeButton: 'button'
    },
    button4: {
        textButton: 'Банные печи',
        typeButton: 'button'
    },
    button5: {
        textButton: 'Электрокамины',
        typeButton: 'button'
    }
}


// Переменные section-goods 
let sectionGoods = document.createElement('section');
let sectionGoodsContainer = document.createElement('div');
let sectionGoodsWrapper = document.createElement('div');
let sectionGoodsTitle = document.createElement('h2');
let sectionGoodsList = document.createElement('ul');
let sectionGoodsWrapperCard = document.createElement('div');

// Подключение к section-goods
sectionGoods.appendChild(sectionGoodsContainer);
sectionGoodsContainer.appendChild(sectionGoodsWrapper);
sectionGoodsWrapper.appendChild(sectionGoodsTitle);
sectionGoodsWrapper.appendChild(sectionGoodsList);
sectionGoodsWrapper.appendChild(sectionGoodsWrapperCard);

// Стили классов, атрибуты section-production
sectionGoods.setAttribute('class', 'section-goods');
sectionGoodsContainer.setAttribute('class', 'section-goods__container');

sectionGoodsWrapper.setAttribute('class', 'section-goods__wrapper');

sectionGoodsTitle.setAttribute('class', 'section-goods__title');
sectionGoodsTitle.textContent = objectGoods.title;

sectionGoodsList.setAttribute('class', 'section-goods__list');

sectionGoodsWrapperCard.setAttribute('class', 'section-goods__wrapper-card');

// Создание и добавление ссылок в section-production
for (let goodsButtonItem in goodsButtons) {
    let currentButtonGoods = goodsButtons[goodsButtonItem];

    let sectionGoodsItem = document.createElement('li');
    let sectionGoodsBtn = document.createElement('button');
    
    sectionGoodsBtn.textContent = currentButtonGoods.textButton;
    sectionGoodsBtn.setAttribute('class', 'section-goods__button'); 
    sectionGoodsBtn.setAttribute('type', currentButtonGoods.typeButton);
    
    sectionGoodsItem.appendChild(sectionGoodsBtn);
    sectionGoodsList.appendChild(sectionGoodsItem);

    sectionGoodsBtn.addEventListener('click', function() {
        let sectiongoodsButtons = document.querySelectorAll('.section-goods__button'); 
        for (let btn of sectiongoodsButtons) {
            btn.classList.remove('section-goods__button--active'); 
        }
        sectionGoodsBtn.classList.add('section-goods__button--active'); 
    });
};

let objectCard = {
    card1: {
        imgCard: './img/goods/bake1.png',
        alt: 'Печь',
        width: '300',
        height: '300',
        nameCard: 'Печь-камин Бавария панорама пристенная',
        price: '48 990 ₽',
        discount: '10%',
        inStock: false
    },
    card2: {
        imgCard: './img/goods/bake2.png',
        alt: 'Печь',
        width: '300',
        height: '300',
        nameCard: 'Печь-камин Бавария панорама пристенная',
        price: '48 990 ₽',
        inStock: true,
        svgIcon: './img/sprite.svg#icon-star'

    },
    card3: {
        imgCard: './img/goods/bake3.png',
        alt: 'Печь',
        width: '300',
        height: '300',
        nameCard: 'Печь-камин Jotul F3 IVE',
        price: '209 000 ₽',
        priceStrikethrough: '232 440 ₽',
        inStock: true
    },
    card4: {
        imgCard: './img/goods/bake4.png',
        alt: 'Печь',
        nameCard: 'Печь-камин Jotul F 602 ECO BP',
        price: '101 165 ₽',
        inStock: true
    }
}

for (let goodsCard in objectCard) {
    let currentCard = objectCard[goodsCard];

    let sectionGoodsCard = document.createElement('div');
    let sectionGoodsCardImg = document.createElement('img');
    let sectionGoodsCardName = document.createElement('p');
    let sectionGoodsCardWrapperPrice = document.createElement('div');
    let sectionCatalogPrice = document.createElement('p');
    let strikethroughPrice = document.createElement('span');
    let strikethroughPriceDiscount = document.createElement('div');
    let strikethroughPriceDiscountText = document.createElement('p');
    let sectionGoodsCardWrapperIcon = document.createElement('div');
    let sectionGoodsCardIcon = document.createElement('svg');
    let sectionGoodsCardIconUse = document.createElement('use');

    sectionGoodsCardImg.setAttribute('src', currentCard.imgCard);
    sectionGoodsCardImg.setAttribute('alt', currentCard.alt);

    sectionGoodsCard.setAttribute('class', 'section-goods-card');

    sectionGoodsCardName.setAttribute('class', 'section-goods__card-name');
    sectionGoodsCardName.textContent = currentCard.nameCard;

    sectionGoodsCardWrapperPrice.setAttribute('class', 'section-goods__wrapper-price');
    
    sectionCatalogPrice.setAttribute('class', 'section-goods__card-price');
    sectionCatalogPrice.textContent = currentCard.price;

    strikethroughPrice.setAttribute('class', 'section-goods__card-price-strikethrough');
    strikethroughPrice.textContent = currentCard.priceStrikethrough;

    strikethroughPriceDiscount.setAttribute('class', 'section-goods__card-discount');
    
    strikethroughPriceDiscountText.textContent = '10%';

    if (currentCard.priceStrikethrough) {
        strikethroughPriceDiscount.setAttribute('style', 'display:block');
        strikethroughPrice.textContent = currentCard.priceStrikethrough; 
        sectionGoodsCardWrapperIcon.setAttribute('style', 'top: 50px');
        sectionCatalogPrice.setAttribute('style', 'color: red')
    } else {
        strikethroughPriceDiscount.setAttribute('style', 'display:none');
    };

    if (currentCard.inStock === false) {
        sectionGoodsCardName.textContent = 'Товар закончился';
        sectionGoodsCardName.setAttribute('style', 'color: red')
        sectionGoodsCardImg.classList.add('section-goods__img');
        sectionCatalogPrice.setAttribute('style', 'display: none');
        sectionGoodsCardWrapperIcon.setAttribute('style', 'display: none');
    };

    sectionGoodsCardWrapperIcon.setAttribute('class', 'section-goods__wrapper-icon');

    sectionGoodsCardIconUse.setAttribute('href','./img/sprite.svg#icon-star');
    sectionGoodsCardIconUse.setAttribute('width', '16'); 
    sectionGoodsCardIconUse.setAttribute('height', '15'); 

    sectionGoodsWrapperCard.appendChild(sectionGoodsCard);
    sectionGoodsCard.appendChild(sectionGoodsCardImg);
    sectionGoodsCard.appendChild(sectionGoodsCardName);
    sectionGoodsCard.appendChild(sectionGoodsCardWrapperPrice);
    sectionGoodsCardWrapperPrice.appendChild(sectionCatalogPrice);
    sectionGoodsCardWrapperPrice.appendChild(strikethroughPrice);
    sectionGoodsCard.appendChild(strikethroughPriceDiscount);
    strikethroughPriceDiscount.appendChild(strikethroughPriceDiscountText);
    sectionGoodsCard.appendChild(sectionGoodsCardWrapperIcon);
    sectionGoodsCardWrapperIcon.appendChild(sectionGoodsCardIcon);
    sectionGoodsCardIcon.appendChild(sectionGoodsCardIconUse);
}

// Подключение секций к main 
main.appendChild(sectionIntro);
main.appendChild(sectionCatalog);
main.appendChild(sectionProduction);
main.appendChild(sectionGoods);

