

window.addEventListener("load",tocar);



function tocar()
{
    var inputBtn=document.getElementById("btn1");
    inputBtn.addEventListener("click",sumar);

    var inputBtn2=document.getElementById("btn2");
    inputBtn2.addEventListener("click",limpiar);

}

function limpiar()
{
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById('num2').style.borderColor='black';
    document.getElementById('num1').style.borderColor='black';
   
}
function sumar()
{
    var num1= document.getElementById("num1");
    num1=num1.value;
    var num2= document.getElementById("num2");
    num2=num2.value;
    colorear(num1,num2);
    if(validar(num1,num2))
    {
        /*LLAMO EVENTO LLENAR TABLA CON RESULTADO*/
        
        var body = document.getElementById('resultados').getElementsByTagName('tbody')[0];
        var nr=body.insertRow(body.rows.length);
        createCell(nr.insertCell(0), num1, 'row');
        createCell(nr.insertCell(1), num2, 'row');
        createCell(nr.insertCell(2), parseInt(num1)+parseInt(num2), 'row'); 
        
    }

    

}
function createCell(cell, text, style) 
{
    var div = document.createElement('div'), // create DIV element
    txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}

function validar(a,b)
{
    var rt=false;
    if(!isNaN(a)&&!isNaN(b))
    {
        if(a>0&&b>0)
        {
            rt=true;
        }
    }
    return rt;
}

function colorear(a,b)
{
    if(a<0||isNaN(a)||a=="")
    {
        document.getElementById('num1').style.borderColor='red';
    }
    else
    {
        document.getElementById('num1').style.borderColor='black';
    }
    if(b<0||isNaN(b)||b=="")
    {
        document.getElementById('num2').style.borderColor='red';
    }
    else
    {
        document.getElementById('num2').style.borderColor='black';

    }
}