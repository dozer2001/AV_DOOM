'use strict';
// lesson 1

// var num = 33721;
// let rezult = 1;
//
// num = num.toString();
// let i;
// for( i = 0; i < num.length; i++ ){
//     rezult *= num[i];
// }
//
//
// let fullRezult = rezult**3;
// fullRezult = fullRezult.toString();
// fullRezult = fullRezult.slice(0, 2);
// console.log(fullRezult);


// lesson 2
// let week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг','пятница', 'суббота' ];
// let ul = document.getElementById("list");
// let newDay = new Date();
// for (let i = 0; i < week.length; i++){
//     let newElement = document.createElement('li');
//     newElement.textContent = (week[i]);
//     if (newDay.getDay() === i ){
//         newElement.classList.add('date');
//     }
//     if(newElement.textContent === 'суббота' || newElement.textContent === 'воскресенье') {
//         newElement.classList.add('weekend');
//     }
//     let e = newElement;
//     ul.appendChild(e);
//
// }
//
// let arr = ['75','45','11','33','54','71','99'];
// for(let j = 0; j < arr.length; j++){
//    let firstNumb = arr[j].slice(0,1);
//     if( firstNumb === '3' || firstNumb === '7'){
//         console.log(arr[j]);
//     }
//
// }


// lesson 3
// 1)
let str = "урок-3-был слишком легким";
str.charAt(0).toUpperCase() + str.substr(1);

// 2)
str = str.split('-').join(' ');
console.log(str);

// 3)
str = str.substring(str.length - 6);
str = str.slice(0,-2)+'o'+'o';
console.log(str);

// 4)
let arr = [20, 33, 1,'Человек', 2, 3];
let cube = 0;
for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) === "number"){
       cube += Math.pow(arr[i], 3);
        console.log(cube);
    }
}
let sum = Math.sqrt(cube);
console.log(sum);

function stringFilter(str) {
    if(typeof(str) == "string"){
        str = str.split(" ").join('');
        console.log(str);
    }else {
        alert("Это не строка!")
    }
    if(str.length > 50){
        str = str.slice(0,50)+ "..." ;
        console.log(str);
    }
}


// lesson 4

// 1)
function getFriendlyNumbers(start,end) {
    let result;
    if(typeof (start) === 'number' && typeof (end) === 'number' && start <= end && start > 0 && Number.isInteger(start) && Number.isInteger(end)){
        let secondFrend = 0,
            firstFriend = 0,
            mass = [];
        for( let a = start; a <= end; a++,firstFriend = 0,secondFrend = 0 ){
            for(let i = 1; i < a; i++){
                if(a % i == 0 ){
                    secondFrend += i;
                }
            }
            for(let j = 1; j < secondFrend; j++){
                if( secondFrend % j == 0){
                    firstFriend += j;
                }
            }
            if( firstFriend == a && firstFriend != secondFrend && firstFriend < secondFrend   ){
                console.log( firstFriend + ' : ' + secondFrend );
                mass.push([firstFriend,secondFrend]);
            }
        }
        result = mass;
    }else {
        result = false;
    }
        return result;
}


