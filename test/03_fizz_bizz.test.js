// let {fizzBuzz} = require('../03_fizz_bizz.js')

// test('1 to 5', () => {
//   expect(fizzBuzz(5)).toEqual('1 2 Fizz 3 4 Buzz')
// })

// test('1 to 200', () => {
//   expect(fizzBuzz(200)).toEqual(
//     '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz 101 Fizz 103 104 FizzBuzz 106 107 Fizz 109 Buzz Fizz 112 113 Fizz Buzz 116 Fizz 118 119 FizzBuzz 121 122 Fizz 124 Buzz Fizz 127 128 Fizz Buzz 131 Fizz 133 134 FizzBuzz 136 137 Fizz 139 Buzz Fizz 142 143 Fizz Buzz 146 Fizz 148 149 FizzBuzz 151 152 Fizz 154 Buzz Fizz 157 158 Fizz Buzz 161 Fizz 163 164 FizzBuzz 166 167 Fizz 169 Buzz Fizz 172 173 Fizz Buzz 176 Fizz 178 179 FizzBuzz 181 182 Fizz 184 Buzz Fizz 187 188 Fizz Buzz 191 Fizz 193 194 FizzBuzz 196 197 Fizz 199 Buzz')
// })

let {fizzBuzz} = require('../03_fizz_bizz.js')

test('1 to 5', () => {
  expect(fizzBuzz(5)).toEqual('1 2 Fizz 4 Buzz')
})

test('1 to 200', () => {
  expect(fizzBuzz(200)).toEqual(
    '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz 101 Fizz 103 104 FizzBuzz 106 107 Fizz 109 Buzz Fizz 112 113 Fizz Buzz 116 Fizz 118 119 FizzBuzz 121 122 Fizz 124 Buzz Fizz 127 128 Fizz Buzz 131 Fizz 133 134 FizzBuzz 136 137 Fizz 139 Buzz Fizz 142 143 Fizz Buzz 146 Fizz 148 149 FizzBuzz 151 152 Fizz 154 Buzz Fizz 157 158 Fizz Buzz 161 Fizz 163 164 FizzBuzz 166 167 Fizz 169 Buzz Fizz 172 173 Fizz Buzz 176 Fizz 178 179 FizzBuzz 181 182 Fizz 184 Buzz Fizz 187 188 Fizz Buzz 191 Fizz 193 194 FizzBuzz 196 197 Fizz 199 Buzz')
})