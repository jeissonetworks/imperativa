// En un parque de diversiones nos piden un programa para verificar si los pasajeros de la montaña rusa pueden subir al juego.

// Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, basado en las siguientes condiciones:
// Debe medir más o igual de 1,40m y menos de 2 metros.
// Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
// Si mide menos de 1,20m, no podrá subir ni acompañado.
// Modificar la función para impedir la subida al juego si la persona fue penalizada por no respetar las normas y reglas del juego.

function puedeSubir(altura, acompaniado = false, penalizado = false) {
    if (penalizado) {
        return false;
    }
    else if (altura >= 1.4 && altura < 2) {
        return true;
    } else if (altura >= 1.2 && altura < 1.4) {
        if (acompaniado) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(puedeSubir(1.5, true, true))


// Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
// Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."
// Importante: no se deberá mostrar ningún otro mensaje.
// Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.
// Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".

let edad = 23 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

if(edad < 0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.")
} else if (edad == 21){
  console.log("Bienvenido, y felicidades por ser mayor de edad.")
} else if (edad % 2 == 0){
  console.log("par")
}else{
    console.log("¿Sabías que tu edad es impar?")
}


// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y  litrosConsumidos. 
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
// Si el vehículo es “coche”, el precio por litro es de $86.
// Si es “moto”, ha de ser $70.
// Si es “autobús”, ha de ser $55.
// Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

function totalAPagar(vehiculo, litrosConsumidos) {
    total = 0;
    if (vehiculo === "coche") {
      total += 86;
    } else if (vehiculo === "moto") {
      total += 70;
    } else if (vehiculo === "autobús") {
      total += 55;
    }
    if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
      total += 50;
    } else if (litrosConsumidos > 25) {
      total += 25;
    }
  
    return total;
  }
  console.log(totalAPagar("moto", 25));




// Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros recibiremos los datos de la siguiente manera:
// Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base diferente por cada selección:
// Pollo = $150 (“pollo”)
// Carne = $200 (“carne”)
// Vegetariano (verduras asadas) = $100 (“veggie”)
// Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre otras tres opciones, por lo que recibiremos también otro string con el tipo de pan deseado:
// Blanco c/orégano y parmesano = $50 (“blanco”)
// Negro c/avena = $60 (“negro”)
// Sin gluten = $75 (“s/gluten”)
// Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes adicionales:
// Queso = $20
// Tomate = $15
// Lechuga = $10
// Cebolla = $15
// Mayonesa = $5
// Mostaza = $5
// Cada uno de estos adicionales están representados por booleanos —es decir, true o false—, dependiendo de si aceptan o no cada uno de los adicionales (nos llegan un total de seis valores booleanos, uno por cada adicional).
// Nuestro trabajo es crear una función que reciba estos ocho parámetros (un string para el sándwich base, uno para el pan y los seis booleanos de los adicionales). La función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el tipo de pan, y por último deberá verificar qué adicionales se seleccionaron. Finalmente, deberá retornar el valor numérico del total a pagar del cliente.
function calcularPrecio(
    sandwBase,
    pan,
    queso,
    tomate,
    lechuga,
    cebolla,
    mayonesa,
    mostaza
  ) {
    precio = 0;
  
    if (sandwBase === "pollo") {
      precio += 150;
    } else if (sandwBase === "carne") {
      precio += 200;
    } else if (sandwBase === "veggie") {
      precio += 100;
    }
  
    if (pan === "blanco") {
      precio += 50;
    } else if (pan === "negro") {
      precio += 60;
    } else if (pan === "s/gluten") {
      precio += 75;
    }
    if (queso) {
      precio += 20;
    }
  
    if (tomate) {
      precio += 15;
    }
  
    if (lechuga) {
      precio += 10;
    }
  
    if (cebolla) {
      precio += 15;
    }
  
    if (mayonesa) {
      precio += 5;
    }
  
    if (mostaza) {
      precio += 5;
    }
    return precio;
  }
  
  console.log(calcularPrecio("veggie", "s/gluten", false, false, false, false, false, false));
  
  /*  --------------------------------------------------------------
      ------------------------- EXTRAS -----------------------------
      --------------------------------------------------------------*/
  
//       ¿Cuál es el número secreto?
// Crea una función que reciba un parámetro numérico y verifique si el mismo es el número secreto. El número secreto deberá ser seleccionado de manera random de entre 1 y 10 (investiga que hace la función Math.random()). En caso de ser correcto, retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un mensaje de aliento junto con el número ingresado y el secreto.

  const randomNumberWinner = (number) => {
    let choice = Math.floor(Math.random() * (10 - 1)) + 1;
    if (choice === number) {
      return "Felicitaciones acertaste!";
    } else {
      return `No acertaste, suerte a la proxima, tu numero es ${number} y el ganador es ${choice}`;
    }
  };
  
  console.log(randomNumberWinner(5));
  
//   abrirParacaidas()
// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo siguiente:
// La velocidad debe ser menor a 1000 km/h.
// La altura debe ser mayor o igual a 2000 m y menor a 3000 m.

  
  
  const abrirParacaidas = (velocidad, altura) => {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
      return "Debe abrirse";
    } else {
      return "No debe abrirse";
    }
  };
  console.log(abrirParacaidas(1000, 2000));
  
//   Traductor condicional
// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés. 
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le informe que la palabra ingresada es incorrecta.

  
  let palabra = "casa";
  let traduccion;
  
  switch(palabra) {
      case "casa":
          traduccion = "house";
          break;
      
      case "perro":
          traduccion = "dog";
          break;
      
      case "pelota":
          traduccion = "ball";
          break;
      
      case "árbol":
          traduccion = "tree";
          break;
  
      case "genio":
          traduccion = "genius";
          break;
  }
  
  console.log(traduccion)
  
//   Valoración de películas
// Usando la estructura switch, pedile al usuario que valore la película que acaba de ver según la siguiente escala:
// Muy mala.
// Mala.
// Mediocre.
// Buena.
// Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentas o te alegras por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".
// Cuando el usuario haya valorado la película, agradecele su visita.



  let valoracion = "Muy Mala";
  let mensaje;
  
  switch(valoracion) {
      case "Muy Mala":
          mensaje = "Calificaste la película como Muy Mala. Lo lamentamos mucho.";
          break;
      
      case "Mala":
          mensaje = "Calificaste la película como Mala. Lo lamentamos mucho.";
          brack;
      
      case "Mediocre":
          mensaje = "Calificaste la película como Mediocre";
          break;
      
      case "Buena":
          mensaje = "Calificaste la película como Buena.";
          break;
      
      case "Muy Buena":
          mensaje = "Calificaste la película como Muy Buena.";
          break;
      
      default:
          mensaje = "Ingresaste un valor inválido";
  }
  
  console.log(mensaje);