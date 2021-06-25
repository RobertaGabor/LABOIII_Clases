include_once "consultas.ts"
class Main implements EventListenerObject{

    nombre:string;
    consultaAjax:Consultas;

    public constructor(nombre:string){
        this.nombre=nombre;
        this.consultaAjax= new Consultas();
    }

    public handleEvent(ev:Event):void{

        num:Number;
        let num=<HTMLInputElement>document.getElementById("ipNum");
        let numerica:number =Number(num.value);
        this.consultaAjax.ejecutarGet("http://localhost",this);

        let boton:HTMLElement=<HTMLElement>ev.target;

        if(boton.id=="btn")
        {
            alert(`hola mundo soy ${this.nombre}`);
        }
        else
        {
            console.log(this);
            this.contar();
        }
        

    }
    public contar(){
        console.log(1+2);
    }
    public response(status:number,response:string)
    {
        if(status==200)
        {

            console.log(status);

            let datos: Array <Personas>=JSON.parse(response);

        }
    }
}


window.addEventListener("load",()=>{
    let main:EventListenerObject=new Main("Matias");
    
    let btn= <HTMLElement>document.getElementById("btn");
    let btn2= <HTMLElement>document.getElementById("btn2");
    btn.addEventListener("click",main); //main es solo en handle event
    btn2.addEventListener("click",main);
    //main.saludar();
}) //afuera de la clase puedo poner cosas que no existan en ts
//USAR LET XQ VAR ES GLOBAL