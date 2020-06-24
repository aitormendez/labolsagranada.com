import tippy from 'tippy.js';
// import anime from 'animejs';

export default {
  init() {
    // JavaScript to be fired on all pages

    // Transitions after page load
    // ------------------

    $(document).ready(function () {
      $('.trans-after-page-load').each(function (index, element) {
        setTimeout(function () { $(element).removeClass('trans-after-page-load') }, 100);
      });
    });

    // amburger
    // ------------------

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

    // Cabecera desplegable
    // --------------------------------------------------------------------

    let
      banner = $('.banner');

    let menu = {
      desplegado: true,
      cambiando: false,
      topscroll: true,
      plegar() {
        banner.addClass('peq');
      },
      desplegar() {
        banner.removeClass('peq');
      },
      offcanvas() {
        // anime({
        //   targets: '.banner',
        //   translateY: -250,
        //   easing: 'cubicBezier(.250, .460, .450, .940)',
        //   duration: 500,
        // });
        banner.addClass('offcanvas');
      },
      oncanvas() {
        // anime({
        //   targets: '.banner',
        //   translateY: 0,
        //   easing: 'cubicBezier(.250, .460, .450, .940)',
        //   duration: 500,
        // });
        banner.removeClass('offcanvas');
      },
    }

    // Dirección scroll
    let
      w = $(window),
      viewportWidth = w.width(),
      lastY = w.scrollTop();

    if (viewportWidth >= 768) {
      w.scroll(function() {
        let
          currY = w.scrollTop(),
          direction = (currY > lastY) ? 'down' : 'up';
        if (direction === 'down' && menu.cambiando == false) {
          menu.offcanvas();
        } else if (direction === 'up' && menu.cambiando == false) {
          menu.oncanvas();
        }
        lastY = currY;
        console.log(direction);
        if (currY == 0) {
          menu.desplegar();
        } else {
          menu.plegar();
        }
      });
    } else {
      menu.plegar();
    } // ! viewport width

    // Adaptar margin-top de content
    // ---------------------------------

    let $mt = $('#banner').outerHeight();
    console.log($mt);


  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
