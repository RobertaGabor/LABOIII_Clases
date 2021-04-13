var mensaje="Texto";
var funcion=sumar;//si no le paso parentesis y la funcion no tiene return la puedo ejecutar

alert(mensaje);
mensaje=12;
alert(mensaje*2);

window.addEventListener("load",cargar);//EVENTOS, LOAD ES CUANDO CARGO LA EJECUTA LA FUNCION
//osea cuando cargo ya todo el body


function sumar(mensa,num)
{
    if(num==undefined)
    {
        alert(mensa);
    }
    
    
}
sumar('hola');//parametros son opcionales no rompe si le paso 1 solo a una func de 2
//undefined si quiero hacer algo de algo NULO
//no hacemos new de objeto, se hace solo cuando se carga html DOM
function cargar()
{
    var inputBtn=document.getElementById("btn");
    inputBtn.addEventListener("click",saludar);

    var input = document.getElementById("name");
    input.addEventListener("click",function(){alert("hizo click");})
}
//funciones anonimas, temporales
function saludar()//no tienen parametros los eventos
{
    var input= document.getElementById("name");
    var textoIn=input.value;
    
    alert(textoIn);
}
