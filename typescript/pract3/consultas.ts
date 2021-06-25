class Consultas{

    public ejecutarGet(url:string,listener:Responseget)
    {
        let xml= new XMLHttpRequest();
        xml.onreadystatechange=()=>{
            if(xml.readyState===4)
            {
                listener.response(xml.status,xml.responseText)
            }
        }
        xml.open("GET",url,true);
        xml.send();
    }


}