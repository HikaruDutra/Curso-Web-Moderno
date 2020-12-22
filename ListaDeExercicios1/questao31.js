//Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.
const vet = [3, 7, 25, 2, 9, -1, -3]

function qtdNegativos() {
    let negativos = 0

    for (i = 0; i < vet.length; i++) {
        if (vet[i] < 0) {
            negativos += 1
        }
    }

    return `Qtd de negativos: ${negativos}`
}

console.log(qtdNegativos())