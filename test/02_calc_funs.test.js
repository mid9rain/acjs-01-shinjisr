let {add, sub, mul, div} = require('../02_calc_funs.js')

test('test add', () => {
  expect(add(1, 3)).toEqual(4)
  expect(add(5, 3)).toEqual(8)
  expect(add(9, -10)).toEqual(-1)
})

test('test sub', () => {
  expect(sub(1, 3)).toEqual(-2)
  expect(sub(5, 2)).toEqual(3)
  expect(sub(9, 2)).toEqual(7)
})

test('test mul', () => {
  expect(mul(3, 20)).toEqual(60)
  expect(mul(5, 6)).toEqual(30)
  expect(mul(9, 10)).toEqual(90)
})

test('test div', () => {
  expect(div(10, 2)).toEqual(5)
  expect(div(6, 3)).toEqual(2)
  expect(div(9, 9)).toEqual(1)
})
