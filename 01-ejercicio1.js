/**
 *“La langosta ahumada” es una empresa dedicada a ofrecer banquetes; sus
tarifas son las siguientes: el costo de platillo por persona es de $95.00,
pero si el número de personas es mayor a 200 pero menor o igual a 300,
el costo es de $85.00. Para más de 300 personas el costo por platillo es de
$75.00. Se requiere un algoritmo que ayude a determinar el presupuesto
que se debe presentar a los clientes que deseen realizar un evento.
 * 
* Desarrollenlo en funciones
 */

const calcularPresupuesto = (cantPersonas) => {
    let costo = 95;
    if (cantPersonas > 300) {
        costo = 75;
        //cuando se ejecuta un return, este me termina la ejecución de la función
        // return cantPersonas * costo;
    } else if (cantPersonas > 200) {
        costo = 85;
        // return cantPersonas * costo;
    }
    //  else {
    //     return cantPersonas * costo;
    // }
    return cantPersonas * costo;
};
//parseInt()
//parseFloat()
let asistentes = +prompt("Ingrese la cantidad de personas");

// console.log(typeof asistentes);

console.log(calcularPresupuesto(asistentes));
