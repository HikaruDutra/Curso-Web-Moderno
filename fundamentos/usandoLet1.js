var numero = 1 // Também é possível usar let aqui que uma variável não interfere na outra
{
    let numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)
// let possui 3 escopos: global, de função e de bloco