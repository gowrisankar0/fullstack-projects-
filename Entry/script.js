function displaytime(){
    const  date =new Date();
let  hours=date.getHours();

let  minitue =date.getMinutes();
let seconds = date.getSeconds();
let session = "PM";

if (hours>12){
    session ="AM";

}
hours = hours>10?hours: "0" +hours;
minitue = minitue>10?minitue: "0" +minitue;
seconds = seconds>10?seconds: "0" +seconds;

const time = hours + ":"+ minitue + ":"+seconds +" " +session;
console.log(time);

document.getElementById("time").innerText=time;


    
}
setInterval(()=>{

    displaytime();
},1000)


displaytime();