function teste1(num) {
    if(num > 7) // Em js quando n usar chaves no if, ele executa somente uma sentença, as outras são consideradas não pertencentes ao if
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // Cuidado com o ';', n usar com as estruturas de controle
        console.log(num)
    } // Estrutura sem filtro, sempre é executada
}

teste2(6)
teste2(8)