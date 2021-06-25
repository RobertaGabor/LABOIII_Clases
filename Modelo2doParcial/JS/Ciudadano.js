"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ciudadano = /** @class */ (function (_super) {
    __extends(Ciudadano, _super);
    function Ciudadano(dni, pais, sexo, nombre, apellido, edad) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        if (Ciudadano.validarDni(dni) == true && Ciudadano.validarEdad(edad) == true && Ciudadano.validarString(nombre) == true && Ciudadano.validarString(apellido) == true && Ciudadano.validarPais(pais) == true) {
            _this.dni = dni;
            _this.pais = pais;
            _this.sexo = sexo;
        }
        else {
            _this.dni = -11111;
        }
        return _this;
    }
    Ciudadano.CiudadanoToJSON = function (persona) {
        var personaParse = "{" + Persona.PersonaToString(persona) + ',"dni"' + ":" + '"' + persona.dni + '"' + ',"pais"' + ":" + '"' + persona.pais + '"' + ',"sexo"' + ":" + '"' + persona.sexo + '"' + "}";
        return JSON.parse(personaParse);
    };
    Ciudadano.MostrarCiudadano = function (sexo, txtnom, txtape, txtdni, txtage, txtpais) {
        var cuerpo = Manejador.$("tcuerpo");
        var row = document.createElement("tr");
        cuerpo.appendChild(row);
        var tdNombre = document.createElement("td");
        row.appendChild(tdNombre);
        var textoNombre = document.createTextNode(txtnom);
        tdNombre.appendChild(textoNombre);
        var tdApellido = document.createElement("td");
        row.appendChild(tdApellido);
        var textoApellido = document.createTextNode(txtape);
        tdApellido.appendChild(textoApellido);
        var tdDNI = document.createElement("td");
        row.appendChild(tdDNI);
        var textoCarnet = document.createTextNode(txtdni);
        tdDNI.appendChild(textoCarnet);
        tdDNI.className = "PRIMARY";
        var tdEdad = document.createElement("td");
        row.appendChild(tdEdad);
        var textoEdad = document.createTextNode(txtage);
        tdEdad.appendChild(textoEdad);
        var tdPais = document.createElement("td");
        row.appendChild(tdPais);
        var textoPais = document.createTextNode(txtpais);
        tdPais.appendChild(textoPais);
        var tdSexo = document.createElement("td");
        var textoSexo = document.createTextNode(sexo);
        tdSexo.appendChild(textoSexo);
        row.appendChild(tdSexo);
        var tdModificar = document.createElement("td");
        row.appendChild(tdModificar);
        var anclo = document.createElement("a");
        tdModificar.appendChild(anclo);
        anclo.setAttribute("href", "#");
        var textoBorra = document.createTextNode("MODIFICAR");
        anclo.appendChild(textoBorra);
        anclo.addEventListener("click", Ciudadano.Modificarciudadano);
        var tdBorrar = document.createElement("td");
        row.appendChild(tdBorrar);
        var ancla = document.createElement("a");
        tdBorrar.appendChild(ancla);
        ancla.setAttribute("href", "#");
        var textoBorrar = document.createTextNode("ELIMINAR");
        ancla.appendChild(textoBorrar);
        ancla.addEventListener("click", Ciudadano.Eliminarciudadano);
    };
    Ciudadano.Modificarciudadano = function () {
        alert("es modificao");
    };
    Ciudadano.Eliminarciudadano = function (ev) {
        var _a;
        var btn = ev.target;
        // Manejador.$("tcuerpo").removeChild(btn.parentNode.parentNode);
        alert("es eliminao");
        var dni = (_a = (btn.parentElement.parentElement.querySelector(".PRIMARY"))) === null || _a === void 0 ? void 0 : _a.innerHTML;
        Ciudadano.eliminarCiudadanos(dni);
    };
    Ciudadano.AgregarCiudadano = function (sexo, txtnom, txtape, txtdni, txtage, txtpais) {
        //agregar ciudadano y add a storelocal
        //hacer un for de todos los ciudadanos y leer a la tabla
        //corroborar que no sean nulos, sino pinto en rokjo
        var citizen = new Ciudadano(txtdni.value, txtpais.value, sexo, txtnom.value, txtape.value, txtage.value);
        //set en local ustiore un array de CITIZEN CON TODOS
        //var citizenJSON=Ciudadano.CiudadanoToJSON(citizen);
        this.changeErrorColor(sexo, txtnom, txtape, txtdni, txtage, txtpais);
        if (citizen.dni != -11111) {
            Ciudadano.cargarCiudadanos(citizen);
            alert("Ciudadano agregado con exito!");
        }
    };
    Ciudadano.changeErrorColor = function (sexo, txtnom, txtape, txtdni, txtage, txtpais) {
        if (this.validarDni(txtdni.value) == false) {
            txtdni.className = "error";
        }
        else {
            txtdni.className = "ok";
        }
        if (this.validarString(txtape.value) == false) {
            txtape.className = "error";
        }
        else {
            txtape.className = "ok";
        }
        if (this.validarString(txtnom.value) == false) {
            txtnom.className = "error";
        }
        else {
            txtnom.className = "ok";
        }
        if (this.validarEdad(txtage.value) == false) {
            txtage.className = "error";
        }
        else {
            txtage.className = "ok";
        }
        if (this.validarPais(txtpais.value) == false) {
            txtpais.className = "error";
        }
        else {
            txtpais.className = "ok";
        }
    };
    Ciudadano.validarString = function (palabra) {
        if (palabra != undefined) {
            if (palabra.match('^[a-zA-Z]+$') && palabra.length > 0 && palabra.length < 13) {
                return true;
            }
        }
        return false;
    };
    Ciudadano.validarDni = function (palabra) {
        var numb = String(palabra);
        if (palabra != undefined) {
            if (numb.match('^[0-9]+$')) {
                if (numb.length > 0 && numb.length < 9) {
                    return true;
                }
            }
        }
        return false;
    };
    Ciudadano.validarPais = function (palabra) {
        if (palabra != "") {
            return true;
        }
        return false;
    };
    Ciudadano.validarEdad = function (edad) {
        var numb = String(edad);
        if (edad != undefined) {
            if (numb.match('^[0-9]+$')) {
                if (edad > 0 && edad < 150) {
                    return true;
                }
            }
        }
        return false;
    };
    Ciudadano.eliminarCiudadanos = function (dni) {
        var CiudadanosL;
        CiudadanosL = []; //INICIALIZAR
        var dniN = Number(dni);
        CiudadanosL = JSON.parse(localStorage.getItem("Ciudadanos"));
        for (var i = 0; i < CiudadanosL.length; i++) {
            if (CiudadanosL[i].dni == dniN) {
                CiudadanosL.splice(i, 1);
            }
        }
        Ciudadano.limpiarTabla();
        localStorage.setItem("Ciudadanos", JSON.stringify(CiudadanosL));
        for (var i = 0; i < CiudadanosL.length; i++) {
            Ciudadano.MostrarCiudadano(CiudadanosL[i].sexo, CiudadanosL[i].nombre, CiudadanosL[i].apellido, String(CiudadanosL[i].dni), String(CiudadanosL[i].edad), CiudadanosL[i].pais);
        }
    };
    Ciudadano.cargarCiudadanos = function (citizen) {
        //load
        var CiudadanosL;
        CiudadanosL = []; //INICIALIZAR
        if (localStorage.length > 0) {
            CiudadanosL = JSON.parse(localStorage.getItem("Ciudadanos"));
        }
        if (citizen != undefined) {
            CiudadanosL.push(citizen);
            Ciudadano.limpiarTabla();
            //limpiar tabla
        }
        localStorage.setItem("Ciudadanos", JSON.stringify(CiudadanosL));
        for (var i = 0; i < CiudadanosL.length; i++) {
            Ciudadano.MostrarCiudadano(CiudadanosL[i].sexo, CiudadanosL[i].nombre, CiudadanosL[i].apellido, String(CiudadanosL[i].dni), String(CiudadanosL[i].edad), CiudadanosL[i].pais);
        }
        //load
    };
    Ciudadano.limpiarTabla = function () {
        var elmtTable = document.getElementById('tcuerpo');
        var tableRows = elmtTable.getElementsByTagName('tr');
        var rowCount = tableRows.length;
        for (var x = rowCount - 1; x > -1; x--) {
            elmtTable.removeChild(tableRows[x]);
        }
    };
    return Ciudadano;
}(Persona));
