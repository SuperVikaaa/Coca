import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import {
  usePartnersSlider,
  useInsightSlider,
  useTestimonialsSlider,
} from './components/slider.js';

useTheme();
useScroll();
useBurger();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
