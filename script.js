const openbtn = document.querySelector("#start");
const chatbot = document.getElementById("chatbot");
const closebot = document.getElementById("close");
console.log(openbtn)
console.log(chatbot)
openbtn.addEventListener("click",()=>{
    chatbot.style.display = "block";
})
closebot.addEventListener("click",()=>{
    chatbot.style.display = "none";
    console.log("button clikced")
})

