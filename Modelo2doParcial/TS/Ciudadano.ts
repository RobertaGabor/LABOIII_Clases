
class Ciudadano extends Persona
{
    dni:number;
    pais:string;
    sexo:string;

    constructor(dni:number,pais:string,sexo:string,nombre:string,apellido:string,edad:number)
    {
        super(nombre,apellido,edad);
        if(Ciudadano.validarDni(dni)==true &&Ciudadano.validarEdad(edad)==true&&Ciudadano.validarString(nombre)==true&&Ciudadano.validarString(apellido)==true&&Ciudadano.validarPais(pais)==true)
        {
            
            this.dni=dni;
            this.pais=pais;
            this.sexo=sexo;            
        }
        else
        {
            this.dni=-11111;
        }

    }

    static CiudadanoToJSON(persona:Ciudadano)
    {
        let personaParse= "{" + Persona.PersonaToString(persona) +  ',"dni"'+":" + '"'+ persona.dni + '"' + ',"pais"'+":" + '"' + persona.pais +'"'+ ',"sexo"'+":" + '"'+persona.sexo​ +'"'+ "}";
        return JSON.parse(personaParse);
    }


    public static MostrarCiudadano(sexo:string,txtnom:string,txtape:string,txtdni:string,txtage:string,
        txtpais:string):void{
        var cuerpo:HTMLElement=Manejador.$("tcuerpo");
        var row= document.createElement("tr");
        cuerpo.appendChild(row);
        
        var tdNombre=document.createElement("td");
        row.appendChild(tdNombre);
        var textoNombre=document.createTextNode(txtnom);
        tdNombre.appendChild(textoNombre);

        var tdApellido=document.createElement("td");
        row.appendChild(tdApellido);
        var textoApellido=document.createTextNode(txtape);
        tdApellido.appendChild(textoApellido);

        var tdDNI=document.createElement("td");
        row.appendChild(tdDNI);
        var textoCarnet=document.createTextNode(txtdni);
        tdDNI.appendChild(textoCarnet);
        tdDNI.className="PRIMARY";

        var tdEdad=document.createElement("td");
        row.appendChild(tdEdad);
        var textoEdad=document.createTextNode(txtage);
        tdEdad.appendChild(textoEdad);

        var tdPais=document.createElement("td");
        row.appendChild(tdPais);
        var textoPais=document.createTextNode(txtpais);
        tdPais.appendChild(textoPais);

        var tdSexo=document.createElement("td");
        var textoSexo=document.createTextNode(sexo);
        tdSexo.appendChild(textoSexo);
        row.appendChild(tdSexo);

        var tdModificar=document.createElement("td");
        row.appendChild(tdModificar);
        var anclo=document.createElement("a");
        tdModificar.appendChild(anclo);
        
        anclo.setAttribute("href","#");
        var textoBorra=document.createTextNode("MODIFICAR");
        anclo.appendChild(textoBorra);
        
        anclo.addEventListener("click",Ciudadano.Modificarciudadano)

        var tdBorrar=document.createElement("td");
        row.appendChild(tdBorrar);
        var ancla=document.createElement("a");
        tdBorrar.appendChild(ancla);
        
        ancla.setAttribute("href","#");
        var textoBorrar=document.createTextNode("ELIMINAR");
        ancla.appendChild(textoBorrar);
        
        ancla.addEventListener("click",Ciudadano.Eliminarciudadano)
    }
    public static Modificarciudadano()
    {
        alert("es modificao");
    }
    public static Eliminarciudadano(ev:Event)
    {
        var btn=ev.target; 
        // Manejador.$("tcuerpo").removeChild(btn.parentNode.parentNode);
        alert("es eliminao");
        
        var dni:string=((<HTMLElement>(<HTMLElement>(<HTMLElement>btn).parentElement).parentElement).querySelector(".PRIMARY"))?.innerHTML);
        Ciudadano.eliminarCiudadanos(dni);
        
    }
    static AgregarCiudadano(sexo:string,txtnom:HTMLElement,txtape:HTMLElement,txtdni:HTMLElement,txtage:HTMLElement,
        txtpais:HTMLElement):void{

        //agregar ciudadano y add a storelocal
        //hacer un for de todos los ciudadanos y leer a la tabla
      

        //corroborar que no sean nulos, sino pinto en rokjo
        

        
        var citizen:Ciudadano= new Ciudadano(txtdni.value,txtpais.value,sexo,txtnom.value,txtape.value,txtage.value);
        //set en local ustiore un array de CITIZEN CON TODOS
        //var citizenJSON=Ciudadano.CiudadanoToJSON(citizen);
        this.changeErrorColor(sexo,txtnom,txtape,txtdni,txtage,txtpais);
        if(citizen.dni!=-11111)
        {
            Ciudadano.cargarCiudadanos(citizen);
            alert("Ciudadano agregado con exito!");
        }
       
 
    }

    public static changeErrorColor(sexo:string,txtnom:HTMLElement,txtape:HTMLElement,txtdni:HTMLElement,txtage:HTMLElement,
        txtpais:HTMLElement)
    {
        if(this.validarDni(txtdni.value)==false)
        {
            txtdni.className="error";
        }
        else
        {
            txtdni.className="ok";
        }
        if(this.validarString(txtape.value)==false)
        {
            txtape.className="error";
        }
        else
        {
            txtape.className="ok";
        }
        if(this.validarString(txtnom.value)==false)
        {
            txtnom.className="error";
        }
        else
        {
            txtnom.className="ok";
        }
        if(this.validarEdad(txtage.value)==false)
        {
            txtage.className="error";
        }
        else
        {
            txtage.className="ok";
        }
        if(this.validarPais(txtpais.value)==false)
        {
            txtpais.className="error";
        }
        else
        {
            txtpais.className="ok";
        }
    }

    public static validarString(palabra:string):boolean
    {
        if(palabra!=undefined)
        {
            if(palabra.match('^[a-zA-Z]+$')&&palabra.length>0&&palabra.length<13)
            {
                return true;
            }           
        }
 

        return false;
    }
    public static validarDni(palabra:number):boolean
    {
        var numb=String(palabra);
        if(palabra!=undefined)
        {
            if(numb.match('^[0-9]+$'))
            {
                if(numb.length>0 && numb.length<9)
                {
                    return true;
                }
                
            }            
        }

        return false;
    }
    public static validarPais(palabra:string):boolean
    {

        if (palabra!="")
        {
            return true;
        }
        return false;
    }
    public static validarEdad(edad:number):boolean
    {
        var numb=String(edad);
        if(edad!=undefined)
        {
            if(numb.match('^[0-9]+$'))
            {
                if(edad>0 && edad<150)
                {
                    return true;
                }
            }           
        }

        return false;
    }
    public static eliminarCiudadanos(dni:string)
    {
        var CiudadanosL:Array<Ciudadano>;
        CiudadanosL=[]; //INICIALIZAR
        var dniN=Number(dni);
        CiudadanosL=JSON.parse(localStorage.getItem("Ciudadanos"));
        for(var i=0;i<CiudadanosL.length;i++)
        {
            if(CiudadanosL[i].dni==dniN)
            {
                CiudadanosL.splice(i,1);
            }
        }
        Ciudadano.limpiarTabla();
        localStorage.setItem("Ciudadanos",JSON.stringify(CiudadanosL)); 
        for(var i=0;i<CiudadanosL.length;i++)
        {
            Ciudadano.MostrarCiudadano(CiudadanosL[i].sexo,CiudadanosL[i].nombre,CiudadanosL[i].apellido,String(CiudadanosL[i].dni),String(CiudadanosL[i].edad),CiudadanosL[i].pais)
        }
    }
    public static cargarCiudadanos(citizen?:Ciudadano)
    {
        //load
        var CiudadanosL:Array<Ciudadano>;
        CiudadanosL=[]; //INICIALIZAR
        if(localStorage.length>0)
        {
            CiudadanosL=JSON.parse(localStorage.getItem("Ciudadanos"));
        }

        if(citizen!=undefined)
        {
            CiudadanosL.push(citizen);
            Ciudadano.limpiarTabla();
            //limpiar tabla
        }
     
        localStorage.setItem("Ciudadanos",JSON.stringify(CiudadanosL)); 
        
        for(var i=0;i<CiudadanosL.length;i++)
        {
            Ciudadano.MostrarCiudadano(CiudadanosL[i].sexo,CiudadanosL[i].nombre,CiudadanosL[i].apellido,String(CiudadanosL[i].dni),String(CiudadanosL[i].edad),CiudadanosL[i].pais)
        }

        //load
    }

    public static limpiarTabla()
    {
        var elmtTable = document.getElementById('tcuerpo');
        var tableRows = elmtTable.getElementsByTagName('tr');
        var rowCount = tableRows.length;

        for (var x=rowCount-1; x>-1; x--) {
            elmtTable.removeChild(tableRows[x]);
        }
    }
}