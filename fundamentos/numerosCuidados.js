console.log(7 / 0) // Gera um resultado infinito
console.log("10" / 2) // Mesmo sendo string, permite que seja feita a operação
console.log('3'+ 2) // Símbolo "+" tbm faz concatenação, nesse caso string tem prioridade
console.log('3'- 2) // Nesse caso, símbolo "-" só serve pra subtração, portanto realiza a operação
console.log("show!" / 2) // Gera um resultado não numérico(Not a Number)
console.log(0.7 + 0.1) // Gera um resultado não preciso por causa da especificação IEEE que prioriza desempenho
//console.log(10.toString()) // Gera um erro de sintaxe
console.log((10).toFixed(2)) // Diferente do anterior, não gera um erro de sintaxe