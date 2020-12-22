function mostrarCedulas(valor) {
    let cedula100 = 0
    let cedula50 = 0
    let cedula20 = 0
    let cedula10 = 0
    let cedula5 = 0
    let cedula1 = 0
    let contador = 0

    while(valor > 0) {
        if(valor >= 100) {
            cedula100 += 1
            valor -= 100
                       
        } else if(valor < 100 && valor >= 50) {
            cedula50 += 1
            valor -= 50
                        
        } else if(valor < 50 && valor >= 10) {
            cedula10 += 1
            valor -= 10
                        
        } else if(valor < 10 && valor >= 5) {
            cedula5 += 1
            valor -= 5

        } else if(valor < 5 && valor >= 1) {
            cedula1 += 1
            valor -= 1

        }
        contador = valor
    }

    if(cedula100 > 0) {
        console.log(`Cédulas de 100: ${cedula100}`)
    }

    if(cedula50 > 0) {
        console.log(`Cédulas de 50: ${cedula50}`)
    }
    
    if(cedula10 > 0) {
        console.log(`Cédulas de 10: ${cedula10}`)
    }

    if(cedula5 > 0) {
        console.log(`Cédulas de 5: ${cedula5}`)
    }

    if(cedula1 > 0) {
        console.log(`Cédulas de 1: ${cedula1}`)
    }
}

mostrarCedulas(18)