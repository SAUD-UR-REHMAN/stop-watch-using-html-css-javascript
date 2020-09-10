
var miliseconds=0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var displaymiliseconds=0;
var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;
var interval = null;
var status = "stopped";


function stopWatch(){
miliseconds++;
    

   
    if(miliseconds>= 100){
        miliseconds = 0;
        seconds++;

        if(seconds >=60){
            seconds = 0;
            minutes++;
        }
        if(minutes>=60){
            minutes=0;
            hours++;
        }

    }

    
    if(miliseconds<10){
        displaymiliseconds="0"+miliseconds.toString();
    }
    else{
        displaymiliseconds=miliseconds;
    }
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

   
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds+":"+displaymiliseconds;

}



function startStop(){

    if(status === "stopped"){

        
        interval = setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}


function reset(){

    clearInterval(interval);
    miliseconds=0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}