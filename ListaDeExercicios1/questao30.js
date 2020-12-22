// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
const nums = [15, 4, 23, 36, 0]

let menor
let maior

function maiorEMenor(nums) {

    for (let i = 0; i < nums.length; i++) {

        if (maior === undefined && menor === undefined) {
            maior = nums[i]
            menor = nums[i]
        } else {
            if (nums[i] < menor) {
                menor = nums[i]
            }
            if (nums[i] > maior) {
                maior = nums[i]
            }
        }
    }

    return `maior valor: ${maior}, menor valor: ${menor}`
}

console.log(maiorEMenor(nums))