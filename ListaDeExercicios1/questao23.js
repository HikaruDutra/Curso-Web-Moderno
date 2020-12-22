function avaliacaoDoAluno(cod, nota1, nota2, nota3) {
    let status
    for (let cont = cod; cont >= 0; cont--) {
        let mediaDoAluno = (nota1*3 + nota2*3 + nota3*4) / 10
        if (mediaDoAluno >= 5) {
            status = 'Aprovado'
        } else {
            status = 'Reprovado'
        }
        console.log(`Código: ${cod}, Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3},
                    Média: ${mediaDoAluno}, Situação: ${status}`) 
    }
}

avaliacaoDoAluno(3, 7.0, 6.5, 8.5)