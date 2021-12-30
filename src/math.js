const pi = 3.14;

function doublePi() {
  return pi * 2;
}

function tripplePi() {
  return pi * 3;
}

export default pi;

// multiple exports
export { doublePi, tripplePi };
