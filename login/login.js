const userNameInput = document.getElementById("Username");
const userPasswordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-button");




loginBtn.addEventListener('click',function(){
    const Username = userNameInput.value
    const password = userPasswordInput.value


    if(Username === ""){
        alert('please enter username')
    }else if(password === ""){
        alert('please enter password')
    }else{
        alert('login sucssus')
    }

})



