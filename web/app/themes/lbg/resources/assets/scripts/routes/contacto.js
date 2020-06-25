import L from 'leaflet/dist/leaflet.js';
// import 'leaflet.fullscreen/Control.FullScreen';

/* eslint-disable no-unused-vars */

export default {
  init() {
    // JavaScript to be fired on the about us page

    var map = L.map('map', {
      center: [37.1750016,-3.6056493],
      zoom: 13,
     });

     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      subdomains: 'abcd',
      minZoom: 1,
      maxZoom: 19,
      ext: 'png',
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    }).addTo(map);

    let miPopup = L.marker([37.1750016,-3.6056493]).addTo(map);

  },
};
