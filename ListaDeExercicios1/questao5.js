function moeda(valor) {
    console.log('R$' + valor.toFixed(2).toString().replace(".",","))
}

moeda(0.1 + 0.2)