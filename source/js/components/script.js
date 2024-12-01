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


// Объекты для карточки товаров

let objectCard = {
    card1: {
        imgCard: './img/goods/bake1.png',
        alt: 'Печь',
        width: '300',
        height: '300',
        nameCard: 'Печь-камин Бавария панорама пристенная',
        price:  48990,
        inStock: false
    },
    card2: {
        imgCard: './img/goods/bake2.png',
        alt: 'Печь',
        width: '300',
        height: '300',
        nameCard: 'Печь-камин Бавария панорама пристенная',
        price: 48990, 
        discount: 90,
        inStock: true,
        svgIcon: './img/sprite.svg#icon-star'

    },
    card3: {
        imgCard: './img/goods/bake3.png',
        alt: 'Печь',
        width: '300',
        height: '300',
        nameCard: 'Печь-камин Jotul F3 IVE',
        price: 209000,
        discount: 10,
        inStock: true
    },
    card4: {
        imgCard: './img/goods/bake4.png',
        alt: 'Печь',
        nameCard: 'Печь-камин Jotul F 602 ECO BP',
        price: 101165,
        discount: 70,
        inStock: true
    }
}

// Функции 
function formatPrice(price) {
    return Math.floor(price).toLocaleString('ru-RU') + ' ₽';
}

// Создание карточки товаров

for (let goodsCard in objectCard) {
    let currentCard = objectCard[goodsCard];

    let sectionGoodsCard = document.createElement('div');
    let sectionGoodsCardImg = document.createElement('img');
    let sectionGoodsCardName = document.createElement('p');
    let sectionGoodsCardWrapperPrice = document.createElement('div');
    let sectionGoodsPrice = document.createElement('p');
    let strikethroughPrice = document.createElement('span');
    let strikethroughPriceDiscount = document.createElement('div');
    let strikethroughPriceDiscountText = document.createElement('p');

    let sectionGoodsCardIcon = document.createElement('svg');
    let sectionGoodsCardIconUse = document.createElement('use');

    // Стили классов, атрибуты для карточки товаров 

    sectionGoodsCard.setAttribute('class', 'section-goods__card');

    if (currentCard.inStock === true) {
        let sectionGoodsCardWrapperIcon = document.createElement('div');

        sectionGoodsCard.appendChild(sectionGoodsCardWrapperIcon);
        sectionGoodsCardWrapperIcon.appendChild(sectionGoodsCardIcon);
            
        sectionGoodsCardImg.setAttribute('src', currentCard.imgCard);
        sectionGoodsCardImg.setAttribute('alt', currentCard.alt);

        sectionGoodsCardName.setAttribute('class', 'section-goods__card-name');
        sectionGoodsCardName.textContent = currentCard.nameCard;
        sectionGoodsCardWrapperPrice.setAttribute('class', 'section-goods__wrapper-price');
        
        sectionGoodsPrice.setAttribute('class', 'section-goods__card-price');
        sectionGoodsPrice.textContent = formatPrice(currentCard.price);

        if (currentCard.discount) {
            sectionGoodsCardWrapperIcon.setAttribute('style', 'top: 50px');
            strikethroughPriceDiscount.setAttribute('class', 'section-goods__card-discount');
                
            strikethroughPriceDiscountText.textContent = currentCard.discount + ' %';
        }


            sectionGoodsCardWrapperIcon.setAttribute('class', 'section-goods__wrapper-icon');
        }
    if (currentCard.inStock === false) {
        sectionGoodsCard.classList.add('section-goods__card--not-available');

        sectionGoodsCardImg.setAttribute('src', currentCard.imgCard);
        sectionGoodsCardImg.setAttribute('alt', currentCard.alt);
    
        sectionGoodsCardName.textContent = 'Товар закончился';
        sectionGoodsPrice.setAttribute('style', 'display: none');

        strikethroughPriceDiscount.setAttribute('style', 'display: none');
        strikethroughPrice.setAttribute('style', 'display: none');
    }

    // Расчет скидки
    if (currentCard.discount) {
        // Цена до скидки
        sectionGoodsPrice.setAttribute('class', 'section-goods__card-price-strikethrough');

        // Цена после скидки
        let discountAmount = (currentCard.price / 100) * currentCard.discount;

        let discountedPrice = currentCard.price - discountAmount;
        currentCard.price = discountedPrice;
        
        strikethroughPrice.textContent = formatPrice(discountedPrice);
        strikethroughPrice.setAttribute('class', 'section-goods__card-new-price');
    } 

    sectionGoodsCardIconUse.setAttribute('href','./img/sprite.svg#icon-star');
    sectionGoodsCardIconUse.setAttribute('width', '16'); 
    sectionGoodsCardIconUse.setAttribute('height', '15'); 

    sectionGoodsWrapperCard.appendChild(sectionGoodsCard);
    sectionGoodsCard.appendChild(sectionGoodsCardImg);
    sectionGoodsCard.appendChild(sectionGoodsCardName);
    sectionGoodsCard.appendChild(sectionGoodsCardWrapperPrice);
    sectionGoodsCardWrapperPrice.appendChild(sectionGoodsPrice);
    sectionGoodsCardWrapperPrice.appendChild(strikethroughPrice);
    sectionGoodsCard.appendChild(strikethroughPriceDiscount);
    strikethroughPriceDiscount.appendChild(strikethroughPriceDiscountText);

    sectionGoodsCardIcon.appendChild(sectionGoodsCardIconUse);
}

// Объекты для формы
let objektForm = {
    title: 'Консультируем и подбираем оборудование',
    text: 'Наш специалист по товару задаст вам несколько вопросов и предложит подходящие варианты.',
    specialistIcon: './img/goods/specialist.png',
    textBtn:'Получить коснультацию'
}

// Форма консультации 

let sectionGoodsInputCardContainer = document.createElement('div');
let sectionGoodsInputCardWrapper= document.createElement('div');
let sectionGoodsInputCardTitle = document.createElement('h2');
let sectionGoodsSpecialistWrapper = document.createElement('div');
let sectionGoodsSpecialistIcon = document.createElement('img');
let sectionGoodsInputCardText = document.createElement('p');
let sectionGoodsForm = document.createElement('form');
let sectionGoodsFormWrapperInput = document.createElement('div');
let sectionGoodsFormBtn = document.createElement('button');


// Подключение формы к sectionGoods

sectionGoodsContainer.appendChild(sectionGoodsInputCardContainer);
sectionGoodsInputCardContainer.appendChild(sectionGoodsInputCardWrapper);
sectionGoodsInputCardWrapper.appendChild(sectionGoodsInputCardTitle);
sectionGoodsInputCardWrapper.appendChild(sectionGoodsInputCardText);

sectionGoodsInputCardWrapper.appendChild(sectionGoodsSpecialistWrapper)
sectionGoodsSpecialistWrapper.appendChild(sectionGoodsSpecialistIcon);
sectionGoodsSpecialistWrapper.appendChild(sectionGoodsInputCardText);

sectionGoodsInputCardWrapper.appendChild(sectionGoodsForm);
sectionGoodsForm.appendChild(sectionGoodsFormWrapperInput);

sectionGoodsForm.appendChild(sectionGoodsFormBtn);



// Стили классов, атрибуты для формы 

sectionGoodsInputCardContainer.setAttribute('class', 'section-goods__input-card input-card');

sectionGoodsInputCardWrapper.setAttribute('class', 'section-goods__card-wrapper input-card__wrapper');

sectionGoodsInputCardTitle.textContent = objektForm.title;
sectionGoodsInputCardTitle.setAttribute('class', 'section-goods__card-title input-card__title');

sectionGoodsSpecialistWrapper.setAttribute('class', 'section-goods__specialis-wrapper');

sectionGoodsSpecialistIcon.setAttribute('src', objektForm.specialistIcon);

sectionGoodsInputCardText.textContent = objektForm.text;
sectionGoodsInputCardText.setAttribute('class', 'section-goods__card-text input-card__text');

sectionGoodsForm.setAttribute('class', 'section-goods__form');

sectionGoodsFormWrapperInput.setAttribute('class', 'section-goods__input-wrapper input-card__input-wrapper');

sectionGoodsFormBtn.setAttribute('class', 'section-goods__input-button input-card__button ');
sectionGoodsFormBtn.textContent = objektForm.textBtn;
sectionGoodsFormBtn.setAttribute('type', 'symbit');


// Объекты INPUT 

let inputObject = {
    inputName: {
        type: 'text',
        placeholder: 'Ваше имя'
    },
    inputEmail: {
        type: 'email',
        placeholder: 'Ваш email',
    }
};

for (let inputs in inputObject) {
    let currentInput = inputObject[inputs];
    
    let sectionGoodsInputWrapper = document.createElement('div');
    let sectionGoodsInput = document.createElement('input');
    let sectionGoodsValidationMessage = document.createElement('p');

    sectionGoodsFormWrapperInput.appendChild(sectionGoodsInputWrapper);
    sectionGoodsInputWrapper.appendChild(sectionGoodsInput);
    sectionGoodsInputWrapper.appendChild(sectionGoodsValidationMessage);

    sectionGoodsValidationMessage.setAttribute('class', 'section-goods__validation-message');

    sectionGoodsInput.setAttribute('class', 'section-goods__input input-card__input');
    sectionGoodsInput.setAttribute('type', currentInput.type);
    sectionGoodsInput.setAttribute('placeholder', currentInput.placeholder);

    if (inputs === 'inputName') {
        sectionGoodsInput.setAttribute('style', 'text-transform: capitalize');
    }
    if (inputs === 'inputEmail') {
        sectionGoodsInput.addEventListener('change', function() {
            let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if (!emailPattern.test(sectionGoodsInput.value)) {
                sectionGoodsValidationMessage.setAttribute('style', 'color: red');
                sectionGoodsValidationMessage.textContent = 'Email введен некорректно';
                sectionGoodsInput.classList.add('input-card__error');
            } else {
                sectionGoodsValidationMessage.setAttribute('style', 'color: green');
                sectionGoodsValidationMessage.textContent = 'Все супер';
                sectionGoodsInput.classList.remove('input-card__error');
                sectionGoodsInput.classList.add('input-card__good');
            }
        });
    }
};

// section-montage 

// Переменные секции section-montage 
let sectionMontage = document.createElement('section');
let sectionMontageContainer = document.createElement('div');
let sectionMontageWrapper = document.createElement('div');
let sectionMontageTitle = document.createElement('h2');
let sectionMontageWarrantyInfo = document.createElement('div');
let sectionMontageIconWrapper = document.createElement('div');
// место для use
let sectionMontageWarrantyText = document.createElement('p');
// let sectionMontageWrapperCard = document.createElement('div');

// Подключение к section-montage 
sectionMontage.appendChild(sectionMontageContainer);
sectionMontageContainer.appendChild(sectionMontageWrapper);

sectionMontageWrapper.appendChild(sectionMontageTitle);

sectionMontageWrapper.appendChild(sectionMontageWarrantyInfo);

sectionMontageWarrantyInfo.appendChild(sectionMontageIconWrapper);
sectionMontageWarrantyInfo.appendChild(sectionMontageWarrantyText);

// sectionMontageWrapper.appendChild(sectionMontageWrapperCard);

// Стили классов, атрибуты section-montage 
sectionMontage.setAttribute('class', 'section-montage');
sectionMontageContainer.setAttribute('class', 'section-montage__container');

sectionMontageWrapper.setAttribute('class', 'section-montage__wrapper');

sectionMontageTitle.setAttribute('class', 'section-montage__title');
sectionMontageTitle.textContent = 'Монтаж';

sectionMontageWarrantyInfo.setAttribute('class', 'section-montage__warranty-info');

sectionMontageIconWrapper.setAttribute('class', 'section-montage__icon-wrapper');
//img
sectionMontageWarrantyText.setAttribute('class', 'section-montage__warranty-text ');
sectionMontageWarrantyText.textContent = 'Даём гарантию на выполненные работы — 5 лет и предоставляем сервисное обслуживание.';

// sectionMontageWrapperCard.setAttribute('class', 'section-montage__wrapper-card');

// Объекты карточек расчета 

// let sectionMontageObjectCard = {
//     card1: {
//         imgCard: '../img/montage/stove-installation.jpg',
//         altText: 'Установка печи в доме',
//         urlLink: '#targetElement',
//         textLink: 'Установка печи в доме',
//         price: 20000
//     },
//     card2: {
//         imgCard: '../img/montage/fireplace-installation.jpg',
//         altText: 'Установка камина',
//         urlLink: '#targetElement',
//         textLink: 'Установка камина',
//         price: 29000
//     },
//     card3: {
//         imgCard: '../img/montage/installation-bath.jpg',
//         altText: 'Установка печи в бане',
//         urlLink: '#targetElement',
//         textLink: 'Установка печи в бане',
//         price: 25000
//     },
//     card4: {
//         imgCard: '../img/montage/installation-boiler.jpg',
//         altText: 'Установка котла',
//         urlLink: '#targetElement',
//         textLink: 'Установка котла',
//         price: 25000
//     },
//     card5: {
//         imgCard: '../img/montage/installation-chimney.jpg',
//         altText: 'Установка дымохода',
//         urlLink: '#targetElement',
//         textLink: 'Установка дымохода',
//         price: 22000
//     },
//     card6: {
//         imgCard: '../img/montage/chimney-making.jpg',
//         altText: 'Изготовление дымохода',
//         urlLink: '#targetElement',
//         textLink: 'Изготовление дымохода',
//         price: 18000,
//     }
// }

// for (мontageCrad in sectionMontageObjectCard) {
//     let currentCard = sectionMontageObjectCard[мontageCrad];

//     let sectionMontageCard = document.createElement('div');
//     let sectionMontageCardImg = document.createElement('img');
//     let sectionMontageCardIcon = document.createElement('svg');
//     let sectionMontageCardIconUse = document.createElement('use');
    
//     let sectionMontageCardiIfoWrapper = document.createElement('div');
//     let sectionMontageCardName = document.createElement('a');
//     let sectionMontageCardPrice = document.createElement('p');


    // Подключение
    // // sectionMontageWrapperCard.appendChild(sectionMontageCard);
    // sectionMontageCard.appendChild(sectionMontageCardImg);

    // sectionMontageCardIcon.appendChild(sectionMontageCardIconUse);
    // sectionMontageCard.appendChild(sectionMontageCardiIfoWrapper);

    // sectionMontageCardiIfoWrapper.appendChild(sectionMontageCardName);
    // sectionMontageCardiIfoWrapper.appendChild(sectionMontageCardPrice);

    // sectionMontageCard.appendChild(sectionMontageCardIcon);

    // // Функции

    // function formatPrice(price) {
    //     return 'от ' + Math.floor(price).toLocaleString('ru-RU') + ' руб.';
    // };
    
    // Стили, атрибуты
//     sectionMontageCard.setAttribute('class', 'section-montage__card');

//     sectionMontageCardImg.setAttribute('src', currentCard.imgCard);
//     sectionMontageCardImg.setAttribute('alt', currentCard.altText);

//     // sectionMontageCardIconUse.setAttribute('') use!!!

//     sectionMontageCardiIfoWrapper.setAttribute('class', 'section-montage__info-wrapper');

//     sectionMontageCardName.setAttribute('class', 'section-montage__card-link');
//     sectionMontageCardName.setAttribute('href', currentCard.urlLink);
//     sectionMontageCardName.textContent = currentCard.textLink;

//     sectionMontageCardPrice.setAttribute('class', 'section-montage__price ')
//     sectionMontageCardPrice.textContent = formatPrice(currentCard.price);
// };

document.addEventListener('DOMContentLoaded', () => {
    // Объекты 
    let sectionMontageObjectCard = {
        card1: {
            imgCard: '../img/montage/stove-installation.jpg',
            urlLink: '#targetElement',
            textLink: 'Установка печи в доме',
            price: 20000
        },
        card2: {
            imgCard: '../img/montage/fireplace-installation.jpg',
            urlLink: '#targetElement',
            textLink: 'Установка камина',
            price: 29000
        },
        card3: {
            imgCard: '../img/montage/installation-bath.jpg',
            urlLink: '#targetElement',
            textLink: 'Установка печи в бане',
            price: 25000
        },
        card4: {
            imgCard: '../img/montage/installation-boiler.jpg',
            urlLink: '#targetElement',
            textLink: 'Установка котла',
            price: 25000
        },
        card5: {
            imgCard: '../img/montage/installation-chimney.jpg',
            urlLink: '#targetElement',
            textLink: 'Установка дымохода',
            price: 22000
        },
        card6: {
            imgCard: '../img/montage/chimney-making.jpg',
            urlLink: '#targetElement',
            textLink: 'Изготовление дымохода',
            price: 18000,
        }
    };

    // Переменные
    const sectionMontageCardContainer = document.querySelector('.section-montage__wrapper-card');
    const template = document.querySelector('.section-montage__card-template');

    // Цикл
    for (let montageCard in sectionMontageObjectCard) {
        let currentCard = sectionMontageObjectCard[montageCard];

        // Функции
        function formatPrice(price) {
            return 'от ' + Math.floor(price).toLocaleString('ru-RU') + ' руб.';
        }
        
        const clone = template.content.cloneNode(true);

        // Значения 
        clone.querySelector('.section-montage__card-img').src = currentCard.imgCard;
        clone.querySelector('.section-montage__card-img').alt = currentCard.textLink;

        clone.querySelector('.section-montage__card-link').textContent = currentCard.textLink;
        clone.querySelector('.section-montage__card-link').href = currentCard.urlLink;

        clone.querySelector('.section-montage__price').textContent = formatPrice(currentCard.price);
        
        sectionMontageWrapper.appendChild(sectionMontageCardContainer);
        sectionMontageCardContainer.appendChild(clone);
    }
});

// Объекты для формы
let sectionMontageobjektForm = {
    title: 'Расчёт стоимости установки',
    text: 'Если всё необходимое оборудование у вас уже есть и вам нужна только установка, то наши специалисты могут приехать на замер и рассчитать стоимость работы.',
    textBtn: 'Рассчитать стоимость'
}

let sectionMontageInputCardContainer = document.createElement('div');
let sectionMontageInputCardWrapper= document.createElement('div');
let sectionMontageInputCardTitle = document.createElement('h2');
let sectionMontageInputCardText = document.createElement('p');
let sectionMontageForm = document.createElement('form');
let sectionMontageFormWrapperInput = document.createElement('div');
let sectionMontageFormBtn = document.createElement('button');

// Подключение 

sectionMontageContainer.appendChild(sectionMontageInputCardContainer);
sectionMontageInputCardContainer.appendChild(sectionMontageInputCardWrapper);
sectionMontageInputCardWrapper.appendChild(sectionMontageInputCardTitle);
sectionMontageInputCardWrapper.appendChild(sectionMontageInputCardText);
sectionMontageInputCardWrapper.appendChild(sectionMontageForm);
sectionMontageForm.appendChild(sectionMontageFormWrapperInput);
sectionMontageForm.appendChild(sectionMontageFormBtn);



// Атрибут, стили
sectionMontageInputCardContainer.setAttribute('class', 'section-montage__container-input input-card');

sectionMontageInputCardWrapper.setAttribute('class', 'section-montage__card-wrapper input-card__wrapper');
sectionMontageInputCardWrapper.setAttribute('id', 'targetElement');

sectionMontageInputCardTitle.setAttribute('class', 'section-montage__card-title input-card__title');
sectionMontageInputCardTitle.textContent = sectionMontageobjektForm.title;

sectionMontageInputCardText.setAttribute('class', 'section-montage__card-text input-card__text');
sectionMontageInputCardText.textContent = sectionMontageobjektForm.text;

sectionMontageForm.setAttribute('class', 'section-montage__form');

sectionMontageFormWrapperInput.setAttribute('class', 'section-montage__input-wrapper input-card__input-wrapper');

sectionMontageFormBtn.setAttribute('class', 'section-montage__input-button input-card__button ');
sectionMontageFormBtn.textContent = sectionMontageobjektForm.textBtn;
sectionMontageFormBtn.setAttribute('type', 'symbit');
// input 

let sectionMontageinput = {
    inputName: {
        type: 'text',
        placeholder: 'Ваше имя'
    },
    inputTel: {
        type: 'tel',
        placeholder: 'Номер телефона',
        pattern: '[0-9]{10}', 
        maxlength: '15', 
    }
};

for (let montageInputs in sectionMontageinput) {
    let currentInput = sectionMontageinput[montageInputs];
    
    let sectionMontageInputWrapper = document.createElement('div');
    let sectionMontageInput = document.createElement('input');
    let sectionMontageValidationMessage = document.createElement('p');


    sectionMontageFormWrapperInput.appendChild(sectionMontageInputWrapper);
    sectionMontageInputWrapper.appendChild(sectionMontageInput);
    
    sectionMontageValidationMessage.setAttribute('class', 'section-montage__validation-message');

    sectionMontageInput.setAttribute('class', 'section-montage__input input-card__input');
    sectionMontageInput.setAttribute('type', currentInput.type);
    sectionMontageInput.setAttribute('placeholder', currentInput.placeholder);
    sectionMontageInput.setAttribute('pattern', sectionMontageinput.pattern);
    sectionMontageInput.setAttribute('maxlength', sectionMontageinput.maxlength);
};

// Секция портфолио

// Объекты 
let objectPortfolio = {
    title: 'Портфолио',
    btnText: 'Все работы',
    typeBtn: 'button',
    overviewTitle: 'Интернет-магазин каминов, печей и котлов',
    overviewImg: './img/portfolio/overview.png',
    overviewText: 'Интернет-магазин каминов собрал самое ценное, что имеется на современном рынке. Если вы ищите надежную технику для обогрева, приготовления пищи, созерцания огня и прочих потребностей, то вам обязательно следует посетить наш сайт. Интернет-портал ПИТЕР КАМИН! располагает широчайшим ассортиментом технических приспособлений. У нас на виртуальной витрине представлены следующие категории:',
    bottomText: 'Мы уверены, что вы обязательно отыщите желаемый тип модели.'

}

// Переменные 
let sectionPortfolio = document.createElement('section');
let sectionPortfolioContainer = document.createElement('div');
let sectionPortfolioWrapper = document.createElement('div');
let sectionPortfolioTitle = document.createElement('h2');
let sectionPortfoWrapperCard = document.createElement('div');
let sectionPortfolioButton = document.createElement('button');
let sectionPortfolioShopOverview = document.createElement('div');
let sectionPortfolioOverviewTitle = document.createElement('h3');
let sectionPortfolioOverviewImg = document.createElement('img');
let sectionPortfolioOverviewText = document.createElement('p');
let sectionPortfolioOverviewList = document.createElement('ol');
let sectionPortfolioBottomText = document.createElement('p');

// Подключение 
sectionPortfolio.appendChild(sectionPortfolioContainer);
sectionPortfolioContainer.appendChild(sectionPortfolioWrapper);
sectionPortfolioWrapper.appendChild(sectionPortfolioTitle);
sectionPortfolioWrapper.appendChild(sectionPortfoWrapperCard);
sectionPortfolioWrapper.appendChild(sectionPortfolioButton);
sectionPortfolioWrapper.appendChild(sectionPortfolioShopOverview);
sectionPortfolioShopOverview.appendChild(sectionPortfolioOverviewTitle);
sectionPortfolioShopOverview.appendChild(sectionPortfolioOverviewImg);
sectionPortfolioShopOverview.appendChild(sectionPortfolioOverviewText);
sectionPortfolioShopOverview.appendChild(sectionPortfolioOverviewList);
sectionPortfolioShopOverview.appendChild(sectionPortfolioBottomText);



// Стили, атрибуты
sectionPortfolio.setAttribute('class', 'section-portfolio');
sectionPortfolioContainer.setAttribute('class', 'section-portfolio__container');

sectionPortfolioWrapper.setAttribute('class', 'section-portfolio__wrapper');

sectionPortfolioTitle.setAttribute('class', 'section-portfolio__title');
sectionPortfolioTitle.textContent = objectPortfolio.title;

sectionPortfoWrapperCard.setAttribute('class', 'section-portfolio__wrapper-card')

sectionPortfolioButton.setAttribute('class', 'section-portfolio__button');
sectionPortfolioButton.textContent = objectPortfolio.btnText;
sectionPortfolioButton.setAttribute('type', objectPortfolio.typeBtn);

sectionPortfolioShopOverview.setAttribute('class', 'section-portfolio__shop-overview');

sectionPortfolioOverviewTitle.setAttribute('class', 'section-portfolio__overview-title');
sectionPortfolioOverviewTitle.textContent = objectPortfolio.overviewTitle;

sectionPortfolioOverviewImg.setAttribute('src', objectPortfolio.overviewImg);

sectionPortfolioOverviewText.setAttribute('class', 'section-portfolio__overview-text');
sectionPortfolioOverviewText.textContent = objectPortfolio.overviewText;

sectionPortfolioOverviewList.setAttribute('class', 'section-portfolio__overview-list');

sectionPortfolioBottomText.textContent = objectPortfolio.bottomText;
sectionPortfolioBottomText.setAttribute('class', 'section-portfolio__overview-bottom-text');

// Объекты карточек портфолио 

let cardsPortfolio = {
    gards1: {
        img: './img/portfolio/fireplace-installation.jpg',
        alt: 'Монтаж камина «ABX Norfolk» и облицовки',
        text: 'Монтаж камина «ABX Norfolk» и облицовки'
    },
    gards2: {
        img: './img/portfolio/installation-520.jpg',
        alt: 'Монтаж печи-камина «Jotul F 520»',
        text: 'Монтаж печи-камина «Jotul F 520»'
    },
    gards3: {
        img: './img/portfolio/fireplace-installation.jpg',
        alt: 'Монтаж камина «ABX Norfolk» и облицовки',
        text: 'Монтаж камина «ABX Norfolk» и облицовки'
    }
};

for (portfolioCard in cardsPortfolio) {
    let currentCard = cardsPortfolio[portfolioCard];

    let sectionPortfolioWrapperContent = document.createElement('div');
    let sectionPortfolioImg = document.createElement('img');
    let sectionPortfolioText = document.createElement('p');

    // Подключение 

    sectionPortfoWrapperCard.appendChild(sectionPortfolioWrapperContent);
    sectionPortfolioWrapperContent.appendChild(sectionPortfolioImg);
    sectionPortfolioWrapperContent.appendChild(sectionPortfolioText);

    // Атрибуты, стили 

    sectionPortfolioWrapperContent.setAttribute('class', 'section-portfolio__wrapper-content');

    sectionPortfolioImg.setAttribute('src', currentCard.img);
    sectionPortfolioImg.setAttribute('alt', currentCard.alt);

    sectionPortfolioText.setAttribute('class', 'section-portfolio__text');
    sectionPortfolioText.textContent = currentCard.text;
};

// Объекты спика

let OverviewItems = {
    item1: {
        text: 'банные агрегаты',
        textItem: 'банные агрегаты;'
    },
    item2: {
        text: 'банные агрегаты',
        textItem: 'отопительно-варочные изделия;'
    },
    item3: {
        text: 'банные агрегаты',
        textItem: 'инновационные биокамины;'
    },
    item4: {
        text: 'банные агрегаты',
        textItem: 'грили, барбекю, мангалы;'
    },
    item5: {
        text: 'банные агрегаты',
        textItem: 'электрические приборы;'
    },
    item6: {
        text: 'банные агрегаты',
        textItem: 'сопутствующие комплектующие.'
    }
};

for (let itemOverview in OverviewItems) {
    let currentItem = OverviewItems[itemOverview];

    let sectionPortfolioOverviewItem = document.createElement('li');

    // Подключение списка 
    sectionPortfolioOverviewList.appendChild(sectionPortfolioOverviewItem);

    // Атрибуты, стили 

    sectionPortfolioOverviewItem.setAttribute('class', 'section-portfolio__overview-item')
    sectionPortfolioOverviewItem.textContent = currentItem.textItem;
}

// footer

// Переменные 

let footer = document.createElement('footer');
let footerContainer = document.createElement('div');

let footerWrapper = document.createElement('div');

let footerInfoWrapper = document.createElement('div');
let footerInfoTitle = document.createElement('h2');
let footerInfoWrapperList = document.createElement('ul');

let footerContactsWrapper = document.createElement('div');
let footerContactsTitle = document.createElement('h2');
let map = document.createElement('iframe');


// Подключение 

footer.appendChild(footerContainer);
footerContainer.appendChild(footerInfoWrapper);
footerInfoWrapper.appendChild(footerInfoTitle);
footerInfoWrapper.appendChild(footerInfoWrapperList);

footerContainer.appendChild(footerContactsWrapper);
footerContactsWrapper.appendChild(footerContactsTitle);
footerContactsWrapper.appendChild(map);

// Атрибуты, стили 

footer.setAttribute('class', 'footer');
footerContainer.setAttribute('class', 'footer__container');

footerInfoWrapper.setAttribute('class', 'footer__info-wrapper');
footerInfoTitle.setAttribute('class', 'footer__info-title');
footerInfoTitle.textContent = 'Информация';

footerInfoWrapperList.setAttribute('class', 'footer__info-wrapper-list');

footerContactsWrapper.setAttribute('class', 'footer__contacts-wrapper');
footerContactsTitle.setAttribute('class', 'footer__contacts-title');
footerContactsTitle.textContent = 'Контакты';

// Объекты map 

let objectMap = {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4008.7635828882653!2d30.326358128221997!3d59.84279941130454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962535dceb8eff%3A0x752f9188314eb628!2z0YPQuy4g0JvQtdC90YHQvtCy0LXRgtCwLCA0Mywg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5NjE0Mw!5e0!3m2!1sru!2sru!4v1732641585548!5m2!1sru!2sru',
    width: 410,
};

map.setAttribute('src', objectMap.src);



// объекты footer info 

let objectsInfo = {
    link1: {
        textLink: 'О нас',
        urlLink: '#'
    },
    link2: {
        textLink: 'Доставка и оплата',
        urlLink: '#'
    },
    link3: {
        textLink: 'Производители',
        urlLink: '#'
    },
    link4: {
        textLink: 'Акции',
        urlLink: '#'
    },
    link5: {
        textLink: 'Карта сайта',
        urlLink: '#'
    }
}


// info wrapper 

for (let listInfo in objectsInfo) {
    let currentLink = objectsInfo[listInfo];

    let footerInfoItem = document.createElement('li');
    let footerInfoLink = document.createElement('a');

    // Подключение списка 

    footerInfoWrapperList.appendChild(footerInfoItem);
    footerInfoItem.appendChild(footerInfoLink);

    // Атрибуты, стили 
    footerInfoItem.setAttribute('class', 'footer__info-item');

    footerInfoLink.setAttribute('class', 'footer__info-link');
    footerInfoLink.setAttribute('href', currentLink.urlLink);
    footerInfoLink.textContent = currentLink.textLink;
}


// Подключение секций к main 
main.appendChild(sectionIntro);
main.appendChild(sectionCatalog);
main.appendChild(sectionProduction);
main.appendChild(sectionGoods);
main.appendChild(sectionMontage);
main.appendChild(sectionPortfolio);
main.appendChild(footer);
// 
