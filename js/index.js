let signUsername = document.getElementById("userName");
// let signUsername1 = document.getElementById("userName").value;
let signEmail = document.getElementById("signEmail");
let signPass = document.getElementById("signPass");
let signupBtn = document.getElementById("signupBtn");
let signAlert = document.getElementById("signAlert");
let signsucc = document.getElementById("signsucc");
let nameValid = document.getElementById("nameValid");

let loginBtn = document.getElementById("loginBtn");
let logEmail = document.getElementById("logEmail");
let logPass = document.getElementById("logPass");
let logAlert = document.getElementById("logAlert");
let log2war = document.getElementById("log2war");

let welcome1 = document.getElementById("welcome1");
let logOutBtn = document.getElementById("logOutBtn");



let arr = [];

if (localStorage.getItem("acc") != null) {
  arr = JSON.parse(localStorage.getItem("acc"));
}
// -------------------signup-------------------------

function signUP() {
  if (userNameValidation() == true && emailValidation() == true) {
    let accounts = {
      signUsername: signUsername.value,

      signEmail: signEmail.value,

      signPass: signPass.value,
    };
    arr.push(accounts);
    localStorage.setItem("acc", JSON.stringify(arr));

    clearSignup();

    signsucc.classList.remove("d-none");
    signAlert.classList.add("d-none");
  } else {
    signAlert.classList.remove("d-none");
    signsucc.classList.add("d-none");
  }
}

//-------------------login--------------------------

// loginBtn.addEventListener('click',function (e){
//     login();
// })

function login() {
  for (let i = 0; i < arr.length; i++) {
    if (
      logEmail.value.toLowerCase() == arr[i].signEmail.toLowerCase() &&
      logPass.value == arr[i].signPass
    ) {
      
      localStorage.setItem('user',JSON.stringify(arr[i].signUsername));


      window.location.href = "welcome.html";
      
      // document.getElementById('welcome1').innerHTML="welcome"+arr[i].signUsername;

      // console.log(arr[i].signUsername)

    } else if (!logEmail.value || !logPass.value) {
      logAlert.classList.remove("d-none");
    } else {
      log2war.classList.remove("d-none");

      log2war.innerHTML = "incorrect email or password";
    }
  }
}
//-----------------------log out ---------------------
// logOutBtn.addEventListener('click',function(e)
// {
//     logout();
// })

function logout() {
  window.location.href = "index.html";
}
//------------------welcome-------------------




//-----------------clear signup----------------

function clearSignup() {
  signUsername = document.getElementById("userName").value = null;
  signEmail = document.getElementById("signEmail").value = null;
  signPass = document.getElementById("signPass").value = null;
}

//----------signupValidation------------------------

function userNameValidation() {
  let text = signUsername.value;

  let regex = /^[a-z]{3,20}$/;

  if (regex.test(text)) {
    signUsername.classList.add("is-valid");
    signUsername.classList.remove("is-invalid");

    return true;
  } else {
    signUsername.classList.remove("is-valid");
    signUsername.classList.add("is-invalid");

    return false;
  }
}

function emailValidation() {
  let text = signEmail.value;

  let regex = /^(?=.*?[a-z])(?=.*?[#?!@$ %^&*-]).{8,}$/gm;

  if (regex.test(text)) {
    signEmail.classList.add("is-valid");
    signEmail.classList.remove("is-invalid");

    return true;
  } else {
    signEmail.classList.remove("is-valid");
    signEmail.classList.add("is-invalid");
    return false;
  }


}
