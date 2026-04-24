let form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let team = document.getElementById("team").value;
    let remember = document.getElementById("remember").checked;
    
    if(remember){
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("age", age);
        localStorage.setItem("team", team);
    }

alert("Welcome to FORMULA One!");
    window.location.href = "../index.html";
});

let savedName = localStorage.getItem("name");
let savedEmail = localStorage.getItem("email");
let savedAge = localStorage.getItem("age");
let savedTeam = localStorage.getItem("team");

if(savedName) {
    document.getElementById("name").value = savedName;
    document.getElementById("email").value = savedEmail;
    document.getElementById("age").value = savedAge;
    document.getElementById("team").value = savedTeam;
    document.getElementById("remember").checked = true;
}

