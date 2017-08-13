import React from 'react';
import ReactDOM from 'react-dom';
import NewsletterApp from './components/NewsletterApp.jsx';
import MobileMenu from './module/mobile-menu';

ReactDOM.render( <NewsletterApp/>, document.getElementById('mount-point'));

MobileMenu.init();


