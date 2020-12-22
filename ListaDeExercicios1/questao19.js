function lanche(codigo, quantidade) {
    switch(codigo) {
        case 100:
            valor = quantidade * 3.00
            console.log(`Valor a ser pago: R$ ${valor.toFixed(2).toString().replace('.',',')}`)
            break
        case 200:
            valor = quantidade * 4.00
            console.log(`Valor a ser pago: R$ ${valor.toFixed(2).toString().replace('.',',')}`)
            break
        case 300:
            valor = quantidade * 5.50
            console.log(`Valor a ser pago: R$ ${valor.toFixed(2).toString().replace('.',',')}`)
            break
        case 400:
            valor = quantidade * 7.50
            console.log(`Valor a ser pago: R$ ${valor.toFixed(2).toString().replace('.',',')}`)
            break
        case 500:
            valor = quantidade * 3.50
            console.log(`Valor a ser pago: R$ ${valor.toFixed(2).toString().replace('.',',')}`)
            break
        case 600:
            valor = quantidade * 2.80
            console.log(`Valor a ser pago: R$ ${valor.toFixed(2).toString().replace('.',',')}`)
            break
        default:
            console.log('Produto não existente.')
    }
}

lanche(100, 2)
lanche(200, 1)
lanche(300, 3)
lanche(400, 4)
lanche(500, 1)
lanche(600, 2)
lanche(700, 1)