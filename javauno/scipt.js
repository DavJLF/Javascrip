
/*const producto = [ 'remera', 'chaqueta', 'pantalon']

const elegirproducto = () => {
    const id = prompt('ingrese producto')
    const nombre = prompt('ingrese ropa')


    const producto = { id, nombre}
    producto.push(producto)
}
elegirproducto()*/
//let arrayproduc =[1, 2, 3, 4, 5, 8]
//console.log(arrayproduc.indexOf(1))

/*function elegirproduc(mercaderia){
    let producto = mercaderia.indexOf(mercaderia)
    if(producto<0){
        console.log("mercaderia no encontrada")
    } else {
        console.log(`producto${producto}`)d
    }
}*/

/*const minimercado = "bienvenido al kiosco";
console.log(minimercado)*/
/*if(pedido === "Producto"){
    console.log("No seleccionaste el producto")
} else if(pedido === "producto"){
    console.log("No encontramos el producto")
} else{
    alert("Ingreso")//sumar + un let o case para elegir productos
}*/
// if(caramelos === "chicle" || caramelos === "chocolate" || caramelos === "chupetin"){
//     const bolsita = confirm(`Desea sumar una bolsita ${caramelos}. Si o No`)
//     if(caramelos){
//         alert(`Agrego ${caramelos}`)
//     } else{
//         alert(`Agrego ${caramelos}`)
//     }
// } else{
//     alert("No tenemos esos caramelos")
// }
const ingreso =prompt("Bienvenido al Kiosco ingrese nombre")
alert(ingreso)

let pedido = prompt("Ingrese Producto").toLowerCase()
switch(pedido){
    case "chicle":
        alert("Agrego una bolsa de chicle")
        break;
    case "chocolate":
        alert("Agrego una bolsa de chocolate")
        break;
    case "chupetin":
        alert("Agrego una bolsa de chupetines")
        break;
    default:
        alert(`No sumo productos al carrito`)
}
const comprarproduc = confirm("¿Quiere realizar la compra?")
console.log("confimo", comprarproduc)


