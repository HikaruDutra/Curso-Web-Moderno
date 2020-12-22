const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento
console.log(pilotos)
pilotos.push('Verstapen') // Adiciona ao último elemento
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)
pilotos.unshift('Hamilton') // Adiciona ao primeiro elemento
console.log(pilotos)

// Adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover elementos
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Pega o vetor a partir do índice 2
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4) /* Pega o vetor a partir do índice 1 até o 4,
                                             mas não mostra o elemento do índice 4 */
console.log(algunsPilotos2)