"use strict";
var Consultas = /** @class */ (function () {
    function Consultas() {
    }
    Consultas.prototype.ejecutarGet = function (url, listener) {
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (xml.readyState === 4) {
                listener.response(xml.status, xml.responseText);
            }
        };
        xml.open("GET", url, true);
        xml.send();
    };
    return Consultas;
}());
