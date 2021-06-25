class Persona
{
    nombre:string;
    apellido:string;
    edad:number;

    constructor(nombre:string,apellido:string,edad:number)
    {
        this.apellido=apellido;
        this.edad=edad;
        this.nombre=nombre;
    }

    static PersonaToString(human:Persona)
    {
        return '"nombre"' +":"+ '"'+human.nombre + '"'+ ',"apellido"'+":" + '"'+human.apellido + '"'+',"edad"'+":" + '"'+human.edad + '"';
    }
    
}