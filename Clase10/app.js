// Obtenemos un array de correos a los cuales deberemos realizar una serie de verificaciones para corroborar si son válidos, para ello en cada elemento debemos buscar el carácter @, por el momento, y agregarlos al array de correos admitidos, de lo contrario se deberá agregar al array de correos Descartados.
// Desarrollar una función que realice la verificación de cada elemento del array de correos pendientes, en caso de validar agregar al arrayCorreoAdmitidos, caso contrario agregar al arrayCorreoDescartados .
// mostrar por pantalla la cantidad y los elementos de cada array

let arrayCorreosPendientes = ['iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com','thanosdigitalhouse.com','thanos@digitalhouse.com'];
  /* array de correos admitidos */
  let arrayCorreosAdmitidos = ['thor@digitalhouse.com','tucuMan@digitalhouse.com','wanda@digitalhouse.com'];
  let arrayCorreosDescartados = [];
      
  function verificarCorreo(arraycorreo){
           //tu código  
           for (let step = 0; step < arraycorreo.length; step++) {
           if (arraycorreo[step].indexOf('@') !== -1) {
                arrayCorreosAdmitidos.push(arraycorreo[step]) 
           } else {
                arrayCorreosDescartados.push(arraycorreo[step]) 
           } 
        }
      }
    
      verificarCorreo(arrayCorreosPendientes)

      console.log("--- Array de correos admitidos: " + "longitud de array: " + arrayCorreosPendientes.length);
      console.log(arrayCorreosAdmitidos);
      console.log();
      console.log("---Array de correos Descartados:"+  "longitud de array: " + arrayCorreosDescartados.length);
      console.log(arrayCorreosDescartados);
      
