import menuListTemplate from './menuListTemplate.hbs';
import menuData from '../menu.json';

/*
const body = document.querySelector('body');
const menuContainer = document.querySelector('.js-menu');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const currentTheme = localStorage.getItem('currentTheme') || Theme.LIGHT;
const themeSwitch = document.getElementById('theme-switch-toggle');
menuContainer.innerHTML = menuListTemplate(menuData);

const setTheme = color => {
    
    body.classList.forEach(element => {
        if(element.endsWith('-theme')) {
            console.log('body class endsWith..');
            body.classList.remove(element);
        }
    });

    if(color === Theme.LIGHT) {
        themeSwitch.checked = false;
    } else {
        themeSwitch.checked = true;
    }

    body.classList.add(color);
    localStorage.setItem('currentTheme', color);
};

setTheme(currentTheme);

const changeTheme = e => {
    if(e.target.checked) {
        setTheme(Theme.DARK);
    } else {
        setTheme(Theme.LIGHT);
    }
};

themeSwitch.addEventListener('change', changeTheme);
*/

class App {
    body = document.querySelector('body');
    bodyClasses = this.body.classList;
    menuContainer = document.querySelector('.js-menu');
    Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    };
    currentTheme = localStorage.getItem('currentTheme') || this.Theme.LIGHT;
    themeSwitch = document.getElementById('theme-switch-toggle');

    init() {
        this.menuContainer.innerHTML = menuListTemplate(menuData);
        this.setTheme(this.currentTheme);
        this.themeSwitch.addEventListener('change', this.changeTheme.bind(this));
    }

    setTheme(color) {
        this.bodyClasses.forEach(element => {
            if(element.endsWith('-theme')) {
                this.bodyClasses.remove(element);
            }
        });
    
        if(color === this.Theme.LIGHT) {
            this.themeSwitch.checked = false;
        } else {
            this.themeSwitch.checked = true;
        }
    
        this.bodyClasses.add(color);
        localStorage.setItem('currentTheme', color);
    }

    changeTheme() {
        if(this.themeSwitch.checked) {
            this.setTheme(this.Theme.DARK);
        } else {
            this.setTheme(this.Theme.LIGHT);
        }
    };
}

const app = new App();

app.init();