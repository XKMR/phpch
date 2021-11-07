window.setInterval(function () {
    document.getElementById('frame').contentWindow.location.reload();
}, 400);
function sb() {
localStorage.setItem("name", document.getElementById("nm").value);
}
function load() {
document.getElementById("nm").value = localStorage.getItem("name");
var d = new Date(); // for now
document.getElementById("hr").value = d.getHours(); // => 9
document.getElementById("min").value = d.getMinutes(); // =>  30
document.getElementById("sec").value = d.getSeconds(); // => 51
}
var namein = document.getElementById("nm");
window.setInterval(function () {
if (namein && namein.value) {
document.getElementById("sv").disabled = false;
} else {
document.getElementById("sv").disabled = true;

}
}, 400);