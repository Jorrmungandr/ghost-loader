const gel = el => document.querySelector(el);
const ghostBar = gel('.ghost-bar');
let ghostBarWidth = 0;

const bar = gel('.bar');
let barWidth = 0;
const maxWidth = gel('.bar-wrapper').clientWidth;

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32 && ghostBar.clientWidth < maxWidth) {
    ghostBarWidth = ghostBar.clientWidth + 10;
    if (ghostBarWidth >= maxWidth) ghostBarWidth = maxWidth;
    ghostBar.style.width = `${ghostBarWidth}px`;
  }
});

setInterval(() => {
  if (ghostBarWidth > 50) {
    if (barWidth >= maxWidth) {
      bar.style.transition = 'width .5s ease-in';
      bar.style.width = `${maxWidth}px`;
      return;
    }
    let factor = ((ghostBarWidth - barWidth) / maxWidth);

    if (factor < 0.000000001) factor = 0;

    barWidth += 120 * factor;

    if (ghostBarWidth >= maxWidth) barWidth = maxWidth;
    bar.style.width = `${barWidth}px`;
  }
}, 500);
