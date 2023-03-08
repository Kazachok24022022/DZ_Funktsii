function remover(arr) {
  let arrayNew = [];
  for(let i = 0; i < arr.length; i++){
      if(arrayNew.includes(arr[i]) == false){
          arrayNew.push(arr[i]);
      }
  }
  return arrayNew;
}
let arrayOld = [1, 2, 5, 4, 5, 1, 2, 3];
console.log(remover(arrayOld)); 