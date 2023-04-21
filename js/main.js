let box = document.querySelector(`.boxprincipal`);

function mostrarProducto() {
    let productosLS = cargarProductosLStorage();

    productosLS.forEach((producto) => {
        box.innerHTML += ` <div class="col-md-4 mt-2 ">
            <div class="card d-flex align-items-center" style="width: 18rem; " ">
                <img src="${"../img/" + producto.imagen}" height="200rem" width="90%"  alt="${producto.marca} ${producto.modelo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.marca}</h5>
                    <p class="card-text">${producto.modelo} </p>
                    <p class="card-text">Cantidad de canales: ${producto.canales} </p>
                    <p class="card-text">Precio $ ${producto.precio} </p>
                    <a href="#" class="btn btn-primary" onclick="agregarCarrito(${producto.codigo})" > Agregar al carrito</a>
                </div>
            </div>
        </div>
        `
    })
}

function aviso() {
    Toastify({
        text: "Se agrego el producto al carrito",
        duration: 2000,
        close: true,
        gravity: "bottom",
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "lightgreen",
            color: "black",
        },
        onClick: function () {} // Callback after click
    }).showToast();
};

mostrarCantidadCarrito();
mostrarProducto();