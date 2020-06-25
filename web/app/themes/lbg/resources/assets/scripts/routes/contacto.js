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

     L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWl0b3IiLCJhIjoiY2tidWxweHBsMGt6ZDMwc3dyMW4yNzMybCJ9.7v_-1ATNoXMV4ZzNVFL_IQ', {
      subdomains: 'abcd',
      minZoom: 1,
      maxZoom: 19,
      ext: 'png',
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    let miPopup = L.marker([37.1750016,-3.6056493]).addTo(map);

  },
};
