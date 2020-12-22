function divisao(dividendo, divisor) {
    /*const resultado = dividendo / divisor
    const resto = dividendo % divisor
    return `Resultado: ${resultado}, Resto: ${resto}`*/

    console.log("Resultado: " + Math.floor(dividendo / divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}

/* console.log(divisao(4, 2))
   console.log(divisao(5, 2))
   console.log(divisao(15, 3))
   console.log(divisao(18, 4)) */

divisao(4, 2)
divisao(5, 2)
divisao(15, 3)
divisao(18, 4)