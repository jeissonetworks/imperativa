//funcion sumar
function sumar(x, y){
    return x + y
}

//funcion restar
function restar(x, y){
    return x - y
}

//funcion multiplicar
function multiplicar(x, y){
    return x * y
}

//funcion dividir
function dividir(x, y){
    return x / y
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------")
//funcion sumar
console.log(sumar(5, 7));
//funcion restar
console.log(restar(5, 2));
//funcion multiplicar
console.log(multiplicar(5, 2));
//funcion dividir
console.log(dividir(20, 4));
console.log(dividir(20, 0));

//cuadrado de un numero
function cuadradoDeUnNumero(x){
    return multiplicar(x, x)
}
console.log(cuadradoDeUnNumero(2));

//promedio de tres numeros
function promedioDeTresNumeros(x, y, z){
    return dividir(sumar(sumar(x, y), z), 3)
}
console.log(promedioDeTresNumeros(1, 2, 3));

//calcular porcentaje
function calcularPorcentaje(x, y){
    return dividir(multiplicar(x, y), 100)
}
console.log(calcularPorcentaje(300, 15));

//generar porcentaje
function GeneradorDePorcentaje(x, y){
    return dividir(multiplicar(x, 100), y)
}
console.log(GeneradorDePorcentaje(2, 200));