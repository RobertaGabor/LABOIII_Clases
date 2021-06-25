"use strict";
var Main = /** @class */ (function () {
    function Main(nombre) {
        this.nombre = nombre;
        this.consultaAjax = new Consultas();
    }
    Main.prototype.handleEvent = function (ev) {
        num: Number;
        var num = document.getElementById("ipNum");
        var numerica = Number(num.value);
        this.consultaAjax.ejecutarGet("http://localhost", this);
        var boton = ev.target;
        if (boton.id == "btn") {
            alert("hola mundo soy " + this.nombre);
        }
        else {
            console.log(this);
            this.contar();
        }
    };
    Main.prototype.contar = function () {
        console.log(1 + 2);
    };
    Main.prototype.response = function (status, response) {
        if (status == 200) {
            console.log(status);
            var datos = JSON.parse(response);
        }
    };
    return Main;
}());
window.addEventListener("load", function () {
    var main = new Main("Matias");
    var btn = document.getElementById("btn");
    var btn2 = document.getElementById("btn2");
    btn.addEventListener("click", main); //main es solo en handle event
    btn2.addEventListener("click", main);
    //main.saludar();
}); //afuera de la clase puedo poner cosas que no existan en ts
//USAR LET XQ VAR ES GLOBAL
