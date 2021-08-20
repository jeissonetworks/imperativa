//microdesafio 1
function test1(x, y){
    return y - x
}
console.log(test1(10, 40));


//microdesafio 2
function test2(x, y) {
    return x * 2
    console.log(x);
    return x / 2
}
console.log(test2(10));


//pulgadas a centimetros
function pulToCms(pulgadas){
    return pulgadas * 2.54
}
console.log(pulToCms(4));

//string a url
function stringToUrl(pal){
    return `https://www.${pal}.com`
}
console.log(stringToUrl("pepito"));


//frase con admiracion
function fraseAdmiracion(frase){
    return `¡${frase}!`
}
console.log(fraseAdmiracion("Hola Mundo"));


//calcular edad de perros
function edadPerros(edad){
    return edad * 7
}
console.log(edadPerros(4));


//calcular el valor de hora trabajo
function horaTrabajo(sueldo){
    return sueldo / 40
}
console.log(horaTrabajo(200));


//IMC personal
function calculadorIMC(altura, peso){
    return peso / (altura) **2
}
console.log(calculadorIMC(1.8, 65));


//Minusculas a mayusculas
function convertirMayusculas(minuscula){
    return minuscula.toUpperCase()
}
console.log(convertirMayusculas("hola mundo"));


//Tipo de dato
function tipoDato(x){
    return typeof(x)
}
console.log(tipoDato(false));


//Calcular circunferencia
function calculaCircunferencia(radio) {
    return 2 * Math.PI * radio;
  }
console.log(calculaCircunferencia(1));