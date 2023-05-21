// Pre-Entrega2 de JavaScript.
// Almacen de Bebidas.

class Producto {
  constructor(id, nombre, precio) {
    (this.id = id), (this.nombre = nombre), (this.precio = precio);
  }
}

//Definiendo Productos de mi Stock.
const producto1 = new Producto(1, "Ron", 5000);
const producto2 = new Producto(2, "Tequila", 9000);
const producto3 = new Producto(3, "Cerveza", 500);
const producto4 = new Producto(4, "Whisky", 12000);
const producto5 = new Producto(5, "Vino", 2500);

//Definiendo mi Array que contiene todos los productos.
const BEBIDAS = [producto1, producto2, producto3, producto4, producto5];

const carritoUser = [];
let sumaTotal = 0;

//Pido nombre al usuario y muestro un mensaje con mi stock, para luego pedirle un ID para valorar y comparar.
const nombreUser = prompt("Hola dime tu nombre");

let mensajeProductos = `Bienvenido ${nombreUser} a Full Bebidas, mis productos Disponibles en la tienda son: \n\n Presiona un ID valido \n`;
BEBIDAS.forEach((bebida) => {
  mensajeProductos += `${bebida.id} - ${bebida.nombre} - $${bebida.precio} \n`;
});

mensajeProductos += `99. Para terminar tu compra.`;
let respuestaUser = parseInt(prompt(mensajeProductos));

//Utilizo un ciclo while para evaluar la respuesta del usuario.
while (respuestaUser != 99) {
  if (respuestaUser >= 6) {
    alert("Ingresaste un ID invalido.");
  } else {
    const idBebidaIgualARespuestaUser = (bebida) => {
      return bebida.id === respuestaUser;
    };

    const respCompra = BEBIDAS.find(idBebidaIgualARespuestaUser);
    carritoUser.push(respCompra);
  }
  respuestaUser = parseInt(prompt(mensajeProductos));
}

//En esta linea evalúo si el usuario realizo una compra, o no.
const carritoVacio = carritoUser.length === 0;
if (carritoVacio) {
  alert("Vuelve pronto!");
} else {
  carritoUser.forEach((bebida) => {
    sumaTotal += bebida.precio;
  });

  let mensajeFinal = `Gracias por tu compra ${nombreUser}, has llevado: \n`;
  carritoUser.forEach((bebida) => {
    mensajeFinal += `${bebida.nombre} - $${bebida.precio} \n`;
  });
  mensajeFinal += `Por un total de $${sumaTotal}`;
  alert(mensajeFinal);
}
