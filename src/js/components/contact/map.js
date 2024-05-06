export const useMap = () => {
const tooltip = document.querySelector('.hero__tooltip');
const continent = document.querySelector('.hero__pin');

continent.addEventListener('mousemove', function (e) {
  tooltip.innerText = this.dataset.title;
  tooltip.style.top = e.y + 'px';
  tooltip.style.left = e.x + 'px';
});

continent.addEventListener('mouseenter', function () {
  tooltip.style.display = 'block';
})

continent.addEventListener('mouseleave', function () {
  tooltip.style.display = 'none';
})
};