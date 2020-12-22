let pontuacaoPorJogo = "10, 15, 3, 7, 20"

function avaliacao(pontuacaoPorJogo) {
    let pontuacoes = pontuacaoPorJogo.split(",")
    let recorde = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            recorde++
        } else if(pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [recorde, piorJogo]
}

console.log(avaliacao(pontuacaoPorJogo))