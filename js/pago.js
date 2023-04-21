let datopago = document.querySelector(`.datopago`);
let intereses = document.querySelector(`.intereses`);
function datosPagoTarjeta() {
    intereses.innerHTML = ``;
    datopago.innerHTML = `
    <div class="row justify-content-center">
    <div class="col-6">
    <label for="nameimput" class="form-label">Nombre</label>
    <input id="nameimput" class="form-control" type="text" placeholder="Ej: Pablo">
    </div>

    <div class="col-6">
    <label for="snameimput" class="form-label">Apellido</label>
    <input id="snameimput" class="form-control" type="text" placeholder="Ej: Garcia">
</div>

<div class="col-6">
    <label for="emailimput" class="form-label">Correo</label>
    <input id="emailimput" class="form-control" type="text" placeholder="Ingresa tu correo">
</div>

<div class="col-6">
    <label for="telimput" class="form-label">Telefono</label>
    <input id="telimput" class="form-control" type="text" placeholder="Ingresa tu telefono o celular">
</div>

<div class="col-5">
    <label for="direcimput" class="form-label">Direccion</label>
    <input id="direcimput" class="form-control" type="text" placeholder="Ingresa tu direccion">
</div>

<div class="col-3">
    <label for="cityimput" class="form-label">Ciudad</label>
    <input id="cityimput" class="form-control" type="text" placeholder="Ingresa tu Ciudad">
</div>

<div class="col-4">
    <label for="countryimput" class="form-label">Provincia</label>
    <input id="countryimput" class="form-control" type="text" placeholder="Ingresa tu Provincia">
</div>

<div class="col-8">
    <label for="tarjetaimput" class="form-label">Numero de tarjeta</label>
    <input id="tarjetaimput" class="form-control" type="text" placeholder="Ingresa los 16 digitos de tu tarjeta">
</div>

<div class="col-3">
    <label for="codimput" class="form-label">Codigo de seguridad</label>
    <input id="codimput" class="form-control" type="text" placeholder="Ingresa los 3 numeros ">
</div>

<div class="col-6">
<label for="nombretarjimput" class="form-label">Nombre que figura en la tarjeta</label>
<input id="nombretarjimput" class="form-control" type="text" placeholder="Ingresa el nombre como figura en la tarjeta">
</div>

<div class="col-6">
    <label for="dniimput" class="form-label">Documento </label>
    <input id="dniimput" class="form-control" type="text" placeholder="Ingresa tu dni sin . o -">
</div>

<button type="button" onclick="comprobarPago()" class=" col-4 btn btn-warning mt-4">Confirmar compra?? </button>
</div> 
    `;
};

function datosPagoTran(){
    intereses.innerHTML = ``;
    datopago.innerHTML =`
    <div class="col-12">
    El total de su compra es de $  ${totalCompra()} , cuando confirme la operacion le llegara un correo con todos nuestros datos para realizar el pago (No olvide enviar el comprobante de pago para confirmar el pago)
    </div>
    <button type="button" onclick="comprobarPago()" class=" col-4 btn btn-warning mt-4">Confirmar compra?? </button>
    `
};

function mostrarIntereses(){
fetch(`../js/intereses.json`)
.then ((respuesta) => respuesta.json() )
.then((monedas) => {
    let salida = "";
    monedas.forEach(item => {
        salida += `Comprando en ${item.cantidad} el interes es de %
        ${item.interes}
        `
    });
    console.log(monedas);
    document.querySelector(`.intereses`).innerHTML = salida;
})
    datopago.innerHTML = ``;
}

function mostrarBotonIntereses(){
    if (cantidadCarrito() !=0){
        document.getElementById("intereses").innerHTML= `<button type="button" onclick="mostrarIntereses()" class="btn btn-outline-info  ">Ver los % de intereses</button>`
    }
}
mostrarBotonIntereses();

function mostrarBotonPagar(){
    if (cantidadCarrito() ===0) {
    document.getElementById("botonpagar").innerHTML =``
    
}else
    {document.getElementById("botonpagar").innerHTML=`
                <p>
                    <button class="btn btn-success" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Pagar
                    </button>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        Puedes realizar el pago mediante transfencia bancaria  o con tarjeta de debito/credito
                    </div>
                    <button type="button" onclick="datosPagoTran()" class="btn btn-success ">Pagar mediante transferencia</button>
                    <button type="button" onclick="datosPagoTarjeta()" class="btn btn-success ">Pagar con tarjeta</button>
    `

}
}
mostrarBotonPagar();

function comprobarPago(){
    (document.getElementById("spinner")).innerHTML = `
        <div class="d-flex justify-content-center mt-4">
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        </div>
    `
    setTimeout(() => {
        (document.getElementById("spinner")).innerHTML = ``
        document.getElementById("botonpagar").innerHTML =``
        datopago.innerHTML = ``
        vaciarCarrito()
        Swal.fire({
            icon: 'success',
            title: 'Pago confirmado',
            text: 'Muchisimas gracias por su compra!',
            position: 'top-end',
            color: 'green',
            confirmButtonColor: 'green',
            })
        
    }, 3000);
};


