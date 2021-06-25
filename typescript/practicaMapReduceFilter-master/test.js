// var a:String;
// function sumaDoble(n:number)
// {
//     return n+n;
// }
// sumaDoble(4);
var autos = /** @class */ (function () {
    function autos(nombre) {
        this.name = nombre;
    }
    autos.nombreDoble = function (nombre) {
        return nombre + nombre;
    };
    return autos;
}());
console.log(autos.nombreDoble("Honda"));
