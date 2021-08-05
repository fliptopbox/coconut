let loaded = 0;
const frames = [...Array(72)].map(path).map(load);

function done(src) {
  loaded += 1;
  // console.log("[%s] loaded [%s]", loaded, src);
  window.postMessage({ progress: loaded / frames.length });
  if (loaded >= frames.length) window.postMessage({ finished: true });
}

function load(src) {
  const img = new Image();
  img.onload = () => done(src);
  img.src = src;
  return img;
}

function path(_, i) {
  return `/images/frames/${String(1000 + i + 1).slice(-3)}.jpg`;
}

export default frames;
