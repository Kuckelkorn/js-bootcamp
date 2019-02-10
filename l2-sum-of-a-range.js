let getallen = [];

function range(start, end, step) {
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      getallen.push(i);
    }
  } else if (start > end) {
    for (let i = start; i >= end; i += step) {
      getallen.push(i);
    }
  }
  return getallen;
}

function sum(func) {
  func;
  let som = 0;
  for (let i = 0; i < getallen.length; i++) {
    som = som + getallen[i];
  }
  return som;
}

console.log(sum(range(1, 10, 1)));