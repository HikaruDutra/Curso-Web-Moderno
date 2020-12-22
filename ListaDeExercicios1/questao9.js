function sistemaDeNotas(nota) {
    if (nota <= 100 && nota >= 40) {
        if (nota % 5 == 3) {
            nota = Math.ceil(nota + 2)
        } else if (nota % 5 == 4) {
            nota = Math.ceil(nota + 1)
        }
        console.log(`Nota: ${nota}, Aluno Aprovado!`)
    } else if (nota < 40) {
        if (nota >= 38) {
            nota = Math.ceil(40)
            console.log(`Nota: ${nota}, Aluno Aprovado!`)
        } else {
            console.log(`Nota: ${nota}, Aluno Reprovado!`)
        }
    }
}

sistemaDeNotas(44)
sistemaDeNotas(42)
sistemaDeNotas(70)
sistemaDeNotas(39)
sistemaDeNotas(38)
sistemaDeNotas(37)