let btn = document.getElementById("btn");
btn.addEventListener("click",async()=>{
    console.log("clicked")

     key = "ema_live_EjQdOxrbHfZIw3s8vEy4ZTQ53gUEJF1HYUhpYnsB"
     let email = document.getElementById("username").value;
     
     let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

     let res = await fetch(url)
     let result = await res.json();
     

    let str = ``;
    for(key of Object.keys(result)){
        str = str + `<div>${key}:${result[key]}</div>`
    }
    console.log(str);
    resultCont.innerHTML = str;

})