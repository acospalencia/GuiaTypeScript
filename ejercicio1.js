var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(tituloParam, colorParam, fuenteParam) {
        this.alineacion = "izquierda";
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }
    CabeceraPagina.prototype.obtenerData = function () {
        return console.log("Los datos se asignaron correctamente: T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente));
    };
    CabeceraPagina.prototype.alineacionTitulo = function (alineacion) {
        this.alineacion = alineacion;
        console.log("La alineaci\u00F3n del t\u00EDtulo es: ".concat(this.alineacion));
    };
    CabeceraPagina.prototype.imprimirTodo = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente, ", Alineaci\u00F3n: ").concat(this.alineacion);
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina("asd", "asd", "asd");
cabecera.obtenerData();
cabecera.alineacionTitulo("centro");
console.log(cabecera.imprimirTodo());
