// javascript possui três tipos de variáveis: var, let e const
// var pode ser declarada mais de uma vez no mesmo escopo
// uma variável let só pode ser declarada uma vez
// const é uma variável constante onde o valor não será mudado durante o programa

var a = 3
let b = 4
console.log(a, b)

/* código gerou um erro pois tentei declarar outro let
 *
 * var a = 30
 * let b = 40
 * console.log(a, b)*/

 // aqui o código funcionou
 var a = 30
 b = 40
 console.log(a, b)

 const c = 5
 /* c = 50 aqui gerou um erro pois tentei mudar uma constante */
 console.log(c)