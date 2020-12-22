function exibirDia(dia) {
    switch(dia) {
        case 1: case 7:
            if(dia == 1) {
                console.log('Domingo. Fim de semana.')
            } else {
                console.log('Sábado. Fim de semana.')
            }
            break
        case 2: case 3: case 4: case 5: case 6:
            if(dia == 2) {
                console.log('Segunda-feira. Dia útil.')
            } else if(dia == 3) {
                console.log('Terça-feira. Dia útil.')
            } else if(dia == 4) {
                console.log('Quarta-feira. Dia útil.')
            } else if(dia == 5) {
                console.log('Quinta-feira. Dia útil.')
            } else {
                console.log('Sexta-feira. Dia útil.')
            }
            break
        default:
            console.log('Dia inválido.')
            break
    }
}

exibirDia(1)
exibirDia(4)
exibirDia(6)
exibirDia(7)
exibirDia(8)