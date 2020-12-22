let aprovados = new Array('Bia', 'Carlos', 'Ana') // Array é um objeto; Cria um novo array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Forma mais utilizada para criar array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[2])
console.log(aprovados[1] === undefined)

aprovados = ['Ana', 'Carlos', 'Bia']
aprovados.splice(1,1,'Elemento1','Elemento2')
console.log(aprovados)