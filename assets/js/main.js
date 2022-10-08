const precio = 899990;
const valor = document.querySelector("#valor");
const cantidad = document.querySelector("#cantidad");
const precioCompra = document.querySelector("#precioCompra");
const color = document.querySelector("#color");
const table = document.querySelector(".table");

valor.textContent = `${precio} .-`;
cantidadCompra.textContent = `${cantidad}`;

boton.addEventListener("click",() =>{
    cantidadCompra.textContent = `${cantidad.value}`;
    precioCompra.textContent = `$${cantidad.value * precio}.-`;
    colorFinal.style.backgroundColor=color.value;
    table.style.display="block";
} )