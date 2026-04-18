function saveContact(e){
e.preventDefault();

let data = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("msg").value,
time: new Date().toLocaleString()
};

let old = JSON.parse(localStorage.getItem("logs") || "[]");
old.push(data);
localStorage.setItem("logs", JSON.stringify(old));

alert("Message Saved Locally (Demo Mode)");
}

document.addEventListener("click", (e)=>{
console.log("Clicked:", e.target.innerText);
});

// COUNTERS
function count(id, end){
let el = document.getElementById(id);
if(!el) return;

let i = 0;
let x = setInterval(()=>{
i++;
el.innerText = i;
if(i>=end) clearInterval(x);
},10);
}

window.onload = ()=>{
count("clients",500);
count("servers",1200);
};