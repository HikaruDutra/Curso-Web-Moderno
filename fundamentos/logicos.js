function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2 // Operador OU
    const comprarTv50 = trab1 && trab2 // Operador E
    //const comprarTv32 = !!(trab1 ^ trab2) // Operador bitwise xor(OU exclusivo)
    const comprarTv32 = trab1 != trab2 // Outra maneira de usar OU exclusivo(xor)
    const manterSaudavel = !comprarSorvete // Operador Unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //Forma de criar objetos a partir da versao ES2015

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))