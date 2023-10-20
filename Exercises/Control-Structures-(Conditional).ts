// Descripción: Usar un condicional para determinar si un número es par o impar.
function esParOImpar(numero: number): string {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

const numero = 7;
const parOImpar = esParOImpar(numero);
console.log(`${numero} es ${parOImpar}`);
