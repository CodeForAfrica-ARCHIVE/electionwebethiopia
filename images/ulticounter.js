function ulticountdown(time, id, format, keepCounting, zero, langarray){
     timeleft = time;
     var countUp = false;
     if (timeleft < 0) {
       if (keepCounting == 0) {
         timeleft = 0; 
       } else {
         timeleft *= -1;        
         countUp = true;
       }
     }
     seconds = timeleft%60;
     timeleft -= seconds;
     timeleft = timeleft/60;
     minutes = timeleft%60;
     timeleft -= minutes;
     timeleft = timeleft/60;
     hours = timeleft%24;
     timeleft -= hours;
     days = timeleft/24;
     var counterstring = '';

     if (zero == 1) {
       if (seconds < 10) {
         seconds = '0'+seconds; 
       }
       if (minutes < 10) {
         minutes = '0'+minutes; 
       }
       if (hours < 10) {
         hours = '0'+hours; 
       }
     }
     if (format == 1) {     
       
       if (days != 0) {
         if (days != 1) {
           counterstring = counterstring+" "+days+" "+langarray[1];
         } else {
           counterstring = counterstring+" "+days+" "+langarray[0];
         }
       }
       if (hours != 0) {

         if (hours != 1) {
           counterstring = counterstring+" "+hours+" "+langarray[3];
         } else {
           counterstring = counterstring+" "+hours+" "+langarray[2];	 
	 }
       }
       if (minutes != 0) {
         if (minutes != 1) {
           counterstring = counterstring+" "+minutes+" "+langarray[5];
         } else {
           counterstring = counterstring+" "+minutes+" "+langarray[4];
	 
	 }
       }
       if (seconds != 1) {
         counterstring = counterstring+" "+seconds+" "+langarray[7];
       } else {
         counterstring = counterstring+" "+seconds+" "+langarray[6];
       
       }
    }  else if (format == 2) { 
       if (days != 0) {
         if (days != 1) {
           counterstring = counterstring+" "+days+" "+langarray[1];
         } else {
           counterstring = counterstring+" "+days+" "+langarray[0];
         }
       }
       if (hours != 0) {

         if (hours != 1) {
           counterstring = counterstring+" "+hours+" "+langarray[3];
         } else {
           counterstring = counterstring+" "+hours+" "+langarray[2];	 
	 }
       }
       if (minutes != 0) {
         if (minutes != 1) {
           counterstring = counterstring+" "+minutes+" "+langarray[5];
         } else {
           counterstring = counterstring+" "+minutes+" "+langarray[4];
	 
	 }
       }

    } else if (format == 3) {     
       if (days != 0) {
         if (days != 1) {
           counterstring = counterstring+" "+days+" "+langarray[1];
         } else {
           counterstring = counterstring+" "+days+" "+langarray[0];
         }
       }
       if (hours != 0) {

         if (hours != 1) {
           counterstring = counterstring+" "+hours+" "+langarray[3];
         } else {
           counterstring = counterstring+" "+hours+" "+langarray[2];	 
	 }
       }
    
    } else if (format == 4) {     
       if (days != 0) {
         if (days != 1) {
           counterstring = counterstring+" "+days+" "+langarray[1];
         } else {
           counterstring = counterstring+" "+days+" "+langarray[0];
         }
       }
   
    } else if (format == 5) {     
       if (days != 0) {
         if (days != 1) {
           counterstring = counterstring+" "+days+" "+langarray[1];
         } else {
           counterstring = counterstring+" "+days+" "+langarray[0];
         }
       }
       counterstring += " "+hours+":"+minutes+":"+seconds;
    } else if (format == 6) {     
       counterstring = days;
    }else {     
    // we should never get here, but for safety add the last one as default case.
      if (days != 0) {
         if (days != 1) {
           counterstring = counterstring+" "+days+" "+langarray[1];
         } else {
           counterstring = counterstring+" "+days+" "+langarray[0];
         }
       }
       counterstring += " "+hours+":"+minutes+":"+seconds;    
     }

var newdiv = document.createElement("div");
newdiv.innerHTML = counterstring;
var olddiv = document.getElementById("counter"+id);
var parent = olddiv.parentNode;
parent.removeChild(olddiv);
newdiv.id = "counter"+id;
parent.appendChild(newdiv);


if (countUp == true) {
  newtime = time-1;
} else {
  newtime = time-1;
}
setTimeout("ulticountdown("+newtime+","+id+","+format+", "+keepCounting+", "+zero+", langarray)",1000);
}
