var endDate = new Date('2021/01/10 00:00:00');
var interval = 1000;


window.onload = function countdownTimer(){
var nowDate = new Date();
var period = endDate - nowDate ;
var addZero = function(n){return('0'+n).slice(-2);}
var addZeroDay = function(n){return('0'+n).slice(-3);}
if(period >= 0) {
var day = Math.floor(period / (1000 * 60 * 60 * 24));
period -=  (day　*(1000 * 60 * 60 * 24));
var hour = Math.floor(period / (1000 * 60 * 60));
period -= (hour *(1000 * 60 * 60));
var minutes =  Math.floor(period / (1000 * 60));
period -= (minutes * (1000 * 60));
var second = Math.floor(period / 1000);
var insert = "";
insert += '<h1 class="h">' + addZeroDay(day) +'日' + '</h1>';
insert += '<a href="#h"><div class="btn"></div></a>';
insert += '<h1 class="h" id="h">' + addZero(hour) + '時間'+'</h1>';
insert += '<a href="#m"><div class="btn"></div></a>';
insert +=  '<h1 class="m" id="m">' + addZero(minutes) +'分' + '</h1>';
insert += '<a href="#s"><div class="btn"></div></a>';
insert += '<h1 class="s" id="s">' + addZero(second)+ '秒'+ '</h1>';
document.getElementById('result').innerHTML = insert;
setTimeout(countdownTimer,10);
}
else{
    var insert = "";
    var number = 0;
    insert += '<h1 class="h">' + number + number + '</h1>';
    insert +=  '<h1 class="m">' + number + number + '</h1>';
    insert += '<h1 class="s">' + number + number + '</h1>';
    document.getElementById('result').innerHTML = insert;
}
}

countdownTimer();