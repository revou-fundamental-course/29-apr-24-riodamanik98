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