/**
 * Cree una función que reciba un número entero J y un arreglo de enteros, la función debe retornar el arreglo con los enteros desplazados hacia la IZQUIERDA según el entero J.
 *
 * Ej.
 * J = 2
 * arr = [1, 2, 3, 4, 5]
 * RES: [3, 4, 5, 1, 2]
 */

const desplazarIzquierda = (j, arreglo) => {
    let tempArr = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (i + j < arreglo.length) {
            tempArr.push(arreglo[i + j]);
        } else {
            console.log(i - (arreglo.length - j));
            tempArr.push(arreglo[i - (arreglo.length - j)]);
        }
    }
    return tempArr;
};

console.log(desplazarIzquierda(2, [1, 2, 3, 4, 5]));
