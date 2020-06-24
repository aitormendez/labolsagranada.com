import anime from 'animejs';

export default {
  init() {
    // JavaScript to be fired on the about us page

    let elementos = document.querySelectorAll('.woocommerce-LoopProduct-link');
    console.log(elementos);

    elementos.forEach(listeners);

    function listeners(currentIndex) {

      currentIndex.addEventListener('mouseover', function() {
        let onsale = currentIndex.getElementsByClassName('onsale')
        anime({
          targets: onsale,
          rotate: 360,
        });
      });

      currentIndex.addEventListener('mouseout', function() {
        let onsale = currentIndex.getElementsByClassName('onsale')
        anime({
          targets: onsale,
          rotate: 0,
        });
      });

    }
  },
};
