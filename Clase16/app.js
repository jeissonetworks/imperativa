// En el archivo JS en el que tenemos requeridas nuestras funciones de lectura / escritura de archivos, crea el objeto literal concesionaria, luego agrega la propiedad autos, la cual deberá tener la lista de vehículos del archivo json (previamente parseada). Verifica que puedas visualizar esta propiedad correctamente.
const jsonHelper = require("./jsonHelper");


//   Al objeto concesionaria crea un método llamado agregarAuto el cual recibe como parámetros: una marca, un modelo, el año del vehículo, el precio, y la patente. El método deberá agregar el nuevo auto a la propiedad autos, y debemos guardar en nuestra base de datos (reescribir el JSON) la lista actualizada
//   PD: todos los vehículos nuevos tienen su propiedad vendido como false por defecto
const concesionaria = {
  vehiculos: jsonHelper.leerArchivo("AUTOS"),
  agregarAuto: function(marca, modelo, anio, precio, patente) {
    this.vehiculos.push(
        {
        "marca": marca,
        "modelo": modelo,
        "anio": anio,
        "precio": precio,
        "patente": patente,
        "vendido": false
        }
    )
    jsonHelper.escribirArchivo("AUTOS", this.vehiculos);
    return "Vehículo agregado correctamente"
  },

//   Por último crea el método venderAuto el cual deberá recibir una patente por parámetro, y tendrá que recorrer la lista de autos de concesionaria y cuando encuentre al auto indicado, deberá modificar su propiedad vendido a true. Luego actualizar nuestra base de datos con la lista actualizada como en el punto anterior.

  venderAuto : function(patente){
    let seleccionado = false
    for (let index = 0; index < this.vehiculos.length; index++) {
        if (patente === this.vehiculos[index].patente) {
            seleccionado = this.vehiculos[index]
            seleccionado.vendido = true
            jsonHelper.escribirArchivo("AUTOS", this.vehiculos);
        }
    }
    
    if (seleccionado) {
        return "El vehículo: "+ seleccionado.marca + " " + seleccionado.modelo + " ha sido vendido"
    }else{
        return "El vehículo no ha sido encontrado verifique la patente"
    }
  },
//   Crear un método llamado totalDeVentas que recorra la lista de autos y vaya sumando todos los precios de vehículos que hayan sido vendidos, y que retorne el precio total.

  totalDeVentas : function(){
      let totalVentas = 0
      for (let i = 0; i < this.vehiculos.length; i++) {
          if (this.vehiculos[i].vendido) {
              totalVentas += this.vehiculos[i].precio
          }
      }
      return totalVentas
  },
//   Crea un método llamado eliminarAuto el cual deberá recibir una patente por parámetro y eliminar el vehículo indicado. Investiga cómo podés hacer para poder eliminar un elemento en específico de un array. Luego deberás actualizar la base de datos siguiendo los pasos para actualizar la lista como en puntos anteriores.

  eliminarAuto : function(patente){
    for (let i = 0; i < this.vehiculos.length; i++) {
        if (patente === this.vehiculos[i].patente) {
            this.vehiculos.splice(i,1)
        }
    }
    jsonHelper.escribirArchivo("AUTOS", this.vehiculos);
  }
};

concesionaria.agregarAuto(1, 1, 1, 1, 1)
concesionaria.venderAuto(1)
console.log(concesionaria.vehiculos);
console.log(concesionaria.totalDeVentas());
concesionaria.eliminarAuto('JTH240')
console.log(concesionaria.vehiculos);