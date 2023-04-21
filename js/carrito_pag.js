function mostrarCarrito() {
    let carritoLS = cargarCarritoLS(); 

    (cantidadCarrito() >0) ?
        carritoLS.forEach((producto) => {
            (document.getElementById("prodCarrito")).innerHTML +=` <table class="table align-middle">
            <tr>
                <td><img src="${"../img/" + producto.imagen}" width="20%" alt="$(producto.modelo)"  ></td>
                <td>${producto.marca}</td>
                <td>${producto.modelo}</td>
                <td>$ ${producto.precio}</td>
                <td> <button type="button" onclick= "eliminarProducto(${producto.codigo});" class="btn btn-outline-warning">Eliminar producto</
            </tr>
            `
        mostrarBotonVaciar(); 
        }): (document.getElementById("prodCarrito")).innerHTML =`
        <div class="d-grid gap-2">
            <button class="btn btn-danger" type="button">No se encontraron productos cargados en el carrito</button>
        </div>`
}

function totalCompra(){
    let carrito = cargarCarritoLS();
    const total = carrito.reduce((acc,ite)=> acc + ite.precio, 0);
    return total;
}

function mostrarTotalCompra(){
    const total = totalCompra();

    (cantidadCarrito() >0) ?
            (document.getElementById("totalCompra")).innerHTML =` <table class="table">
            <tr>
                <td>Cantidad de productos: ${cantidadCarrito()} </td>
                <td>TOTAL $ ${total} Ars</td>
            </tr>`
            :(document.getElementById("totalCompra")).innerHTML =``
}


mostrarCantidadCarrito();
mostrarCarrito();
mostrarTotalCompra();
totalCompra();