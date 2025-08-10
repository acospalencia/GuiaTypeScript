class Calculadora {

    public sumar(a: number, b: number): number {
        return a + b;
    }

    public restar(a: number, b: number): number {
        return a - b;
    }

    public multiplicar(a: number, b: number): number {
        return a * b;
    }

    public dividir(a: number, b: number): number {
        if (b === 0) throw new Error("No se puede dividir entre cero");
        return a / b;
    }

    public potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    public factorial(n: number): number {
        if (n < 0) throw new Error("No existe el factorial de números negativos");
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}


const calc = new Calculadora();

console.log("Suma:", calc.sumar(10, 5));
console.log("Resta:", calc.restar(10, 5));
console.log("Multiplicación:", calc.multiplicar(10, 5));
console.log("División:", calc.dividir(10, 5));
console.log("Potencia:", calc.potencia(2, 3));
console.log("Factorial:", calc.factorial(5));

