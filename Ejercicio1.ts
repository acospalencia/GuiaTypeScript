type Alineacion = "izquierda" | "centro" | "derecha";

class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: Alineacion = "izquierda";

    constructor(tituloParam: string, colorParam: string, fuenteParam: string) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }
    

    obtenerData(): void {
        return console.log(`Los datos se asignaron correctamente: Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);

    }

    alineacionTitulo(alineacion: Alineacion): void {
        this.alineacion = alineacion;
        console.log(`La alineación del título es: ${this.alineacion}`);
    }

    imprimirTodo(): string {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}, Alineación: ${this.alineacion}`;
    }
}

const cabecera = new CabeceraPagina("asd", "asd", "asd");
cabecera.obtenerData();
cabecera.alineacionTitulo("centro");
console.log(cabecera.imprimirTodo());
