//EN ESTE ALGORITMO INGRESAMOS EL PRECIO Y EL IVA, Y REGRESAMOS EL PRECIO CON IVA.
// SI NO INGRESAMOS EL IVA, SE APLICA POR DEFECTO EL 19% (IVA EN COLOMBIA)
// CON EL FIN DE CALCULAR EL IVA DE LOS DIAS CUANDO HAY REBAJA EN COLOMBIA

function precioMasIva(precio, iva){

iva = iva || 19

let precioConIva = (precio) + (precio*iva/100);

return precioConIva;

    }
    let precio = Number(prompt("Introduce el precio del producto :"));

    let iva = Number(prompt("Introduce el iva % :"));

    if(iva > 0){  
      var precioFinal = precioMasIva(precio, iva);
    }

    else{
      var precioFinal = precioMasIva(precio);
    }

    document.write("<h1>Precio sin iva: </h1>" + precio + " $ ");
    document.write("<h1>Precio más Iva: </h1>" + precioFinal + " $ ");
