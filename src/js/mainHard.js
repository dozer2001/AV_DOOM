'use strict';
let nowDate = new Date();

function consoleDate(date) {
    let d = date.getDate(),
        m = date.getMonth();
    if ( d < 10){
        d = '0' + d;
    }
    if (m < 10){
        m = '0' + m;
    }
    console.log(nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds() + ' ' + d + '.' + m + '.' + nowDate.getFullYear());

}
consoleDate(nowDate);


let date, arr;
date = new Date();
arr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

alert(arr[date.getDay()]);




function resDay() {
    let date1 = document.getElementById("date1").value;
    let date2 = document.getElementById("date2").value;
    let newDate1= [] ;
    let p = new Date(date1);
    let o = new Date(date2);
    console.log("Разница в : " +(p-o)/1000/3600/24);
}

