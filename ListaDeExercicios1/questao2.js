function classificarTriangulo(a, b, c) {
    if (a == b && b == c) {
        console.log('Triângulo equilátero')
    } else if (a == b || c == a || b == c) {
        console.log('Triângulo isósceles')
    } else {
        console.log('Triângulo escaleno')
    }
}

// Chamada da função
classificarTriangulo(2, 2, 2)
classificarTriangulo(2, 2, 5)
classificarTriangulo(3, 5, 7)