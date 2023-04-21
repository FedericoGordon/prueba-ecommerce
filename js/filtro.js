let boxFiltros = document.querySelector(`.boxfiltros`);



function canalesMinimo() {
    let canalesMinimos = document.getElementById("minimocanalesimput").value;
    const productosLS = cargarProductosLStorage();
    const productosFiltrados = productosLS.filter(producto => producto.canales >= canalesMinimos);
    console.log(productosFiltrados);
    box.innerHTML =``;
    productosFiltrados.forEach((producto) => {
        box.innerHTML +=` <div class="col-md-4 mt-2 ">
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

function mostrarPregCanalesMinimos(){
    boxFiltros.innerHTML =` 
        <div class="p-2" >
            <label for="pregunta" class="form-label">Cantidad minima de canales que necesita</label>
        </div>
        <div class="p-2" >
            <input id="minimocanalesimput" class="form-control" type="text" placeholder="Nº de canales">
        </div>
        <div class="p-2" >
            <button type="submit" onclick= "canalesMinimo();" class="btn btn-outline-success">Filtrar</button>
        </div>

    `;
    
    return "10";
}


mostrarPregCanalesMinimos();


