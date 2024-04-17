export const useScroll = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;
  const headerHero = hero.offsetHeight;
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > lastScrollTop) {
      header.classList.remove('header--fixed');
      hero.style.marginTop = null;
    } else {
      header.classList.add('header--fixed');
      hero.style.marginTop = `${headerHeight}px`;
    }

    lastScrollTop = scrollDistance;
  });
};
