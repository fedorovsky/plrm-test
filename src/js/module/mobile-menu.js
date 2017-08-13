import debounce from './debounce';

const MobileMenu = (function () {
  return {
    init: function init() {
      this._btnOpen = document.querySelector('.js-btn-mobile');
      this._navContainer = document.querySelector('.b-nav');
      this._window = window;
      this.bind();
    },
    bind: function bind() {
      const self = this;
      this._btnOpen.addEventListener('click', this.toggleMenu.bind(this));
      this._window.addEventListener('resize', debounce(function () {
        if (this.outerWidth > 768) self.closeMenu();
      }, 50));
    },
    toggleMenu: function toggleMenu() {
      if (this._navContainer.classList.contains('-is-open') === false) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    },
    openMenu: function openMenu() {
      this._navContainer.classList.add('-is-open')
    },
    closeMenu: function closeMenu() {
      this._navContainer.classList.remove('-is-open');
    }
  }
}());

export default MobileMenu;