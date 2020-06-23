// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());

// Font Awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

var faShoppingCart = {
  prefix: 'fal',
  iconName: 'shopping-cart',
  icon: [
    512,
    512,
    [],
    'e001',
    'M490.658 56.125H114.915L107.512 17.1681C105.619 7.21382 96.8096 0 86.5439 0H10.6666C4.77599 0 0 4.71187 0 10.5234V17.5391C0 23.3506 4.77599 28.0625 10.6666 28.0625H80.6399L142.797 355.119C133.604 365.088 128 378.335 128 392.875C128 423.872 153.47 449 184.889 449C216.307 449 241.777 423.872 241.777 392.875C241.788 383.021 239.156 373.339 234.148 364.812H363.185C358.177 373.339 355.545 383.021 355.556 392.875C355.556 423.872 381.026 449 412.445 449C443.863 449 469.333 423.872 469.333 392.875C469.333 377.096 462.725 362.848 452.1 352.651C449.797 343.67 441.564 336.75 431.402 336.75H168.249L157.582 280.625H452.142C462.247 280.625 470.966 273.63 473.028 263.871L511.544 81.4646C514.303 68.3944 504.19 56.125 490.658 56.125ZM213.333 392.875C213.333 408.349 200.573 420.938 184.889 420.938C169.204 420.938 156.444 408.349 156.444 392.875C156.444 377.401 169.204 364.812 184.889 364.812C200.573 364.812 213.333 377.401 213.333 392.875ZM412.444 420.938C396.759 420.938 383.999 408.349 383.999 392.875C383.999 377.401 396.759 364.812 412.444 364.812C428.128 364.812 440.888 377.401 440.888 392.875C440.888 408.349 428.128 420.938 412.444 420.938ZM446.36 252.562H152.249L120.249 84.1875H481.916L446.36 252.562V252.562Z',
  ],
}

var faShoppingCartBg = {
  prefix: 'fal',
  iconName: 'shopping-cart-bg',
  icon: [
    512,
    512,
    [],
    'e001',
    'M490.658 56.125H114.915L107.512 17.1681C105.619 7.21382 96.8096 0 86.5439 0H10.6666C4.77599 0 0 4.71187 0 10.5234V17.5391C0 23.3506 4.77599 28.0625 10.6666 28.0625H80.6399L142.797 355.119C133.604 365.088 128 378.335 128 392.875C128 423.872 153.47 449 184.889 449C216.307 449 241.777 423.872 241.777 392.875C241.788 383.021 239.156 373.339 234.148 364.812H363.185C358.177 373.339 355.545 383.021 355.556 392.875C355.556 423.872 381.026 449 412.445 449C443.863 449 469.333 423.872 469.333 392.875C469.333 377.096 462.725 362.848 452.1 352.651C449.797 343.67 441.564 336.75 431.402 336.75H168.249L157.582 280.625H452.142C462.247 280.625 470.966 273.63 473.028 263.871L511.544 81.4646C514.303 68.3944 504.19 56.125 490.658 56.125Z',
  ],
}

var faCashRegister = {
  prefix: 'fal',
  iconName: 'cash-register',
  icon: [
    512,
    512,
    [],
    'e002',
    'M231 248C231 239.2 223.8 232 215 232H199C190.2 232 183 239.2 183 248V264C183 272.8 190.2 280 199 280H215C223.8 280 231 272.8 231 264V248ZM135 248C135 239.2 127.8 232 119 232H103C94.2 232 87 239.2 87 248V264C87 272.8 94.2 280 103 280H119C127.8 280 135 272.8 135 264V248ZM167 296H151C142.2 296 135 303.2 135 312V328C135 336.8 142.2 344 151 344H167C175.8 344 183 336.8 183 328V312C183 303.2 175.8 296 167 296ZM263 296H247C238.2 296 231 303.2 231 312V328C231 336.8 238.2 344 247 344H263C271.8 344 279 336.8 279 328V312C279 303.2 271.8 296 263 296ZM327 248C327 239.2 319.8 232 311 232H295C286.2 232 279 239.2 279 248V264C279 272.8 286.2 280 295 280H311C319.8 280 327 272.8 327 264V248ZM510.4 379.5L484.9 201.2C481.5 177.6 461.3 160 437.4 160H191V96H271C279.8 96 287 88.8 287 80V16C287 7.2 279.8 0 271 0H79C70.2 0 63 7.2 63 16V80C63 88.8 70.2 96 79 96H159V160H72.6C48.7 160 28.5 177.6 25.1 201.2L-0.4 379.5C-0.8 382.5 -1 385.5 -1 388.6V464C-1 490.5 20.5 512 47 512H463C489.5 512 511 490.5 511 464V388.5C511 385.5 510.8 382.5 510.4 379.5ZM95 64V32H255V64H95ZM56.8 205.7C57.9 197.9 64.7 192 72.6 192H437.3C445.2 192 452 197.9 453.1 205.7L478.7 384H31.3L56.8 205.7ZM479 464C479 472.8 471.8 480 463 480H47C38.2 480 31 472.8 31 464V416H479V464ZM407 232H391C382.2 232 375 239.2 375 248V264C375 272.8 382.2 280 391 280H407C415.8 280 423 272.8 423 264V248C423 239.2 415.8 232 407 232ZM359 296H343C334.2 296 327 303.2 327 312V328C327 336.8 334.2 344 343 344H359C367.8 344 375 336.8 375 328V312C375 303.2 367.8 296 359 296Z',
  ],
}

var faCashRegisterBg = {
  prefix: 'fal',
  iconName: 'cash-register-bg',
  icon: [
    512,
    512,
    [],
    'e002',
    'M485.9 201.2L511.4 379.5C511.8 382.5 512 385.5 512 388.5V464C512 490.5 490.5 512 464 512H48C21.5 512 0 490.5 0 464V388.6C0 385.5 0.2 382.5 0.6 379.5L26.1 201.2C29.5 177.6 49.7 160 73.6 160H160V96H80C71.2 96 64 88.8 64 80V16C64 7.2 71.2 0 80 0H272C280.8 0 288 7.2 288 16V80C288 88.8 280.8 96 272 96H192V160H438.4C462.3 160 482.5 177.6 485.9 201.2Z',
  ],
}

var faUser = {
  prefix: 'fal',
  iconName: 'user',
  icon: [
    512,
    512,
    [],
    'e003',
    'M313.6 288C284.9 288 271.1 304 224 304C176.9 304 163.2 288 134.4 288C60.2 288 0 348.2 0 422.4V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V422.4C448 348.2 387.8 288 313.6 288ZM416 464C416 472.8 408.8 480 400 480H48C39.2 480 32 472.8 32 464V422.4C32 365.9 77.9 320 134.4 320C154 320 173.5 336 224 336C274.4 336 294 320 313.6 320C370.1 320 416 365.9 416 422.4V464ZM224 256C294.7 256 352 198.7 352 128C352 57.3 294.7 0 224 0C153.3 0 96 57.3 96 128C96 198.7 153.3 256 224 256ZM224 32C276.9 32 320 75.1 320 128C320 180.9 276.9 224 224 224C171.1 224 128 180.9 128 128C128 75.1 171.1 32 224 32Z',
  ],
}

var faUserBg = {
  prefix: 'fal',
  iconName: 'user-bg',
  icon: [
    512,
    512,
    [],
    'e003',
    'M313.6 288C284.9 288 271.1 304 224 304C176.9 304 163.2 288 134.4 288C60.2 288 0 348.2 0 422.4V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V422.4C448 348.2 387.8 288 313.6 288ZM224 256C294.7 256 352 198.7 352 128C352 57.3 294.7 0 224 0C153.3 0 96 57.3 96 128C96 198.7 153.3 256 224 256Z',
  ],
}


var faEnvelope = {
  prefix: 'fal',
  iconName: 'envelope',
  icon: [
    512,
    512,
    [],
    'e004',
    'M464 0H48C21.5 0 0 21.5 0 48V336C0 362.5 21.5 384 48 384H464C490.5 384 512 362.5 512 336V48C512 21.5 490.5 0 464 0ZM48 32H464C472.8 32 480 39.2 480 48V89.4C458.1 107.9 426.8 133.4 329.4 210.7C312.5 224.1 279.2 256.4 256 256C232.8 256.4 199.4 224.1 182.6 210.7C85.2 133.4 53.9 107.9 32 89.4V48C32 39.2 39.2 32 48 32ZM464 352H48C39.2 352 32 344.8 32 336V131C54.8 149.7 90.8 178.6 162.7 235.7C183.2 252.1 219.4 288.2 256 288C292.4 288.3 328.3 252.5 349.3 235.7C421.2 178.6 457.2 149.7 480 131V336C480 344.8 472.8 352 464 352Z',
  ],
}

var faEnvelopeBg = {
  prefix: 'fal',
  iconName: 'envelope-bg',
  icon: [
    512,
    512,
    [],
    'e005',
    'M464 0H48C21.5 0 0 21.5 0 48V336C0 362.5 21.5 384 48 384H464C490.5 384 512 362.5 512 336V48C512 21.5 490.5 0 464 0Z',
  ],
}

library.add(faFacebook, faTwitter, faInstagram, faShoppingCart, faCashRegister, faUser, faEnvelope, faEnvelopeBg, faShoppingCartBg, faCashRegisterBg, faUserBg);
dom.watch();

