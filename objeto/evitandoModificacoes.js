// Object.preventExtensions
/*previne que seja adicionado novos atributos, 
  mas permite modificar e excluir atributos existentes*/

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar'
delete produto.tag
console.log(produto)

// Object.seal
/* Previne adição e exclusão de novos atributos, mas permite
   a modificação de atributos ja existentes */

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes