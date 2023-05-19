var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if(localStorage.setItem("theme", "dark") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}
if(localStorage.setItem("theme", "dark") == "light"){
    document.body.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.setItem("theme", "dark") == "dark"){
document.body.classList.add("dark-btn-on");
document.body.classList.add("dark-theme");
}
 else{
    localStorage.setItem("theme", "light");
 }