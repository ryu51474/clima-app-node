const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc:'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


//argv.direccion
console.log(argv.direccion);
console.log(`Usted solicitó por la ciudad ${argv.direccion}`);
/* const ciudad = lugar.getLugarLatLong(argv.direccion)
    .then(console.log) */
/* clima.getClima(ciudad.latitud,ciudad.longitud)
    .then(console.log)
    .catch(console.log); */

const getInfo = async (direccion)=>{
    try {
        const coordenadas = await lugar.getLugarLatLong(direccion);
    
        const temperatura = await clima.getClima(coordenadas.latitud,coordenadas.longitud);

        return `El clima de ${coordenadas.direccion} es de temperatura ${temperatura} `
    } catch (error) {
        return `No se pudo determinar el clima de ${argv.direccion} por el error ${error}`;
    }
    
}

getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log);
   

/* const axios = require('axios');

const getLugarLatLong = async(direccion) => {
    const encodeUrl = encodeURI(direccion)

    const instance = axios.create({ //esta es la instancia de la ejecucion del llamado de datos a la fuente (api)
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        //params: {'location':'Guayaquil'},
        //timeout: 1000, no lo usaremos pero es para darle un delay o tardanza a la respuesta y tomar deciciones segun ello
        headers: {'x-rapidapi-key': '09864d74e1msh77c6b981e2a6f16p1e49dfjsn0e73be69e525'}
    }); */

/* instance.get()
            .then((result) => {
                console.log(result.status);
                console.log(result.data.Results[0]);
            }).catch((err) => {
                console.log('Error!!, la causa es esto :  '+err);
            }); */