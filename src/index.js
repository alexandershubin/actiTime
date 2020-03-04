import "jquery";
import "owl.carousel2";
if (process.env.NODE_ENV === 'development') {
  require('./index.html')
}
import Menu from './modules/header/header';
import 'owl.carousel2/dist/assets/owl.carousel.css';
import 'owl.carousel2/dist/assets/owl.theme.default.css';
import './styles/style.scss';
import './assets/img/logo.svg'
import './modules/slider/slider'

new Menu();




