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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}