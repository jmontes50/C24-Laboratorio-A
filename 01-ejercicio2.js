let arrJuegos = [
    {
        nombre: "Mortal Kombat",
        precio: 50,
    },
    {
        nombre: "Just Dance",
        precio: 40,
    },
    {
        nombre: "Fall Guys",
        precio: 20,
    },
    {
        nombre: "Call of Duty",
        precio: 70,
    },
    {
        nombre: "Halo Infinite",
        precio: 100,
    },
    {
        nombre: "The Witcher 3",
        precio: 15,
    },
];

/**
 * Le preguntemos al usuario cuanto presupuesto tiene
 * que solo le mostremos primero los juegos que entran dentro de su presupuesto
 * y que después seleccione 1 x 1 los juegos que se lleva
 * si ya no hay presupuesto pues GG
 */

let presupuesto = +prompt("Ingresa tu presupuesto");
let juegosComprables = [];
let juegosAComprar = [];

for (let i = 0; i < arrJuegos.length; i++) {
    if (presupuesto < arrJuegos[i].precio) {
        //esa iteración no la considera y salta a la siguiente
        continue;
    }
    juegosComprables.push(arrJuegos[i]);
}

console.table(juegosComprables);

for (let i = 0; i < juegosComprables.length; i++) {
    if (presupuesto < juegosComprables[i].precio) {
        continue; //me lo salto si es menor
    }

    let comprar = confirm(`Deseas comprar ${juegosComprables[i].nombre} - S/ ${juegosComprables[i].precio}`);

    // if(comprar === true){
    if (comprar) {
        juegosAComprar.push(juegosComprables[i]);
        // presupuesto = presupuesto - juegosComprables[i].precio;
        presupuesto -= juegosComprables[i].precio;
    }
}

console.table(juegosAComprar);
