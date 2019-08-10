const gel = el => document.querySelector(el);
const ghostBar = gel('.ghost-bar');
let ghostBarWidth = 0;

const bar = gel('.bar');
let barWidth = 0;

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32 && ghostBar.clientWidth < gel('.bar-wrapper').clientWidth) {
    ghostBarWidth = ghostBar.clientWidth + 10;
    ghostBar.style.width = `${ghostBarWidth}px`;
  }
});

setInterval(() => {
  if (ghostBarWidth > 50) {
    let factor = ((ghostBarWidth - barWidth) / gel('.bar-wrapper').clientWidth);
    barWidth += 120 * factor;
    bar.style.width = `${barWidth}px`;
  }
}, 300);
