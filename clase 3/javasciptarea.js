window.addEventListener("load",boton)

function boton(){
    btn=document.getElementById("send");
    btn.addEventListener("click",sumar);
}


function sumar(){
    var uno= document.getElementById("nuno").value;
    var dos= document.getElementById("ndos").value;
    var suma=parseInt(uno)+parseInt(dos); 
    
    var resultado= document.getElementById("resultado");
    resultado.value=suma;
    var parrafo= document.getElementById("parrafo");
    parrafo.innerHTML=suma;

}

