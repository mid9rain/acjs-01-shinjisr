// 定義一個變數叫 numbers，是 5 ~ 15 的奇數陣列


let numbers = [5,  7,  9,  11,  13,  15]
// function numbers(arr){
//   let oddArray = [];
//   for(let i =0; i < oddArray.length; i++){
//     if(arr[i] % 2 == 1){
//       oddArray.push(arr[i]);
//       }
//   }
//   return oddArray
// }

// 這個函式接收一個陣列，回傳一個將原陣列中每個數字加 1 的陣列
function eachAddOne(list) {
  // write your code here
  let ans = []
  for(let e in list){
    ans.push(list[e] + 1);
  }
  return ans
}

// 這個函式接收一個陣列，回傳一個只包含原陣列中偶數部份的陣列
function onlyEven(list) {
  let ans = []
  for(let e in list){
    if(list[e] % 2 === 0){
    // ans.splice(e, 1);
    ans.push(list[e]);
    }
  }
  return ans
}

module.exports = {numbers, eachAddOne, onlyEven}
