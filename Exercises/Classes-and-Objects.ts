// Descripción: Crear una clase que representa un vehículo y crear objetos de esa clase.
// Declaración de una clase
class Vehiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarDetalles() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
}

// Creación de objetos
const auto = new Vehiculo("Toyota", "Camry");
const moto = new Vehiculo("Honda", "CBR600RR");

// Uso de objetos
auto.mostrarDetalles();
moto.mostrarDetalles();

