function updateHour (){
    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();
console.log(date)
    var elementHours = document.getElementById("pHours");
    var elementMinutes = document.getElementById("pMinutes");
    var pWelcome = document.getElementById("contWelcome")

    elementHours.textContent = hours;
    elementMinutes.textContent = minutes;

    if(hours>= 8 && minutes >= 1 && hours < 12){
        pWelcome.textContent = "Buenos dias"
    }
    if(hours>=12 && minutes >= 1 && hours < 19){
        pWelcome.textContent = "Buenas tardes"
    }
    if(hours>=19 && minutes >=1){
        pWelcome.textContent = "Buenas noches"
    }

    if (hours   < 10) {hours   = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
}

setInterval(updateHour,1000)

function check() {
document.getElementById("myVideo").style.opacity = 1;
document.getElementById("google").style.opacity = 0;
document.getElementById("google").style.visibility = "hidden"
}

function uncheck() {
  document.getElementById("myVideo").style.opacity = 0
  document.getElementById("google").style.opacity = 1;
  document.getElementById("google").style.visibility = "visible"


}

function searchON(){
  document.getElementById("search").style.opacity = 1
  document.getElementById("search").style.visibility = "visible"
  document.getElementById("google").style.opacity = 0
  document.getElementById("google").style.visibility = "hidden"
}
function searchOFF(){
  document.getElementById("search").style.opacity = 0
  document.getElementById("search").style.visibility = "hidden"
  document.getElementById("google").style.opacity = 1
  document.getElementById("google").style.visibility = "visible"
}
