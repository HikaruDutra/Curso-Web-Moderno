function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function soFaloSeForVerdade(valor) {
    if(valor) {
        console.log('é verdade... ' + valor)
    }
}

soFaloSeForVerdade()
soFaloSeForVerdade(null)
soFaloSeForVerdade(undefined)
soFaloSeForVerdade(NaN)
soFaloSeForVerdade('')
soFaloSeForVerdade(0)
soFaloSeForVerdade(' ')
soFaloSeForVerdade(-1)
soFaloSeForVerdade('?')
soFaloSeForVerdade([])
soFaloSeForVerdade([1, 2])
soFaloSeForVerdade({})