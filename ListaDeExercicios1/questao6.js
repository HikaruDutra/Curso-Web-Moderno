function montanteJurosSimples(capital, taxaDeJuros, tempo) {
    
    // Cálculo dos juros
    let juros = capital * taxaDeJuros * tempo

    // Cálculo do montante
    let montante = capital + juros

    // Imprimir valor do montante
    console.log(`Montante: ${montante}`)
}

function montanteJurosCompostos(capital, taxaDeJuros, tempo) {
        let montante = capital * (1 + taxaDeJuros) ** tempo
        console.log(`Montante: ${montante.toFixed(2).toString().replace('.', ',')}`)
}

montanteJurosSimples(100, 0.1, 3)
montanteJurosCompostos(100, 0.1, 3)