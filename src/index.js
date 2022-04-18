import validator from './validator.js'

//Botón CONTINUE
let paginaUno= document.getElementById("continue");
paginaUno.addEventListener("click", function () {
  let inicio = document.getElementById("paginaUno");
  inicio.style.display = "none";
  let paginaDos = document.getElementById("paginaDos");
  paginaDos.style.display = "block";
  let recuadro = document.getElementById("recuadro");
  recuadro.style.display = "none";
 
});

//Botón BUY NOW
let paginaDos = document.getElementById("buy");
paginaDos.addEventListener("click", function () {
    //let form = document.getElementById("formulario")
  let inicio = document.getElementById("paginaUno");
  inicio.style.display = "none";
  let paginaDos = document.getElementById("paginaDos");
  paginaDos.style.display = "none";
  let recuadro = document.getElementById("recuadro");
  recuadro.style.display = "block";
});

function getData() {

    const name = document.getElementById("name").value;
    const cvv = document.getElementById("cvv").value;
    const fees = document.getElementById("fees").selectedIndex;
    let card = document.getElementById("card").value;


    if (cvv.length > 3) {
        alert("ERROR. Ingrese solo tres dígitos");
    }
    if (cvv.length <= 2) {
        alert("ERROR. Ingrese solo tres dígitos");
    }

    if (isNaN(name)) {

    }
    else {
        alert("ERROR. Ingrese solo letras");
    }

    if (name == null || name.length == 0 || /^\s+$/.test(name)) {
        alert("ERROR. Ingrese su nombre y apellido");
    }

    if (fees == null || fees == 0) {
        alert("ERROR. Debe seleccionar una opción");

    }

    if (isNaN(card)) {
        alert("ERROR. Ingrese solo números.")
    }
    if (card == null || card.length == 0 || /^\s+$/.test(card)) {
        alert("No deje espacios en blanco. Solo caracteres numéricos ");
    }

    let validation = validator.isValid(card);
    if (validation === true) {
        document.getElementById("demo").innerHTML = "Tarjeta es válida";
    }
    else {
        document.getElementById("demo").innerHTML = "Tarjeta es inválida";
    }

    let number = validator.maskify(cardNumber);
    document.getElementById("card").value = number;
}

document.getElementById("pay").onclick = getData;

