"use strict";
var Manejador = /** @class */ (function () {
    function Manejador() {
    }
    Manejador.prototype.handleEvent = function (ev) {
        var sexo;
        var txtnom = Manejador.$("name"); //AGREGAR SI ES NULL EL CAMPO ESCRITO DEL CIUDADANO PONER EN ROJO
        var txtape = Manejador.$("lastName");
        var txtdni = Manejador.$("carnet");
        var txtage = Manejador.$("age");
        var txtpais = Manejador.$("country");
        var txtf = Manejador.$("f");
        var txtm = Manejador.$("m");
        if (txtf.checked == true) //agregar otro
         {
            sexo = "Mujer";
        }
        else {
            sexo = "Varon";
        }
        var bton = ev.target; //QUE BOTON LLAMO AL EVENTO
        if (bton.id == "btnAdd") {
            Ciudadano.AgregarCiudadano(sexo, txtnom, txtape, txtdni, txtage, txtpais, txtf, txtm);
        }
        else {
            if (bton.id == "btnDel") {
                this.EliminarCiudadano();
            }
            else {
                this.ModificarCiudadano();
            }
        }
    };
    Manejador.$ = function (ide) {
        return document.getElementById(ide);
    };
    Manejador.prototype.EliminarCiudadano = function () {
        alert("ESTOY ELIMINANDO");
    };
    Manejador.prototype.ModificarCiudadano = function () {
        alert("ESTOY MODIFICANDO");
    };
    return Manejador;
}());
window.addEventListener("load", function () {
    //localStorage.clear();
    Ciudadano.cargarCiudadanos();
    var stage = new Manejador();
    var btnADD = document.getElementById("btnAdd");
    btnADD.addEventListener("click", stage);
    var btnDEL = document.getElementById("btnDel");
    btnDEL.addEventListener("click", stage);
    var btnMOD = document.getElementById("btnMod");
    btnMOD.addEventListener("click", stage);
});
