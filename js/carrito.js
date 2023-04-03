function guardarCarritoLS(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function cargarCarritoLS(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function buscarProducto(codigo){
    const productos = cargarProductosLStorage();
    return productos.find(element => element.codigo === codigo)
}

function agregarCarrito(codigo){
    const carrito = cargarCarritoLS();
    const producto = buscarProducto(codigo);
    carrito.push(producto);
    console.log(carrito);
    guardarCarritoLS(carrito);
    mostrarCantidadCarrito();
}

function cantidadCarrito(){
    const productos = cargarCarritoLS();
    return productos.length;
}

function mostrarCantidadCarrito(){
    document.getElementById("carrito").innerText = cantidadCarrito();
}

function vaciarCarrito(){
    localStorage.removeItem("carrito");
    mostrarCantidadCarrito();
    mostrarCarrito();
    mostrarBotonVaciar();
    mostrarTotalCompra();
    }

function resetCarrito(){
    (document.getElementById("prodCarrito")).innerHTML =``
}

function eliminarProducto(codigo){
    let carrito = cargarCarritoLS();
    localStorage.removeItem("carrito");
    const productos = carrito.filter(producto => producto.codigo !== codigo)
    guardarCarritoLS(productos);
    mostrarCantidadCarrito();
    mostrarBotonVaciar();
    mostrarTotalCompra();
    resetCarrito();
    mostrarCarrito();

}

//agregue el if para borrar el boton vaciar carrito cuando ya apretamos una vez por lo tanto el carro ya esta vacio
function mostrarBotonVaciar(){    
    (cantidadCarrito() !== 0) ?
    document.getElementById("remove").innerHTML = `
        <button type="button" onclick= "vaciarCarrito();" class="btn btn-outline-danger">Vaciar carrito</button>
    `: document.getElementById("remove").innerHTML =``;
}



