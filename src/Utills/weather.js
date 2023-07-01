const request = require('request');
const weather = async (address) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&&appid=6fb513223d2df4b2b1e5869e588aefe6&units=metric`;
    try {

        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if(data.cod=="404"){
            
            throw Error(data.message)
        }
       
        const arrangeData = {
            lat: data.coord.lat,
            long: data.coord.lon,
            location: data.name,
            minTem: data.main.temp_min,
            maxTem: data.main.temp_max,

        }
        return arrangeData;
    }catch (error) {
        throw  Error(error.message)
}
}
module.exports = weather;