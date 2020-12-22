//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function parOuImpar() {
    let par = 0
    let impar = 0
    for(i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0) {
            par += 1
        } else {
            impar += 1
        }
    }
    return `Qtd de pares: ${par} Qtd de ímpares: ${impar}`
}

console.log(parOuImpar())