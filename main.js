import frames from "./js/frames.js";

const sequence = document.querySelector("#sequence");
async function render(n) {
    const image = frames[n];
  if (!image || !image.src) return;
  sequence.src = image.src;
}

let index = 0;
function scrub(n = 0) {
  index += n;

  const q = n >= 0 ? 1 : -1;
  const m = Math.abs(index) % frames.length;
  const current = index < 0 ? frames.length - m : m;

  render(current);
}

function initialize() {
  sequence.classList.remove("hidden");
  render(0);
}

function handleMouse (e) {
  const { screenX } = e;
  const { innerWidth } = window;
  const ratio = screenX / window.innerWidth;

  const i = ratio - 0.5 > 0 ? 1 : -1;
  const frame = (ratio * 72) >> 0;
  render(frame);
}

function handleArrowKey(e) {
  const { keyCode } = e;
  switch (keyCode) {
    case 37:
    case 39:
      return scrub(keyCode - 38);
    default:
      break;
  }
}

window.addEventListener("message", initialize, false);
window.onmousemove = handleMouse;
window.onkeydown = handleArrowKey;
