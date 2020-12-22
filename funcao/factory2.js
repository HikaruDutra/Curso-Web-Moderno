function criarProduto(nome, preco) {
    return {
        /*nome: `${nome}`,
        preco: `${preco}`,
        desconto: 0.1*/

        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('celular', 1000))
console.log(criarProduto('tv', 2500))