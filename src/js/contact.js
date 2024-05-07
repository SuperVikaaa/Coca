import '/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { useMap } from './components/contact/map.js';
import { usePartnersSlider } from './components/slider.js';
import { usePhone } from './components/contact/phone.js';

useTheme();
useScroll();
useBurger();
useMap();
usePartnersSlider();
usePhone();
