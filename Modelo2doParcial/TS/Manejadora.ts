class Manejador implements EventListenerObject 
{
    public handleEvent(ev:Event):void
    {

        var sexo:string;
        var txtnom:HTMLInputElement=Manejador.$("name"); //AGREGAR SI ES NULL EL CAMPO ESCRITO DEL CIUDADANO PONER EN ROJO
        var txtape:HTMLInputElement=Manejador.$("lastName");
        var txtdni:HTMLInputElement=Manejador.$("carnet");
        var txtage:HTMLInputElement=Manejador.$("age");
        var txtpais:HTMLInputElement=Manejador.$("country");
        var txtf:HTMLInputElement=Manejador.$("f");
        var txtm:HTMLInputElement=Manejador.$("m");
       
        if(txtf.checked==true)  //agregar otro
        {
            sexo="Mujer";
        }
        else
        {
            sexo="Varon";
        }
        
        let bton:HTMLElement=<HTMLElement>ev.target //QUE BOTON LLAMO AL EVENTO
        
        if(bton.id=="btnAdd")
        {        
            Ciudadano.AgregarCiudadano(sexo,txtnom,txtape,txtdni,txtage,
                txtpais,txtf,txtm);               
        }
        else   
        {
            if(bton.id=="btnDel")
            {
                this.EliminarCiudadano();
            }
            else
            {
                this.ModificarCiudadano();
            }
        }
        
    }

    public static $(ide:string):HTMLElement|null
    {
        return document.getElementById(ide);
    }

 

    public EliminarCiudadano():void{
        alert("ESTOY ELIMINANDO");
    }

    public ModificarCiudadano():void{
        alert("ESTOY MODIFICANDO");
    }

}

window.addEventListener("load",()=>
{
    //localStorage.clear();
    Ciudadano.cargarCiudadanos();
    let stage:EventListenerObject= new Manejador();
    
    let btnADD = <HTMLElement>document.getElementById("btnAdd");
    btnADD.addEventListener("click",stage);

    let btnDEL = <HTMLElement>document.getElementById("btnDel");
    btnDEL.addEventListener("click",stage);

    let btnMOD = <HTMLElement>document.getElementById("btnMod");
    btnMOD.addEventListener("click",stage);
    
});

