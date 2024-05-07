import '/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useScroll } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';

useTheme();
useScroll();
useBurger();
usePriceSwitcher();
