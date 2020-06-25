import L from 'leaflet/dist/leaflet.js';
// import 'leaflet.fullscreen/Control.FullScreen';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/

export default {
  init() {
    // JavaScript to be fired on the about us page

    var iconBase = `${lbg.homeUrl}/app/themes/sj/dist/images/`;
    var marker = lbg.marker;
    console.log(lbg.marker);

    var map = L.map('map', {
      center: [37.17491, -3.60317],
      zoom: 13,
     });

     L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + lbg.mbToken, {
      subdomains: 'abcd',
      minZoom: 1,
      maxZoom: 19,
      ext: 'png',
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    var myIcon = L.icon({
      iconUrl: marker,
      iconSize: [28, 64],
      iconAnchor: [5, 64],
      popupAnchor: [10, -64],
  });

  let miPopup = L.marker([37.17491, -3.60317], {icon: myIcon}).addTo(map);

  miPopup.bindPopup('<p class="popup grande">La Bolsa</p><p class="popup">Calle Buensuceso, 22</p><p class="popup">18002. Granada</p>');

  },
};
