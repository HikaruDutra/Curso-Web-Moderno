function valorPlanoDeSaude(idade) {
    let adicional
    if(idade >= 0 && idade < 10) {
        adicional = 80

    } else if(idade >= 10 && idade <= 30) {
        adicional = 50
        
    } else if(idade > 30 && idade <= 60) {
        adicional = 95

    } else if(idade > 60) {
        adicional = 130

    }

    return adicional + 100

}

console.log("Valor do plano de saúde: R$", valorPlanoDeSaude(9))
console.log("Valor do plano de saúde: R$", valorPlanoDeSaude(30))
console.log("Valor do plano de saúde: R$", valorPlanoDeSaude(45))
console.log("Valor do plano de saúde: R$", valorPlanoDeSaude(65))