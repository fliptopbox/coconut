const frames = [...Array(72)].map(path).map(load);

let loaded = 0;
async function loading() {
  loaded += 1;

  window.postMessage({ progress: loaded / frames.length });
  if (loaded >= frames.length) window.postMessage({ finished: true });
}

function load(src) {
  const img = new Image();
  img.onload = loading;
  img.src = src;
  return img;
}

function path(_, i) {
  return `/images/frames/${String(1000 + i + 1).slice(-3)}.jpg`;
}

const sequence = document.querySelector("#sequence");
async function render(n) {
  const image = frames[n];
  if (!image || !image.src) return;
  sequence.src = image.src;
}

let index = 0;
function scrub(n = 0) {
  index += n;

  const m = Math.abs(index) % frames.length;
  const current = index < 0 ? frames.length - m : m;

  render(current);
}

const $progress = document.querySelector(".progress");
function initialize(e) {
  const { data } = e;
  const { progress = null } = data;

  if (progress && typeof progress === "number") {
    $progress.style.width = progress * 100 + "%";
  }

  if (progress && progress < 1) return;

  setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
    sequence.classList.remove("hidden");
    render(0);
  }, 150);
}

function handleMouse(e) {
  const { screenX } = e;
  const { innerWidth } = window;
  const ratio = screenX / innerWidth;
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
