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
function notEmpty(){
	var myText1 = document.getElementById('txf1');
	var myText2 = document.getElementById('txf2');
	var myText3 = document.getElementById('txf3');
	var myText4 = document.getElementById('txf4');
	var myText5 = document.getElementById('txf5');
	
	if(myText1.value != "" && myText2.value != "" && myText3.value != "" && myText4.value != "" && myText5.value != "")
		document.write("Cópiala y pégala en tu documento.  La ficha bibliográfica es : <br />   " + myText1.value +". (" +   myText2.value   +"). " + myText3.value+ '. ' + myText4.value +": " + myText5.value +".");		 
	else
		document.write("Te faltó llenar algun dato." );
        }
        
function notEmpty2(){
	var myText1 = document.getElementById('txf1');
	var myText2 = document.getElementById('txf2');
	var myText3 = document.getElementById('txf3');
	var myText4 = document.getElementById('txf4');
	var myText5 = document.getElementById('txf5');
	var myText6 = document.getElementById('txf6');

	if(myText1.value != "" && myText2.value != "" && myText3.value != "" && myText4.value != "" && myText5.value != ""&& myText6.value != "")
		document.write("Cópiala y pégala en tu documento.  La ficha bibliográfica es : <br />   " + myText1.value +". (" +   myText2.value   +"). " + myText3.value+ '. ' + myText4.value +", " + myText5.value +", " + myText6.value +". ");		 
	else
		document.write("Te faltó llenar algun dato." );
		}

        function notEmpty3(){
            var myText1 = document.getElementById('txf1');
            var myText2 = document.getElementById('txf2');
            var myText3 = document.getElementById('txf3');
            var myText4 = document.getElementById('txf4');
            var myText5 = document.getElementById('txf5');
            
            if(myText1.value != "" && myText2.value != "" && myText3.value != "" && myText4.value != "" && myText5.value != "")
                document.write("Cópiala y pégala en tu documento.  La ficha bibliográfica es : <br />   " + myText1.value +". (" +   myText2.value   +"). " + myText3.value+ '. ' + myText4.value +", " + myText5.value +".");		 
            else
                document.write("Te faltó llenar algun dato." );
                }
        
function notEmpty4(){
	var myText1 = document.getElementById('txf1');
	var myText2 = document.getElementById('txf2');
	var myText3 = document.getElementById('txf3');
	var myText4 = document.getElementById('txf4');
	var myText5 = document.getElementById('txf5');
	var myText6 = document.getElementById('txf6');
	var myText7 = document.getElementById('txf7');
	var myText8 = document.getElementById('txf8');

	if(myText1.value != "" && myText2.value != "" && myText3.value != "" && myText4.value != "" && myText5.value != ""&& myText6.value != "" && myText7.value != "" && myText8.value != "")
		document.write("Cópiala y pégala en tu documento.  La ficha bibliográfica es : <br />   " + myText1.value +". " +   myText2.value   +". " + myText3.value+ '. En ' + myText4.value +" (" + myText5.value +", " + myText6.value +") " + myText7.value +": " + myText8.value +". ");		 
	else
		document.write("Te faltó llenar algun dato." );
		}

        function notEmpty5(){
            var myText1 = document.getElementById('txf1');
            var myText2 = document.getElementById('txf2');
            var myText3 = document.getElementById('txf3');
            var myText4 = document.getElementById('txf4');
            var myText5 = document.getElementById('txf5');
            var myText6 = document.getElementById('txf6');
            var myText7 = document.getElementById('txf7');
        
            if(myText1.value != "" && myText2.value != "" && myText3.value != "" && myText4.value != "" && myText5.value != ""&& myText6.value != "" && myText7.value != "")
                document.write("Cópiala y pégala en tu documento.  La ficha bibliográfica es : <br />   " + myText1.value +". (" +   myText2.value   +"). " + myText3.value+ '. En ' + myText4.value +"(" + myText5.value +"). " + myText6.value +": " + myText7.value +". ");		 
            else
                document.write("Te faltó llenar algun dato." );
                }
        
function notEmpty6(){
	var myText1 = document.getElementById('txf1');
	var myText2 = document.getElementById('txf2');
	var myText3 = document.getElementById('txf3');
	var myText4 = document.getElementById('txf4');
	var myText5 = document.getElementById('txf5');
	var myText6 = document.getElementById('txf6');

	if(myText1.value != "" && myText2.value != "" && myText3.value != "" && myText4.value != "" && myText5.value != ""&& myText6.value != "")
		document.write("Cópiala y pégala en tu documento.  La ficha bibliográfica es : <br />   " + myText1.value +". (" +   myText2.value   +"). " + myText3.value+ '. ' + myText4.value +", de " + myText5.value +" Sitio web: " + myText6.value);		 
	else
		document.write("Te faltó llenar algun dato." );
		}

        function notEmpty7(){
            var myText1 = document.getElementById('txf1');
            var myText2 = document.getElementById('txf2');
            var myText3 = document.getElementById('txf3');
            var myText4 = document.getElementById('txf4');
            var myText5 = document.getElementById('txf5');
            var myText6 = document.getElementById('txf6');
            var myText7 = document.getElementById('txf7');
            var myText8 = document.getElementById('txf8');
        
            if(myText1.value != "" && myText2.value != "" && myText3.value != "" && myText4.value != "" && myText5.value != ""&& myText6.value != "" && myText7.value != "" && myText8.value != "")
                document.write("Cópiala y pégala en tu documento.  La ficha bibliográfica es : <br />   " + myText1.value +". (" +   myText2.value   +"). " + myText3.value+ '. ' + myText4.value +", " + myText5.value +", " + myText6.value +". " + myText7.value +", De " + myText8.value +" Base de datos. ");		 
            else
                document.write("Te faltó llenar algun dato." );
                }
        