let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let inp = document.getElementById("inp");

function qrGenerate(){
    if(inp.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inp.value;
    }
}