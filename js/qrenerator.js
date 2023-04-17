localStorage.setItem("user","DiegoEnriqueGonzálezGuerrero")

new QRCode(document.getElementById("qrgenerator"), "http://127.0.0.1:5500/qrgenerator.html/"+localStorage.getItem("user"));



console.log(localStorage.getItem("user"));