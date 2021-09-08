//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  
  // Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una propiedad llamada “clientes”, que estará compuesta de la lista de objetos obtenidos en el punto anterior.
  
  const banco = {
    clientes: arrayCuentas,
    //Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.
    
    consultarCliente: function (titular) {
      let mensajeError =
        "No se encontraron coincidencias, por favor verifique los datos ingresados";
      let clienteEncontrado;
      for (let i = 0; i < this.clientes.length; i++) {
        let cliente = this.clientes[i];
        if (titular === cliente.titularCuenta) {
          clienteEncontrado = cliente;
        }
      }
      return clienteEncontrado ? clienteEncontrado : mensajeError;
    },
  
    //Punto 4
    deposito: function (titular, cantDinero){
      let cliente = this.consultarCliente(titular)
  
      cliente.saldoEnPesos = cliente.saldoEnPesos + cantDinero
      console.log("Depósito realizado, su nuevo saldo es: " + cliente.saldoEnPesos)
    },
  
    // Punto 5
    extraccion: function (titular, montoExtraer){
      let cliente = this.consultarCliente(titular)
  
      cliente.saldoEnPesos = cliente.saldoEnPesos - montoExtraer
  
      if (cliente.saldoEnPesos < 0) {
        console.log("Fondos insuficientes")
      } else {
        console.log("Extracción realizada correctamente, su nuevo saldo es: " + cliente.saldoEnPesos)
      } 
    },
  };
  
  
  let clienteEncontrado = banco.consultarCliente("Ansel Ardley");
  let clienteEncontrado2 = banco.consultarCliente("leandro");
  console.log(clienteEncontrado);
  console.log(clienteEncontrado2); 
  
  banco.deposito("Ansel Ardley", 1000)
  banco.extraccion("Ansel Ardley", 40000)