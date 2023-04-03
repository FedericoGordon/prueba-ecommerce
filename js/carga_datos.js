class producto {
    constructor(codigo, marca, modelo, canales, precio,imagen) {
        this.codigo = codigo;
        this.marca = marca;
        this.modelo = modelo;
        this.canales = canales;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const yamaha2 = new producto(1, "Yamaha", "mg06", 2, 89900,"yamahamg06.jpg");
const yamaha6 = new producto(2, "Yamaha", "mg12", 6, 295000,"yamahamg12.jpg");
const yamaha16 = new producto(3, "Yamaha", "mg20", 16, 439000,"yamahamg20.jpg");
const behringer1 = new producto(4, "Behringer", "Xenix 502", 1, 48100,"behringerxenix502.jpg");
const behringer2 = new producto(5, "Behringer", "Xenix 802", 2, 73900,"behringerxenix802.jpg");
const behringer6 = new producto(6, "Behringer", "Xenix 1222", 6, 223400,"behringerxenix1222.jpg");
const behringer32 = new producto(7, "Behringer", "Sx 3242fx", 32, 621400,"behringer3242.jpg");
const behringer24 = new producto(8, "Behringer", "Sx 2442fx", 24, 512900,"behringerxenix2442fx.jpg");
const apogee6 = new producto(9, "Apogee", "Alive", 6, 46500,"apogeealive6.jpg");
const onax12 = new producto(10, "Onax pro", "Hs12", 12, 84990,"onaxpromix8.jpg");
const onax8 = new producto(11, "Onax pro", "Mix 8", 8, 62400,"onaxprohs12.jpg");
const soundcraft22 = new producto(12, "Soundcraft", "Signatura 22", 22, 489600,"soundcraftsignature22.jpg");
const phonic16 = new producto(13, "Phonic", "Helixboard", 16, 513400,"phonichelixboard16.jpg");
const phonic32 = new producto(14, "Phonic", "Am 3242fx", 32, 584200,"phonicam3242.jpg");
const allen32 = new producto(15, "Allen&heath", "Zed 436", 32, 1648390,"allenzed436.jpg");

let productos = [yamaha2, yamaha6, yamaha16, behringer1, behringer2, behringer6, behringer24, behringer32, apogee6, onax8, onax12, soundcraft22, phonic16, phonic32, allen32];

function guardarProductosLStorage(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLStorage(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLStorage(productos);