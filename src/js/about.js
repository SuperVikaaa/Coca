import '../assets/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import {
  useHeroSlider,
  useTeamSlider,
} from './components/about/aboutSlider.js';

useTheme();
useScroll();
useBurger();
useHeroSlider();
useTeamSlider();
