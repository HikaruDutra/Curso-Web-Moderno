const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
let bolsa = alunos.map(b => b.bolsista).reduce(function(acumulador, atual) {
   if(acumulador == true && atual == true) {
       return true
   } else {
       return false
   }

})

if(bolsa == true) {
    console.log('Todos são bolsistas')
} else {
    console.log('Nem todos são bolsistas')
}

// Desafio 2: Algum aluno é bolsista?
bolsa = alunos.map(b => b.bolsista).reduce(function(acumulador, atual) {
    if(acumulador == true || atual == true) {
        return true
    } else {
        return false
    }
})

if(bolsa == true) {
    console.log('Há um aluno bolsista')
} else {
    console.log('Não há aluno bolsista')
}