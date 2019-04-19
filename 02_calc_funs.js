// 這個函式會回傳兩個數字相加
function add(a, b) {
  let ans = '';
  ans = a + b;
  return ans;
}

// 這個函式會回傳兩個數字相減
// 注意參數的部份是不是有少什麼，補上需要的東西
function sub(a, b) {
  // 把你的解答寫在這裡。要記得 return 喔。
  let ans = '';
  ans = a - b;
  return ans;
}

// 實作 mul 及 div 兩個函式

function mul(a, b) {
  let ans ='';
  ans = a * b;
  return ans;
}

function div(a, b) {
  let ans = '';
  ans = a / b;
  return ans;
}

module.exports = {add, sub, mul, div};
