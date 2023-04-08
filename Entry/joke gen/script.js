
const joke=document.getElementById("joke");
const jokebtn =document.getElementById("jokebtn");



function generatejoke(){
    const config ={
        headers:{
            accept:"application/json",
        }
    };

    fetch("https://icanhazdadjoke.com",config)
        .then((res) => {
            return res.json();
        })
        .then((data)=>{
       joke.innerHTML=data.joke;
        })
    }
    
generatejoke();

jokebtn.addEventListener("click",generatejoke);


