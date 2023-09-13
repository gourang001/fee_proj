var loginUserName = document.getElementById("loginUsername");
var registerUserName = document.getElementById("registerUsername");
var loginPassword = document.getElementById("loginPassword");
var registerPassword = document.getElementById("registerPassword");
var submitButton = document.getElementById("loginSubmit");
var registerButton = document.getElementById("registerSubmit");


function registerFunction(username,password){
    localStorage.setItem(username,password);
}

function submitFunction(e){
    e.preventDefault();
    if(localStorage.getItem(loginUserName.value) == loginPassword.value){
        localStorage.setItem("loggedUser",loginUserName.value);
        
        window.open("todoList.html","_self");
        alert("Logged in Successfully!");
 
    }
    else{
        alert("Wrong Password");
    }
}
function registerUserFunction(e){
    if(localStorage.getItem(registerUserName.value) == undefined){
        localStorage.setItem(registerUserName.value,registerPassword.value);
        alert("You have been succesfully registered!")
    }
    else{
        alert("User already Exists! Try a different Username!");
    }
}

submitButton.addEventListener("click",submitFunction);
registerButton.addEventListener("click",registerUserFunction);

registerFunction("gourang","password");
registerFunction("paras","password2");
registerFunction("gayak","password3");
