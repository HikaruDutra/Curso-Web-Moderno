// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e) {//Só é necessário usar param se utilizar algum atrib do evento
    console.log('O evento ocorreu!')
}