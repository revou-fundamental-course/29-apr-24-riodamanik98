// this is Java Script

function validation() {
    console.log('good');
    alert("GOOD");
}

document.getElementById('home-btn').addEventListener('click' , () => validation ())
document.getElementById('home-btn2').addEventListener('click' , () => validation ())
document.getElementById('home-btn3').addEventListener('click' , () => validation ())

function ubahNama() {
    var namaElement = document.getElementById("nama");
    namaElement.textContent = "By Rio Damanik"; // Mengubah teks menjadi "Hei"
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const optionInput = document.getElementById("inputType");
    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const optionError = document.getElementById("inputType-error");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = usernameInput.value;
      const email = emailInput.value;
      const option = optionInput.value;
  
      if (username === "") {
        usernameError.innerHTML = "Username Tidak boleh kosong!";
      } else {
        usernameError.innerHTML = "";
      }
  
      if (email === "") {
        emailError.innerHTML = "Email Tidak boleh kosong!";
      } else {
        emailError.innerHTML = "";
      }
  
      if (option === "") {
        optionError.innerHTML = "Option Tidak boleh kosong!";
      } else {
        optionError.innerHTML = "";
      }
  
      if (username!== "" && email!== "" && option!== "") {
        // Form is valid, you can submit it here
        console.log("Form is valid!");
      }
    });
  });