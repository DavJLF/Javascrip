const ingreso =prompt("Bienvenido al Kiosco ingrese nombre")
alert(ingreso)
let kiosco = prompt("Ingrese Producto").toLowerCase()
function carrito(changuito){}
    switch(kiosco){
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
            alert(`No tenemos ese producto`)
}
const comprarproduc = confirm("¿Quiere realizar la compra?")
console.log("confimo", comprarproduc)


