const request=require('request');
const weather=(address,callback)=>{
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${address}&&appid=6fb513223d2df4b2b1e5869e588aefe6&units=metric`;
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to Connect',undefined)

        }else if(response.body.message){

            callback('Unable to find place',undefined)
        }else{
            const data={
                lat:response.body.coord.lat,
                long:response.body.coord.lon,
                location:response.body.name,
                minTem:response.body.main.temp_min,
                maxTem:response.body.main.temp_max,
                

                
                

            }
           
            callback(undefined,data)

        }

    })
  

}
module.exports=weather;