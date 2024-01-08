const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer")
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
    });
});
// Carrito de compras
verCarrito.addEventListener("click",()=> {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="moldal-header-title">Carrito</h1>`;
    
    modalContainer.append(modalHeader);
    
    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);
    
    carrito.forEach((productos)=>{
        let carritoContent = document.createElement("div");
        carrito.className = "modal-content";
        carrito.innerHTML = `
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <p>${productos.precio}$</p>`;
            

        modalContainer.append(carritoContent);
    });
    const total = carrito.reduce((acc,commodity)=> acc + commodity.precio, 0);
    
    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total}`;
    modalContainer.append(totalBuying);

});
//FORMULARIO




