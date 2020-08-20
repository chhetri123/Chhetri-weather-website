const request=require('request')
const location=(long,lat,callback)=>{

    const url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=6fb513223d2df4b2b1e5869e588aefe6`
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback('Unable to Connect')

        }else if(res.body.message){
            callback(res.body.message,undefined)

        }else{
            const weather=res.body;
            const data=weather.weather[0].description + " It's current temperature " + weather.main.temp+ ' degree out. The wind speed is '+weather.wind.speed+' m/s at '+weather.wind.deg+' degree'
            callback(undefined,data)

        }
    })
}
module.exports=location