// 輸入會是一個數字的陣列，回傳一個新的陣列，保持原來的數字，除了以下幾種：
// 3 的倍數要換成 Fizz
// 5 的倍數要換成 Buzz
// 又是 3 又是 5 的倍數要換成 FizzBuzz

// 例如   [1, 2, 3, 4, 5]
// 會回傳 [1, 2, Fizz, 4, Buzz]

// 回傳陣列
// function fizzBuzz(input) {
  // let ans = []
  // for(let i = 0; i < input.length; i++) {
  //   if (input[i] % 15 === 0) {
  //     ans.push('FizzBuzz');
  //   } else if (input[i] % 5 === 0) {
  //     ans.push('Buzz');
  //   } else if (input[i] % 3 === 0) {
  //     ans.push('Fizz');
  //   } else {
  //     ans.push(input[i]);
  //   }
  // }
// }
  // 回傳字串
  function fizzBuzz(input) {
    let ans = [];
    for(let i = 1; i <= input; i++) {
      if (i % 15 === 0) {
        ans.push('FizzBuzz');
      } else if (i % 5 === 0) {
        ans.push('Buzz');
      } else if (i % 3 === 0) {
        ans.push('Fizz');
      } else {
        ans.push(i);
      }
    }
    // let ans = console.log(typeof(input));
    ansStr = ans.join(' ');
    return ansStr
  }
  
module.exports = {fizzBuzz};
