
let numPrimos = [];

// verificación de si los numeros son primos
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;

        }

    }
    return true;
};

// Calcula los primeros numerosRequeridos numeros primos.

function calcularPrimerosPrimos(numeroRequeridos) {
    let cantidadNumerosPrimos = 0;
    for (let index = 1; cantidadNumerosPrimos < numeroRequeridos; index++) {
        if (esPrimo(index)) {
            console.log(index);
            cantidadNumerosPrimos++;
            numPrimos.push(index);
        }


    }

}; 
