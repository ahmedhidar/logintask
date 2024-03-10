var signUpName = document.getElementById("signName");
var signUpEmail = document.getElementById("signEmail");
var signUpPassword = document.getElementById("signPassword");
var user = [];

if(localStorage.getItem("user")!= null){
    user = JSON.parse(localStorage.getItem("user"))
}else{
    user = [];
}


function add(){
    if(signUpName.value == ""||signUpEmail == "" ||signUpPassword == ""){
        document.getElementById("message").innerHTML = `
        <p class="text-center alert alert-danger "> all input are required</p>
        `
    }else{
        var obj = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        user.push(obj);
        location.href = '../login/index.html';
        localStorage.setItem('user', JSON.stringify(user))
    }
}
