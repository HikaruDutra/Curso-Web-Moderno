// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.
const nums = [1, 5, 8, 13, 17, 20, 35]

function intervalo() {
    let dentroDoIntervalo = 0
    let foraDoIntervalo = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] >= 10 && nums[i] <= 20) {
            dentroDoIntervalo += 1
        } else {
            foraDoIntervalo += 1
        }
    }
    return `Dentro do intervalo: ${dentroDoIntervalo}, Fora do intervalo: ${foraDoIntervalo}`
}

console.log(intervalo())