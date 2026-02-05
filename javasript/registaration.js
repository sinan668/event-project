
function showFields() {

  // Get selected radio value
  let role = document.querySelector('input[name="role"]:checked').value;
  
  // Hide both first
  document.getElementById("employBox").style.display = "none";
  document.getElementById("providerBox").style.display = "none";

  // Show based on selection
  if (role === "Employ") {
    document.getElementById("employBox").style.display = "block";
  }

  if (role === "provider") {
    document.getElementById("providerBox").style.display = "block";
  }
}


// login js 


const userNameInput = document.getElementById("Username");
const userPasswordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-button");
const messageSection = document.getElementById("message")




loginBtn.addEventListener('click',function(){
    const Username = userNameInput.value
    const password = userPasswordInput.value


    if(Username === ""){
        messageSection.textContent = "please enter user name"
        messageSection.style.color = "red"
    }else if(password === ""){
        messageSection.textContent = "please enter user password"
        messageSection.style.color = "red"
    }else{
        messageSection.textContent = "login sucssusfuly"
        messageSection.style.color = "green"
    }

})

