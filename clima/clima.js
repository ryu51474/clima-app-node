const axios = require('axios');

const getClima = async (latitud,longitud) =>{
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=37795de00535e984d6777a4d03536165&units=metric`)
    console.log(`El estatus de la peticion del clima fue ${respuesta.status}`);
    if (respuesta.data.main.length === 0) throw new Error(`No hay resultados para ${latitud},${longitud}`);
    const temperatura = respuesta.data.main.temp;

    return temperatura;
}

module.exports={
    getClima
}