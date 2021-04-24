window.addEventListener("load",function()
{
    var btn=document.getElementById("btn");
    btn.addEventListener("click",agregarPersona);

    
});


function agregarPersona()
{
    var txtnom=$("txtNombre");
    var txtape=$("txtApellido");
    var txtbor=$("borrar");

    if(txtnom.value==""||txtape.value=="")
    {
        if(txtnom.value=="")
        {
            txtnom.className="conError";
        }
        if(txtape.value=="")
        {
            txtape.className="conError";
        }
    }
    else
    {
        var cuerpo=$("tcuerpo");/*ya tengo body me faltan hijos y ponerles texto*/ 
        /*cuerpo.innerHTML+="<tr>"+   NO SE HACE ASI ESD PELIGROSO
        "<td>"+txtnom.value+"</td>"+
        "<td>"+txtape.value+"</td>"+
        "<td><a href='#'>borrar</a></td>"+
        "<tr>";*/

        /*       DOM        */
         var row= document.createElement("tr");
         cuerpo.appendChild(row);
         var tdNombre=document.createElement("td");
         row.appendChild(tdNombre);
         var textoNombre=document.createTextNode(txtnom.value);
         tdNombre.appendChild(textoNombre);
         var tdApellido=document.createElement("td");
         row.appendChild(tdApellido);
         var textoApellido=document.createTextNode(txtape.value);
         tdApellido.appendChild(textoApellido);
         
         var tdBorrar=document.createElement("td");
         row.appendChild(tdBorrar);
         var ancla=document.createElement("a");
         tdBorrar.appendChild(ancla);
         
         ancla.setAttribute("href","#");
         var textoBorrar=document.createTextNode("borrar");
         ancla.appendChild(textoBorrar);
         ancla.addEventListener("click",borrar);

         row.addEventListener("dblclick",modificar);
        
        
         limpiar();        
    }

}

function modificar(event)
{
    var txtnom=$("txtNombre");
    var txtape=$("txtApellido");
    var elemento=event.target;
    elemento.parentNode.className="registroRow";
 
    var nombre= elemento.parentNode.firstChild;
    var apellido=nombre.nextSibling;
    txtnom.value=nombre.innerHTML;
    txtape.value=apellido.innerHTML;

}


function $(id)
{
    return document.getElementById(id);
}

function limpiar()
{
    $("txtNombre").value="";
    $("txtApellido").value="";
}

function borrar(event)/*even devuelve puntero al evento y TARGET*/
{
    var elemento=event.target;
    $("tcuerpo").removeChild(elemento.parentNode.parentNode);/*DEL PADRE DEL PADRE DEL QUE PRODUJO EL EVENTO*/
    /*EL REMOVE SACA LA REFERENCIA, SE PIERDE DESPUES EL GC LO ELIMINA*/
}