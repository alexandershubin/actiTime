/**
 * Класс для работы с меню
 */
export default class Menu {
  constructor() {
    this._els = {
      helpButton: document.querySelector('.main-menu__item--arrow'),
      menuCrossButton: document.querySelector('.menu-burger'),
      subMenu: document.querySelector('.sub-menu'),
      arrowButton: document.querySelector('.arrow'),
      mainNav: document.querySelector('.main-nav')
    };

    this._addListeners();
  }

  /**
   * Добавить обработчики событий
   */
  _addListeners() {
    this._els.menuCrossButton.addEventListener('click', this.toggleSubmenu.bind(this));
    this._els.helpButton.addEventListener('click', this.toggleMenu.bind(this));
  }

  /**
   * Переключить меню
   */
  toggleMenu() {
    this._els.arrowButton.classList.toggle('active');
    this._els.subMenu.classList.toggle('active');
    this._els.helpButton.classList.toggle('active');
  }

  /**
   * Переключить подменю
   */
  toggleSubmenu() {
    this._els.menuCrossButton.classList.toggle('active');
    this._els.mainNav.classList.toggle('active');
  }
}
