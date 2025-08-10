

class Cuenta {

    public nombre: string;
    public cantidad: number;
    public tipoDeCuenta: string;
    public numeroDeCuenta: string;

    constructor(nombreParam: string, cantidadParam: number, tipoDeCuentaParam: string, numeroDeCuentaParam: string) {
        
        if (cantidadParam < 5.00) {
            throw new Error("La cantidad inicial debe ser al menos $5.00");
            return;
        }
        this.cantidad = cantidadParam;
        this.nombre = nombreParam;
        this.tipoDeCuenta = tipoDeCuentaParam;
        this.numeroDeCuenta = numeroDeCuentaParam;
    }

    depositar(cantidadParam: number): void {
        if (cantidadParam < 5.00) {
            console.log("La cantidad a depositar debe ser al menos $5.00");
            return;
        }else { 
            this.cantidad += cantidadParam;
            console.log(`Se han depositado $${cantidadParam}.00 en la cuenta ${this.numeroDeCuenta}.`);
            console.log(`El saldo actual de la cuenta ${this.numeroDeCuenta} es de $${this.cantidad}.00`);
        }   
    }

    retirar(valorParam: number): void {
        if (valorParam < 5.00) {
            console.log("La cantidad a retirar debe ser al menos $5.00");
            return;
        }
        if (this.cantidad === 0) {
            console.log("No hay nada en la cuenta");
            return;
        }
        this.cantidad -= valorParam;
        console.log(`Se han retirado $${valorParam}.00 de la cuenta ${this.numeroDeCuenta}.`);
        console.log(`El saldo actual de la cuenta ${this.numeroDeCuenta} es de $${this.cantidad}.00`);
    }

    mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de Cuenta: ${this.tipoDeCuenta}`);
        console.log(`Número de Cuenta: ${this.numeroDeCuenta}`);
    }
}

const cuenta = new Cuenta("Juan Perez", 5.00, "Ahorros", "123456789");
cuenta.mostrarInfo();
cuenta.depositar(10);
cuenta.retirar(5);