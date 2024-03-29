
const path=require('path')
const express=require('express');;
const app=express();
const port=process.env.port || 3000;
const hbs=require('hbs')
const weather=require('./Utills/weather')
const location=require('./Utills/location')



const publicDicPath=path.join(__dirname,'../public');
const viewPath=path.join(__dirname,'../templete/views');
const partialPath=path.join(__dirname,'../templete/partials')

app.set('view engine','hbs')
app.set('views',viewPath) 
hbs.registerPartials(partialPath)






app.use(express.static(publicDicPath))

app.get('',(req,res)=>{
res.render('index',{
    title:"Weather ",
        surename:"chhetri",
        name:'Chhetri Rocks'
})
})



app.get('/help',(req,res)=>{
    res.render('help',{
        ok:'What kind a help you need?',
        title:'HELP',
        name:'Chhetri Don'
    })


    


})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Weather',
        img:'what you what to know',
        name:'Chhetri Don'

    })


})

app.get('/products',(req,res)=>{

    if(!req.query.search){
       return res.send({
            error:'You must provide search term'

        })

    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get(('/weather'),async (req,res)=>{
    if(!req.query.address){
        res.send({
            error:'Provide an Address'
        })
    
    }else{

    try{
        const citiyData=await weather(req.query.address)
        const description= await location(citiyData.long,citiyData.lat)
        res.send({
            weather:citiyData,
            discription:description
         })  

    }catch(error){
        res.send({error:error.message} )
    }
    }})

    


app.get('help/*',(req,res)=>{
    res.render('error',{
        title:404,
        error:'Help Artical not found',
        name:'Manish chhetri'
    })

})


app.get('*',(req,res)=>{
    res.render('error',{
        title:404,
        error:'Page not found',
        name:'Manish chhetri'


    })

})
app.listen(port,()=>{
    console.log('Server is up on port '+port)
})
