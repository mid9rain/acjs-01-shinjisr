let {helloWorld} = require('../00_hello_world.js')

test('test hello world', () => {
  expect(helloWorld()).toEqual('Hello World.')
})
