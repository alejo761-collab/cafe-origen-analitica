const ventas = require("./datos")

console.log(`La cantidad de registros es: ${ventas.length}`);
console.log("El primer registro y el ultimo son:", ventas[0],ventas[ventas.length - 1] );
console.log("El producto de la posisción numero cuatro es:",ventas[4].producto);
console.log("=====Tabla completa de ventas=====")
console.table(ventas)

