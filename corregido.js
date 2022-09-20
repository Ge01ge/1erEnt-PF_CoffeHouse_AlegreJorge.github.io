class Producto {
  constructor(nombre, precio, id, calidCantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.detalle = calidCantidad;
  }
}

const stock = [
  {
    nombre: "grano Liberico ",
    precio: 200,
    id: 1,
    calidCantidad: " (100gr) calidad Premium",
  },
  {
    nombre: "grano Robusto ",
    precio: 300,
    id: 2,
    calidCantidad: "(100gr) calidad Premium",
  },
  {
    nombre: "grano Arabico ",
    precio: 150,
    id: 3,
    calidCantidad: " (100gr) calidad Premium",
  },
];
stock.push(new Producto("NesCafe ", 700, 4, "500gr"));
stock.push(new Producto("3 Hermanos ", 800, 5, "500gr"));
stock.push(new Producto("Batidor de Cafe", 700, 6, "Unidad"));
stock.push(new Producto("set taza de cafe Blanca ", 1800, 7, "6 Unidades"));

// console.log(stock)

alert(
  "      Hola Bienvenido a Coffe House! \n  \n Aqui encontratas todos los insumos y accesorios que un amantes del cafe podria desear"
);

let listado = "Lista de productos \n";
stock.map((element) => {
  listado += `${element.id} - ${element.nombre}  $${element.precio} x ${element.calidCantidad} \n`;
});

alert(listado);

let carrito = [];

let option = prompt(`Desea comprar algo:
si
no
`);
// esta condición podría ir en una función
while (
  option != "si" &&
  option != "SI" &&
  option != "Si" &&
  option != "no" &&
  option != "No" &&
  option != "NO"
) {
  alert("por favor ingrese una opcion valida");
  option = prompt(`Desea comprar algo:
si
no
`);
}

if (option == "si") {
	// Esta función esta bien, aunque lo mejor sería crear objetos DetalleCarrito 
	// (te sugiero ver el código del after de Objetos y Arrays)
  // Esta declaración de la función debería estar fuera del if()
  function sendCarrito() {
    let productoId = Number(prompt("ID producto:"));
    let cantidad = Number(prompt("Cantidad:"));
    let producto = stock.find((product) => product.id === productoId);
    producto.cantidad = cantidad;
    producto.total = producto.precio * cantidad;
    carrito.push(producto);
  }

  // como haria para que se ejecute mientras el usuario quiera cargar cosas y corte cuando no quiera agregar mas
  sendCarrito();
  sendCarrito();
  sendCarrito();

  // alert(carrito) me daba salida [objet objet]
	// Aca no deberías mostrar el carrito de pecho, sino recorrerlo, y generar un string accediendo a cada uno de los datos.
  alert(`tu compra es la siguiente: ${JSON.stringify(carrito, null, 4)}`);

	// Esta función también debería estar fuera del if.
  function calcularTotal(carrito) {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.total;
    });
    return total;
  }

  alert(`El total es de: ${calcularTotal(carrito)}`);

  alert(
    `    En breve nos contactaremos contigo para definir el modo de pago... \n Gracias por comprar con nosotros `
  );
} else if (option == "no") {
  alert(" Gracias por visitarnos vuelva pronto...");
}

// TE DEJO AQUI COMO DEBERIA SER PARA QUE EL USUARIO ELIJA SI QUIERE SEGUIR COMPRANDO O NO:
// función para la condición:
function isValidYesNo(option) {
  return (
    option != "si" &&
    option != "SI" &&
    option != "Si" &&
    option != "no" &&
    option != "No" &&
    option != "NO"
  );
}
function isNo(option) {
  return option === "no" || option === "No" || option === "NO";
}
function isYes(option) {
  return option === "si" || option === "Si" || option === "SI";
}

// Se toma la primera opicón:
let option1 = prompt(`Desea comprar algo: si, no.`);
while (!isValidYesNo(option1)) {
  option1 = prompt(`Desea comprar algo: si, no.`);
}
// Mientras la opción siga siendo SI, se llama a la función que captura el producto, cuando no es Si, sale.
while (isYes(option1)) {
  sendCarrito();
  option1 = prompt(`Desea seguir comprando: si, no.`);
  while (!isValidYesNo(option1)) {
    option1 = prompt(`Ingrese una opción valida: si, no.`);
  }
}
