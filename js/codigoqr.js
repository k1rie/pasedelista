const scanner = new Html5QrcodeScanner('codigoqr__scan', { 
    // Scanner will be initialized in DOM inside element with id of 'reader'
    qrbox: {
        width: 250,
        height: 250,
    },  // Sets dimensions of scanning box (set relative to reader element width)
    fps: 20, // Frames per second to attempt a scan
});


scanner.render(success, error);
// Starts scanner

function success(result) {
    
    
    window.location.href = result;
console.log(result)
d
}

function error(err) {
    console.error(err);
    // Prints any errors to the console
}


var codigoqr = document.querySelector("#codigoqr__scan")



codigoqr.style.border = "0px"

console.log(codigoqr)