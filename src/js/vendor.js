/* A responsive image polyfill. */
window.picturefill = require('picturefill');
/* Use external SVG sprite */
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';

document.addEventListener("DOMContentLoaded", function(){
  objectFitImages();
  svg4everybody();
});
