let hourEl=document.getElementById("hours")
let minuteEl=document.getElementById("minutes")
let secondEl=document.getElementById("seconds")

function digitalClock(){
    
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;
}
digitalClock(1000);



