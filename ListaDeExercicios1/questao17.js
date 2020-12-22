function aumentoDeSalario(plano, salario) {
    switch(plano) {
        case 'a':
            console.log((salario * 0.1) + salario)
            break
        case 'b':
            console.log((salario * 0.15) + salario)
            break
        case 'c':
            console.log((salario * 0.2) + salario)
            break
        default:
            console.log('Plano Inválido!')
    }
}

aumentoDeSalario('a', 1000)
aumentoDeSalario('b', 1000)
aumentoDeSalario('c', 1000)
aumentoDeSalario('d', 1000)