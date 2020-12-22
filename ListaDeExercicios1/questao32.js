//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
const vet = [2, 4, 6, 8]

function mediaAritm() {
    let soma = 0
    for (i = 0; i < vet.length; i++) {
        soma += vet[i]
    }

    let media = soma/vet.length
    return `média aritmética: ${media}`
}

console.log(mediaAritm())