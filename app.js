
function startClock() {
    let currTime    =   new Date();
    let currHour    =   currTime.getHours();
    let currMin     =   currTime.getMinutes();
    let currSec     =   currTime.getSeconds();
    let currTimeEl  =   document.getElementById("clock-time");
    
    // let clock       =   (currHour < 10 ? "0" + currHour: currHour) + ":" + 
    //                     (currMin  < 10 ? "0" + currMin : currMin ) + ":" + 
    //                     (currSec  < 10 ? "0" + currSec : currSec );
    
    let clock = addZero(currHour) + ":" + 
                addZero(currMin) + ":" + 
                addZero(currSec);
    
    function addZero(num) {
        if (num < 10) {num = "0" + num};
        return num;
    }

    currTimeEl.innerHTML = clock;
    let t = setTimeout(startClock, 500);
}

document.onload(startClock());