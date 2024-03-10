var user = [];
user = JSON.parse(localStorage.getItem("user"));
var signInEmail = document.getElementById("signEmail");
var signInPassword = document.getElementById("signPassword");

document.getElementById('login').addEventListener('click',function(){
if(signInEmail.value == '' || signInPassword.value == ''){
    document.getElementById('message').innerHTML = `
    <p class="text-center alert alert-warning "> all input are required</p>
    `
}else{
    checkUser();
}

})

function checkUser(){
    for(var i = 0 ; i< user.length;i++){
        if(signInEmail.value == user[i].email && signInPassword.value == user[i].password){
            var y = user[i].name
            localStorage.setItem("userName",y);
            location.href = '../../home/index.html';
            break;
        }
    }
}