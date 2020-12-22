let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

// Exponenciacao
const ex = Math.pow(2, 3)
console.log(ex)

// A partir da versao ES7
const exp = 2 ** 3
console.log(exp)

let base = 2
base **= 3 // base = base ** 3
console.log(base)

// Agora e possivel usar expoentes negativos
const exp2 = 2 ** -3
console.log(exp2)