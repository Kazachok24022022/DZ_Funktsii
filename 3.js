function cleanArray(arr) {
  return arr.filter(item => Boolean(item));
}

const dirty = [false,"Sereja", undefined, "", 0, null, 323];
const clean = cleanArray(dirty);
console.log(clean);