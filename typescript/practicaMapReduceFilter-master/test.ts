// var a:String;
// function sumaDoble(n:number)
// {
//     return n+n;
// }

// sumaDoble(4);

class autos
{
    private name:string;
    private num:string;
    constructor(nombre:string)
    {
        this.name=nombre;
    }

    static nombreDoble(nombre:string)
    {
        return nombre+nombre;
    }
}

console.log(autos.nombreDoble("Honda"));