const openbtn = document.querySelector("#start");
const chatbot = document.getElementById("chatbot");
const closebot = document.getElementById("close");
openbtn.addEventListener("click",()=>{
    chatbot.style.display = "block";
})
closebot.addEventListener("click",()=>{
    chatbot.style.display = "none";
    console.log("button clikced")
})

console.log("linked")

const chatInput = document.querySelector("textarea")
const sendchatbtn = document.getElementById("sendbtn")

let allmessages = document.querySelector(".all-messages")
let usermessage;



function getpresenttime(){
    var d=new Date();
    var hou = d.getHours();
    var min = d.getMinutes();
    var sec=d.getSeconds();
    var ap="AM";
    if (hou==0) hou=12;
    if (hou >12 ) {
        hou-=12; 
        ap="PM";
    }
    hou = hou<10 ? "0" + hou : hou;    
    sec = sec<10 ? "0" + sec : sec;
    let time = `${hou}:${min} ${ap}`;
    return time;
}

const createbotmessage = (message)=>{
    console.log(message)
    let botmessage = document.createElement("div")
    botmessage.classList.add("msg-bot")
    allmessages.append(botmessage)
    let info = document.createElement("div")
    info.classList.add("info")
    let sym = document.createElement("span")
    sym.classList.add("material-symbols-outlined")
    sym.innerHTML = "robot_2";
    let title = document.createElement("h5")
    title.innerHTML = "Bot"
    info.append(sym)
    info.append(title)
    botmessage.append(info)
    let botm = document.createElement("p")
    botm.innerText = "Typing...."
    let msgtime = getrandomtime();
    setTimeout(()=>{
        botm.innerText = message;
    },(msgtime*1000));
    
    botmessage.append(botm)
    let time = getpresenttime();
    let showtime = document.createElement("p")
    showtime.classList.add("time")
    showtime.innerText = time;
    botmessage.append(showtime);
}


const getrandomtime=()=>{
    let time = Math.floor((Math.random()*3)+1)
    return time
}


const createusermessage = (message)=>{

    let usermsg = document.createElement("div")
    usermsg.classList.add("msg-user")
    allmessages.append(usermsg)
    let mes = document.createElement("p")
    mes.innerText = message
    usermsg.append(mes)
    
    let time = getpresenttime();
    let showtime = document.createElement("p")
    showtime.classList.add("time")
    showtime.innerText = time;
    usermsg.append(showtime);
}




const handlechat = ()=>{
    usermessage = chatInput.value.trim()
    if(!usermessage) return;
    console.log(usermessage)
    createusermessage(usermessage)
    chatInput.value = ""
    createbotmessage("server not reachable")
    
    
}
sendchatbtn.addEventListener("click",handlechat)