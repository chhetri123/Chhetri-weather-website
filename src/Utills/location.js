const location=async (long,lat)=>{

    const url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=6fb513223d2df4b2b1e5869e588aefe6`
   
   try{
    const response =await fetch(url)
    const data=await response.json()
    if(data.code==="404"){
        throw new Error("Unable to Find Location")
    }
    
    return data.weather[0].description + " It's current temperature " + data.main.temp+ ' degree out. The wind speed is '+data.wind.speed+' m/s at '+data.wind.deg+' degree'

   }catch(error){
      throw new Error(error.message)
   }
}
module.exports=location