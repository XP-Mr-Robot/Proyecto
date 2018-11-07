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
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
