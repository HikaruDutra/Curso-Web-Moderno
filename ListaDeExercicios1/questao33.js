const vetorInteiro = [1, 2, -2, -1]
const vetorString = ['Arthur', 'Maria', 'Livia', 'Pedro']
const vetorDouble = [2.5, 3.3, 4.1, 5.2]

const resultado1 = vetorInteiro.concat(vetorString, vetorDouble)
console.log(resultado1)

const resultado2 = [].concat(vetorInteiro, vetorString, vetorDouble)
console.log(resultado2)