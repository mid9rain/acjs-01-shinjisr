// 可以看看測試什麼，但是不可以改這張檔案喔。
let {numbers, eachAddOne, onlyEven} = require('../04_loop.js')

test('numbers', () => {
  expect(numbers).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
})

test('eachAddOne', () => {
  expect(eachAddOne([1, 2, 4, 5, 8, 10])).toEqual([2, 3, 5, 6, 9, 11])
  expect(eachAddOne([2, 3, 4])).toEqual([3, 4, 5])
})

test('onlyEven', () => {
  expect(onlyEven([1, 2, 3, 4, 5, 8, 9, 10])).toEqual([2, 4, 8, 10])
  expect(onlyEven([1, 3, 5, 7, 9])).toEqual([])
})
