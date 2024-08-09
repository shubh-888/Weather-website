
let inp = document.querySelector(".city");
let back_color = document.querySelector(".background");
let p= document.querySelector(".cityname");
let btns = document.querySelector(".btn");
let temp = document.querySelector(".degree");
let speed = document.querySelector(".windspeed");
let humidshow = document.querySelector(".humid");
let dateshow = document.querySelector(".date");
let timeshow = document.querySelector(".time");
let showday = document.querySelector(".day");
let clearcty = document.querySelector(".clear");
let darkmode = document.querySelector(".mode");
let head = document.querySelector("h2");
let latdata = document.querySelector(".lat");
let log= document.querySelector(".lon");
humid_desc = document.querySelector(".humid_description");
  let cityn = inp.value;

async function showtemp(cityn){
    let response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityn}` + `&appid=263d2f33a0cc977a192da72980434dfa&units=metric`);
    var data = await response1.json();
    console.log(data);
    p.innerText= data.name;
    temp.innerText= Math.floor(data.main.temp)+"°C";
    let valuet = Math.floor(data.main.temp);
    console.log(valuet);
    speed.innerText = data.wind.speed +"km/h";
    humidshow.innerText = data.main.humidity +"%"; 
    log.innerText  = data.coord.lon;
    latdata.innerText  = data.coord.lat;
    
    
    
     
}
 

btns.addEventListener("click",()=>{
   showtemp(inp.value);
   
});

function clear_city (){
  inp.value = "";
}

clearcty.addEventListener("click",()=>
{
  clear_city();
});
function  changebg(){
  back_color.classList.toggle("background2");
  darkmode.innerHTML = `Light Mode | <i class="fa-regular fa-moon"></i>`;
  darkmode.classList.toggle("btncolor");

}
 darkmode.addEventListener("click" ,()=>
{
  changebg();
});
