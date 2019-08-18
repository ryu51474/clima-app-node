const axios = require('axios');

const getLugarLatLong = async(address) => {
    const encodeUrl = encodeURI(address)

    const instance = axios.create({ //esta es la instancia de la ejecucion del llamado de datos a la fuente (api)
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        //params: {'location':'Guayaquil'},
        //timeout: 1000, no lo usaremos pero es para darle un delay o tardanza a la respuesta y tomar deciciones segun ello
        headers: {'x-rapidapi-key': '09864d74e1msh77c6b981e2a6f16p1e49dfjsn0e73be69e525'} //el api key es de la cuenta en la pagina unico para cada usuario
    });

    const respuesta = await instance.get();
    console.log(`El estatus de la peticion del lugar fue ${respuesta.status}`);
    if (respuesta.data.Results.length === 0) throw new Error(`No hay resultados para ${address}`);

    const datosRecibidos = respuesta.data.Results[0];
    const direccion = datosRecibidos.name;
    const latitud = datosRecibidos.lat;
    const longitud = datosRecibidos.lon;

    return{
        direccion,
        latitud,
        longitud
    }


}


module.exports={
    getLugarLatLong,
};