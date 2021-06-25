"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.apellido = apellido;
        this.edad = edad;
        this.nombre = nombre;
    }
    Persona.PersonaToString = function (human) {
        return '"nombre"' + ":" + '"' + human.nombre + '"' + ',"apellido"' + ":" + '"' + human.apellido + '"' + ',"edad"' + ":" + '"' + human.edad + '"';
    };
    return Persona;
}());
