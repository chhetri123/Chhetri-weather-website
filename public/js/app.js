
const wethForm=document.querySelector('form');
const search=document.querySelector('input');
const content1=document.querySelector('#content-1')
const content2=document.querySelector('#content-2')
const content3=document.querySelector('#content-3')
const content4=document.querySelector('#content-4')



wethForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location= search.value;
    content1.textContent='Loading....';
    content2.innerHTML='';
    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
   response.json().then((data)=>{
       if(data.error){
           content1.textContent=data.error
       }else{
           const jsonData=data.weather;
           content1.textContent=''
           content2.innerHTML=`The latitute=${jsonData.lat}<br> The longitute=${jsonData.long}<br>And Location =${jsonData.location}`
           content4.innerHTML=`Max Temperature=${jsonData.maxTem}°C <br> Min Temperature=${jsonData.minTem}°C`
           content3.innerHTML=`${data.discription}`
           search.value=''
           
       }
       
        
    })
})








})


