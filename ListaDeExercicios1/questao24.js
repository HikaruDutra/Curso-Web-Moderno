const repetirHelloWorld = mensagem => {
    let cont = 1
    while(cont <= 11) {
        console.log(`${cont}- ${mensagem}`)
        cont++
    }
}

repetirHelloWorld('Hello World!')