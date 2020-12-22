/*const sequencia = {
    _valor: 1, // Convenção em js para dizer que o atributo é privado
    get valor() { return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)*/

const sequencia = {
    _valor: 1,
    getValor() {
        return this._valor++    
    },
    setValor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.getValor(), sequencia.getValor())
sequencia.setValor(1000)
console.log(sequencia.getValor(), sequencia.getValor())