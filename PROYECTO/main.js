function updateHour (){
    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();

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
}

setInterval(updateHour,1000)