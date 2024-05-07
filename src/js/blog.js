import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import {
  useHeroSlider,
  useArticlesSlider,
} from './components/blog/blogSlider.js';

useTheme();
useScroll();
useBurger();
useHeroSlider();
useArticlesSlider();
