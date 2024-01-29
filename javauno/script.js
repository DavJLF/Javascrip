const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const productos = [
    {
        id: 1,
        nombre: "Los Vengadores",
        precio: 12000,
        img: "https://i.blogs.es/e5ec52/los-vengadores-the-avengers-la-pelicula-foto/1366_2000.jpg" ,
    },
    {
        id: 2,
        nombre: "Rapidos y Furiosos 10",
        precio: 5500,
        img: "https://www.eltiempo.com/files/article_main_1200/uploads/2023/04/20/644146fceb8d1.jpeg",
    },
    {
        id: 3,
        nombre: "Elijo Creer",
        precio: 20000,
        img: "https://www.diarionorte.com/content/bucket/3/343703w750h394c.jpg.webp",
    },
    {
        id: 4,
        nombre: "Shazam:Fury of the Gods",
        precio: 2000,
        img: "https://cdn.colombia.com/sdi/2022/11/08/shazam-fury-of-the-gods-presento-su-nuevo-poster-y-confirma-su-fecha-de-estreno-1084063.webp",
    },
    {
        id: 5,
        nombre: "Moonfall",
        precio: 1600,
        img: "https://www.dodmagazine.es/wp-content/uploads/2022/01/moonfall-poster-pelicula.jpg",
    },
    {
        id: 6,
        nombre: "Venom:Carnage Liberado",
        precio: 1700,
        img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/Venom-2-Poster.jpg?resize=1280%2C1600&quality=80&ssl=1",
    },
    {
        id: 7,
        nombre: "Intensamente 2",
        precio: 7000,
        img: "https://purodiseno.lat/wp-content/uploads/2023/11/INTENSAMENTE-2.png",
    },
    {
        id: 8,
        nombre: "Oppenheimer",
        precio: 30000,
        img: "https://newshour-classroom-tc.digi-producers.pbs.org/uploads/images/Oppenheimer-Christopher-Nolan-0.width-1024.jpg",
    },
];
let carrito = [];
productos.forEach((productos)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML= 
    `<img src="${productos.img}">
    <h3>${productos.nombre}</h3>
    <p class="precio">${productos.precio}$</p>`;

    shopContent.append(content);
    
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    content.append(comprar);

    comprar.addEventListener("click",()=>{
        carrito.push({
            id: productos.id,
            img: productos.img,
            nombre: productos.nombre,
            precio: productos.precio,
        });
        save();
    });
});
// Carrito de compras
verCarrito.addEventListener("click",()=> {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="moldal-header-title">🛒</h1>`;
    
    modalContainer.append(modalHeader);
    
    const modalButton = document.createElement("h1");
    modalButton.innerText = "❌";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);
    
    carrito.forEach((productos)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <p>${productos.precio}$</p>`;
            

        modalContainer.append(carritoContent);
    });
    const total = carrito.reduce((acc,commodity)=> acc + commodity.precio, 0);
    
    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = 
        `total a pagar: ${total}`;
    modalContainer.append(totalBuying);
    
    Swal.fire({
        title: "Quieres realizar la compra?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Pagar",
        denyButtonText: `No continuar`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        Swal.fire("Compra realizada", "", "success");
        } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "error");
        }
    });
});
// Local storage
const save = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
// Promesas
function mostrarDatos(){
    const datos = new Promise(function(){
        if(Math.random()>="success"){
            Swal.fire("success")
        } else {
            Swal.fire("error")
        }
    })
    return datos
    }
    console.log(mostrarDatos())
    mostrarDatos().then(respuesta =>{
    console.log(respuesta)
}).catch(e=> console.warn(e))

