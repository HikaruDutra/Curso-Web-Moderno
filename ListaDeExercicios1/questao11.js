function calcBissexto(ano) {
    if (ano <= 0) {
        console.log('Ano Bissexto: ', false)
    } else if (ano % 400 == 0) {
        console.log('Ano Bissexto: ', true)
    } else if (ano % 100 == 0) {
        console.log('Ano Bissexto: ', false)
    } else if ( ano % 4 == 0) {
        console.log('Ano Bissexto: ', true)
    } else {
        console.log('Ano Bissexto: ', false)
    }
}

calcBissexto(800)
calcBissexto(300)
calcBissexto(396)
calcBissexto(155)
calcBissexto(-120)