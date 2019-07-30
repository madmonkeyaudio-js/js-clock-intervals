let seconds = document.getElementById('second');
let minutes = document.getElementById('minute');
let hours = document.getElementById('hour');

let secTick = new Date().getSeconds();
let minTick = new Date().getMinutes();
let hrTick = new Date().getHours();
secondRotation(secTick);
minuteRotation(minTick);
hourRotation(hrTick);

function secondRotation(sec){
    return seconds.style.transform = "rotate(" + ((sec/60) * 360)+ "deg)";   
}
function minuteRotation(min){
    return minutes.style.transform = "rotate(" + ((min/60) * 360) + "deg)";
}
function hourRotation(hr){
    return hours.style.transform = "rotate(" + ((hr/12) * 360) + "deg)";
}


function secHand(){
    let seconds = document.getElementById('second');
    //console.log('tick');
    let secTick = new Date().getSeconds()/60 * (360);
    seconds.style.transform = "rotate(" + secTick + "deg)";   
}
setInterval(secHand, 1000);

function minHand(){
    let minutes = document.getElementById('minute');
        //console.log('tick')
    let minTick = new Date().getMinutes()/60 * 360;
    minutes.style.transform = "rotate(" + minTick + "deg)";
}
setInterval(minHand, 60000);

function hourHand(){
    let hours = document.getElementById('hour');
        //console.log('tick')
    let hrTick = new Date().getHours()/12 * 360;
    hours.style.transform = "rotate(" + hrTick + "deg)";
}
setInterval(hourHand, 720000);



