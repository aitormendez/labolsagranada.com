import tippy from 'tippy.js';

export default {
  init() {
    // JavaScript to be fired on all pages

    $('.hamburger').click(function() {
      $(this).toggleClass('is-active');
    });

    // TOOLTIPS
    // ------------------
    // const tps = document.querySelectorAll('.marca');
    // const template = document.getElementById('template');

    tippy('#menu-menu-1 .menu-item a', {
      content: 'data-tippy-content',
      animation: 'scale',
    });

    tippy('#menu-tienda a', {
      content: 'Ir a la tienda',
      animation: 'scale',
    });


  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
