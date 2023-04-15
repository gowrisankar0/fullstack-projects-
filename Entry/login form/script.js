const name=document.querySelector("#name");
const email=document.querySelector("#email");
const age=document.querySelector("#age");
const contact=document.querySelector("#contact");

const submitbtn=document.querySelector("button");
const tbody=document.querySelector("tbody");

var user=[];
submitbtn.addEventListener("click",()=>{


if(!name.value||!email.value||!age.value||!contact.value){
    alert("enter the valid input");
    return;
}
const userdata={
    
    name:name.value,
    email:email.value,
    age:age.value,
    contact:contact.value
}
user.push(userdata);
dispalydata();

name.value="";
email.value="";
age.value="";
contact.value="";


});

function dispalydata(){

    tbody.innerHTML="";
user.forEach((user) => {

    const tr =document.createElement("tr");
    const namedata=document.createElement("td");
    const emaildata=document.createElement("td");
    const age=document.createElement("td");
    const contact=document.createElement("td");

    namedata.innerText=user.name;
    emaildata.innerText=user.email;
    age.innerText=user.age;
    contact.innerText=user.contact;

   tr.append(namedata);
   tr.append(emaildata);
   tr.append(age);
   tr.append(contact);
   tbody.append(tr);
    
});

}





// user.push(userdata);
// user="";

