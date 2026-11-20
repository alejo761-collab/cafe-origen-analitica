const ventas = require("./datos")
function valorVenta(venta){
    return venta.cantidad  * venta.precio

}
function totalVendido( ventas){
    let  total = 0
    for(const venta of ventas)
        total += valorVenta(venta)
    return total
}
function unidadesVendidas(ventas) {
    let unidades = 0
    for(const u of ventas)
        unidades += u.cantidad;
    return unidades

}
function ventaMayor(ventas){
    let mayor = null;

    for(const venta of ventas){
        if(mayor === null || valorVenta(venta) > valorVenta(mayor)){
            mayor = venta;
           
        }
    }
    return mayor


}
function ticketPromedio(ventas){
   
    let total = 0;
    for(const venta of ventas){
        if(ventas.cantidad > 0){
            total += totalVendido(ventas) / unidadesVendidas(ventas)
            return total
          
        }
    }
}

function ventasPorciudad(ventas,ciudad){
    let total = 0
    for(const venta of ventas){
        if(venta.ciudad.trim().toLowercase() === ciudad.trim(). toLowercase() ){
            total += valorVenta(venta);
        }
    }

    return total;
    
}