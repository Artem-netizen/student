// плавающая шапка
window.addEventListener('DOMContentLoaded', () => {
    const headerFixed = document.querySelector('.header');
    const headerDesc = document.querySelector('.header__desc ');
    window.onscroll = function () {
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (posTop > 0) {
            main.classList.add('active');
            search.classList.add('active');
            headerFixed.classList.add('active');
            headerDesc.classList.add('active');
        } else {
            main.classList.remove('active');
            search.classList.remove('active');
            headerFixed.classList.remove('active');
            headerDesc.classList.remove('active');
        }
    }
});


// поиск
const search = document.querySelector('.search');
main = document.querySelector('main');
searchBtn = document.querySelector('.search__btn');
overlay_bg = document.querySelector('.overlay-bg');
searchPanel = document.querySelector('.search__panel');
searchIcon = document.querySelector('.search__icon');
searchInput = document.getElementById('search_field');
searchIconDelete = document.querySelector('.search__delete');

overlay = document.createElement('div');
overlay.classList.add("overlay");

main.appendChild(overlay);

function showSearch() {
    search.addEventListener('click', () => {
        search.classList.add('blur');
        overlay.classList.add('blur');
        overlay_bg.classList.add('blur');
        searchIcon.classList.add('blur');
        searchPanel.classList.add('blur');
        searchBtn.setAttribute('type', 'reset');
        searchIconDelete.classList.add('blur');
    });
}

document.addEventListener('click', (e) => {
    if (e.target === search) { 
        search.classList.remove('blur');
        overlay.classList.remove('blur');
        overlay_bg.classList.remove('blur');
        searchIcon.classList.remove('blur');
        searchPanel.classList.remove('blur');
        searchBtn.setAttribute('type', 'button');
        searchIconDelete.classList.remove('blur');
    }
});

showSearch();

// модальные окна
const mainPopup = document.querySelector('.popup');
const popupInner = document.querySelector('.popup-wrapper');
const popupClose = document.querySelectorAll('.popup__close');
const openPopup = document.querySelectorAll('.popup-open');

// helpful
const helpfulPopup = document.querySelector('.popup.helpful');
const helpfulInner = document.querySelector('.popup-wrapper.help');
const helpfulOpen = document.querySelectorAll('.popup-help');

// subscription
const subscriptionPopup = document.querySelector('.popup.subscription');
const subscriptionInner = document.querySelector('.popup-wrapper.popup-subsrip');
const subscriptionOpen = document.querySelectorAll('.popup-subs');

// close
popupClose.forEach((closeModal) => {
    closeModal.addEventListener('click', () => {
        mainPopup.classList.remove('open');
        popupInner.classList.remove('open');
        helpfulPopup.classList.remove('open');
        subscriptionPopup.classList.remove('open');
    })
})

openPopup.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        e.preventDefault();
        mainPopup.classList.add('open');
        popupInner.classList.add('open');
    })
})

// helpful
helpfulOpen.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        helpfulPopup.classList.add('open');
        helpfulInnerpup.classList.add('open');
    })
})

// subscription
subscriptionOpen.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        subscriptionPopup.classList.add('open');
        subscriptionInner.classList.add('open');
    })
})


// закрытие вне поля
document.addEventListener('click', (e) => {
    if (e.target === mainPopup) {
        mainPopup.classList.remove('open');
        popupInner.classList.remove('open');
    }
})

// helpful
document.addEventListener('click', (e) => {
    if (e.target === helpfulPopup) {
        helpfulPopup.classList.remove('open');
        helpfulInner.classList.remove('open');
    }
})

// subscription
document.addEventListener('click', (e) => {
    if (e.target === subscriptionPopup) {
        subscriptionPopup.classList.remove('open');
        subscriptionInner.classList.remove('open');
    }
})

// открытие/скрытие пароля
const iconEye = document.querySelector('.icon-eye');
const inputPassword = document.getElementById('pass');

function show_hide_password() {
    if (inputPassword.getAttribute('type') === 'password') {
        iconEye.classList.add('view');
        inputPassword.setAttribute('type', 'text');
    } else {
        iconEye.classList.remove('view');
        inputPassword.setAttribute('type', 'password');
    }
    return false;
}

// tabs 
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    const tabsContent = document.querySelectorAll('.tabs__content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => { el.classList.remove('_active') });
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('_active');
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = (path) => {
        tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
    };
});

// уведомления
const askBtn = document.querySelector('.header-ask');
const notice = document.querySelector('.notice-inner');
let notes = null;

contOverlay = document.createElement('span');
contOverlay.classList.add("full");

document.querySelector('.content').appendChild(contOverlay);

for (let i = 0; i < askBtn.childNodes.length; i++) {
    if (askBtn.childNodes[i].className == "quantity") {
        notes = askBtn.childNodes[i];
        notice.classList.add('active');
        contOverlay.classList.add('active');
    } else {
        notice.classList.remove('active');
        contOverlay.classList.remove('active');
    }
}