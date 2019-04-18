// 可以看看測試什麼，但是不可以改這張檔案喔。
let {twoFer} = require('../01_two_fer.js')

test('Bob', () => {
  expect(twoFer('Bob')).toEqual('One for Bob, one for me')
})

test('No args', () => {
  expect(twoFer()).toEqual('One for you, one for me')
})
