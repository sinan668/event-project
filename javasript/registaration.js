
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

