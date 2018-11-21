// export const a = 12;
// export const b = 20;
// export const c = function (a, b) {
//   return a + b;
// };

// let f = 20, d = 30, m = 40;

// export default {
//   f,d,m
// }
//default只允许有一个


export const a = 12;
export const b = 33;
export const f = function (min, max) {
  return min + max;
}

let c = 20;
var d = 25;
// export {c,d as kk};

export const g = 322;

export default {
  a,b,c,d
}

export const rdm = function (min, max) {
  return parseInt(Math.random() * (++max - min) + min);
}


