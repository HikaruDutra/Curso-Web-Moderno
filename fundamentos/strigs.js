const escola = "Cod3r" // índices: 0 1 2 3 4

console.log(escola.charAt(4)) // Retorna o valor no índice 4
console.log(escola.charAt(5)) // Retorna valor vazio(nulo)
console.log(escola.charCodeAt(3)) // Retorna o valor de 3 na tabela unicode
console.log(escola.indexOf('3')) // Retorna o índice onde o valor está armazenado

console.log(escola.substring(1)) // Retorna os valores a partir do índice 1 incluindo o seu valor
console.log(escola.substring(0, 3)) // Retorna os valores a partir do índice 0 até o 3 sem incluir o valor do índice 3

console.log('Escola '.concat(escola).concat("!")) // Faz concatenação
console.log('Escola '+ escola + "!") // Tbm faz concatenação
console.log(escola.replace(3, 'e')) // Altera o valor no índice pelo valor indicado entre as aspas 

console.log('Ana, Maria, Pedro'.split(',')) // Transforma a string em array