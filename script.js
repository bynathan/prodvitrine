// COOKIES SCRIPT
function createCookie(name, value, deleted) {
    var date = new Date();
    date.setTime(date.getTime() + (deleted * 24 * 60 * 60 * 1000));
    var expired = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expired + ";path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function cookieExist(name) {
    return getCookie(name) !== null;
}

if (cookieExist("logged")) {
    console.log("O cookie já existe, não abrir algo!");
} else {
    createCookie("logged", "valor do cookie", 30);
}

//MENU MOBILE SCRIPT

setTimeout(() => {
    let menuHamb = document.getElementById('hamburguer');
    let menuHambMobileMenuOpen = document.getElementById('hamburguerMobile');
    let menuMobile = document.getElementById('menu-mobile-container');
    
    menuHamb.addEventListener('click', () => {
        menuMobile.classList.add('active');
        menuHamb.classList.add('active');
    })

    menuHambMobileMenuOpen.addEventListener('click', () => {
        menuMobile.classList.remove('active');
        menuHamb.classList.remove('active');
    })
}, 1)

//VERIFICAÇÃO DE IDADE SCRIPT

setTimeout(() => {
    let agrTrue = document.getElementById('yes');
    let ocultVerification = document.getElementById('container-age');

    if (cookieExist("age")) {
        ocultVerification.classList.add('verifiqued');
    }

    const checkbox = document.getElementById('terms');
    const button = document.getElementById('yes');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            button.disabled = false;
            agrTrue.addEventListener('click', () => {
                ocultVerification.classList.add('verifiqued');
                createCookie("age", "true", 30);
            })
        } else {
            button.disabled = true;
        }
    });
}, 1)

//WELCOME SCRIPT

setTimeout(() => {
    let closeWelcome = document.getElementById('close-welcome');
    let ocultVerification = document.getElementById('container-welcome');
    let scrollbar = document.getElementById('conditions');
    
    closeWelcome.addEventListener('click', () => {
        ocultVerification.classList.add('verifiqued');
        createCookie("welcome", "true", 30);
        scrollbar.classList.remove('conditions');
    })

    if (cookieExist("welcome")) {
        ocultVerification.classList.add('verifiqued');
        scrollbar.classList.remove('conditions');
    }
}, 1)

//LOGIN SCRIPT

setTimeout(() => {
    let btnLogin = document.getElementById('login');
    let ocultVerification = document.getElementById('container-login');
    let conditions = document.getElementById('conditions');
    let closedLogin = document.getElementById('close');
    
    btnLogin.addEventListener('click', () => {
        ocultVerification.classList.remove('ocult');
        conditions.classList.add('conditions');
    })

    closedLogin.addEventListener('click', () => {
        ocultVerification.classList.add('ocult');
        conditions.classList.remove('conditions');
    })

}, 1)

//HIGHLIGHTS SCRIPT

setTimeout(() => {
    const container = document.getElementById('highlights');
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 0.7;
        container.scrollLeft = scrollLeft - walk;
    });

}, 1)