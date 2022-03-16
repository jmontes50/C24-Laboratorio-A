//Estructuras Repetitivas

let contador = 0;

while (contador < 10) {
    // console.log(contador);
    // contador = contador + 1;
    contador++;
}

//do while, 1RO dispara luego pregunta

let cont = 10;

do {
    // console.log(cont);
    cont++;
} while (cont < 4);

//for
// for(inicializador; condicional; actualizador){}

for (let i = 0; i < 10; i++) {
    // console.log(i);
}

let alumnosNotas = [
    {
        nombre: "Elizabeth",
        nota: 19,
    },
    {
        nombre: "Klebert",
        nota: 20,
    },
    {
        nombre: "Yeshua",
        nota: 18,
    },
    {
        nombre: "Yonela",
        nota: 20,
    },
];

// console.log(alumnosNotas.length);

for (let i = 0; i < alumnosNotas.length; i++) {
    // backtick `` son equivalentes "" ''
    //si deseo agregar JS, usaremos ${codigo_js}
    //template string
    console.log(`Alumn@ ${alumnosNotas[i].nombre}`);
}
