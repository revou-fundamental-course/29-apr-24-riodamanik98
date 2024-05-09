// this is Java Script

function validation() {
    console.log('good');
    alert("GOOD"); // Test Nav if Succesfull have notification "Good"
}

document.getElementById('home-btn').addEventListener('click' , () => validation ())
document.getElementById('home-btn2').addEventListener('click' , () => validation ())
document.getElementById('home-btn3').addEventListener('click' , () => validation ())

function ubahNama() {
    var namaElement = document.getElementById("nama");
    namaElement.textContent = "By Rio Damanik"; // Mengubah teks 
}

let validateForm = function() {     // Validasi untuk Memanggil Fungsi
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let option = document.getElementById('option').value;
    
    let errors = [];
  
    // Validasi username
    if (username.trim() === '') {
      errors.push('Username tidak boleh kosong');
    }
  
    // Validasi email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Email tidak valid');
    }
  
    // Tampilkan pesan kesalahan atau pemberitahuan
    let notificationDiv = document.getElementById('notification');
    notificationDiv.innerHTML = '';
    if (errors.length > 0) {
      errors.forEach(function(error) {
        let errorDiv = document.createElement('div');
        errorDiv.textContent = error;
        notificationDiv.appendChild(errorDiv);
      });
      notificationDiv.className = 'error';
    } else {
      // Jika tidak ada kesalahan, tampilkan pemberitahuan berhasil
      let successDiv = document.createElement('div');
      successDiv.textContent = 'Form berhasil diverifikasi. Data dapat dikirim.';
      successDiv.className = 'success';
      notificationDiv.appendChild(successDiv);
      // Di sini Anda bisa menambahkan logika untuk mengirimkan data form ke server atau melakukan tindakan lainnya.
    }
  }


    //Content slide show and auto
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