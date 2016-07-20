
var i = 0
	
function update(){
// Get the current time in millisecond since 1970 (UNIX epoch)
var now = Date.now();
// var rioStart = Date.parse('September 17, 2016 16:00');
// var rioStart = new Date('September 17, 2016 16:00');

var userMonth = document.getElementById('month').value;
var userDay = document.getElementById('day').value;
var userYear = document.getElementById('year').value;
var userHour = document.getElementById('hours').value;
var userMinute = document.getElementById('minutes').value;

var userStart = userMonth + " " + userDay + ", " + userYear + " " + userHour + ":" + userMinute;
var userDate = new Date(userStart);

console.log(userDate);
console.log(userStart);

// Time in seconds between the current moment and the start of Rio 2016
var getTimeTillRio = (userDate - now) / 1000;

// var centiseconds = Math.floor((getTimeTillRio * 100) % 100);
var seconds = Math.floor(getTimeTillRio % 60);
var minutes = Math.floor((getTimeTillRio / 60) % 60);
var hours = Math.floor(((getTimeTillRio / 60) / 60) % 24);
var days = Math.floor((((getTimeTillRio / 60) / 60) / 24) % 7);
var weeks = Math.floor(((((getTimeTillRio / 60) / 60) / 24) / 7));




var lineUp = ['THE KILLERS', 'TWENTY 0NE PIL0TS', 'BECK', 'DEADMAU5', 'THE LUMINEERS', 'G-EASY', 'ALABAMA SHAKES', 'COLLEGROVE (LIL WAYNE AND 2CHAINZ)', 'BAND OF HORSES', 'JAMES BAY', 'KESHA', 'BIG BOI', 'CHVRCHES', 'LOGIC', 'GROUPLOVE', 'CITY AND COLOUR', 'NATHANIEL RATELIFF & THE NIGHT SWEATS', 'LEON BRIDGES', 'DJ MUSTARD', 'DNCE', 'MELANIE MARTINEZ', 'RAURY', 'DAYA', 'ST. LUCIA', 'MAYER HAWTHORNE', 'LUCIUS', 'CORINNE BAILEY RAE', 'PETE YORN', 'ZELLA DAY', 'PETER BJORN AND JOHN', 'JOHNNYSWIM', 'JOSEPH', 'NF', 'THE COATHANGERS', 'BALKAN BEAT BOX', 'THE SHADOWBOXERS']

document.getElementsByClassName("artist")[0].innerHTML = lineUp[i];
i++;
if (i === lineUp.length){
	i = 0;
}
console.log(i);
// document.getElementsByClassName('centiseconds-number')[0].innerHTML = centiseconds;
document.getElementsByClassName('seconds-number')[0].innerHTML = seconds;
document.getElementsByClassName('minutes-number')[0].innerHTML = minutes;
document.getElementsByClassName('hours-number')[0].innerHTML = hours;
document.getElementsByClassName('days-number')[0].innerHTML = days;
document.getElementsByClassName('weeks-number')[0].innerHTML = weeks;

if (isNaN(userDate)){
document.getElementsByClassName('seconds-number')[0].innerHTML = 00;
document.getElementsByClassName('minutes-number')[0].innerHTML = 00;
document.getElementsByClassName('hours-number')[0].innerHTML = 00;
document.getElementsByClassName('days-number')[0].innerHTML = 00;
document.getElementsByClassName('weeks-number')[0].innerHTML = 00;
}

} //closing bracket for update();



window.setInterval(update, 1000);

// var countdownTimer = document.getElementById("countdown-timer");
// document.querySelector('.weeks-number');

