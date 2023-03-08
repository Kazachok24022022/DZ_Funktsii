function isNumberInRange(num) {
  return num > 0 && num < 10;
}

function filterNumbers(arr) {
  let filteredArray = arr.filter(isNumberInRange);
  return arr.length === filteredArray.length;
}

let array1 = [-2, 5, 1, 12, 0];

let newArray1 = array1.filter(isNumberInRange);

console.log(newArray1); 

console.log(filterNumbers(array1)); 
