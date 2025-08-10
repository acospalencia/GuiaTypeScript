
abstract class Persona {

    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;


    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }

    mayorEdad(): void {
        if (this.edad < 18) {
            return console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        } else {
            return console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        }
        
    }

    abstract mostrarInformacion(): void;
}

class Empleado extends Persona {

    public sueldo: number;

    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number, salarioParam: number) {
        super(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam);
        this.sueldo = salarioParam;
    }

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}, Salario: ${this.sueldo}`);
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
        this.mostrarSueldo();
    }

    mostrarSueldo(): void {
        console.log(`El sueldo de ${this.nombre} ${this.apellido} es ${this.sueldo}`);
    }
}

const empleado1 = new Empleado("Juan", "Pérez", "Calle Falsa 123", "555-1234", 15, 3000);
empleado1.mostrarInformacion();
empleado1.mayorEdad();
empleado1.cargarSueldo(3500);
empleado1.mostrarSueldo();