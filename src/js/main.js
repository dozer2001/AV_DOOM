'use strict';

let payment = document.getElementById('start'),
    data = document.querySelectorAll('.result'),
    masBlock = [];

function searchClass(block, name, result) {
    for (let i = 0; i < block.length; i++) {

        if (block[i].className) {
            if (block[i].className.indexOf(name) !== -1) {
                result.push(block[i].className);
            }
        }
        if (block[i].children.length) {
            let newBlock = block[i].children;
            searchClass(newBlock, name, result);
        }
    }
    return result;
}

let result = searchClass(data, 'value', []);
for (let i = 0; i < result.length; i++) {
    masBlock.push(document.querySelectorAll("." + result[i]));
}


    let nowDate = new Date();
 console.log(nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds() + ' ' + nowDate.getDate() + '.' + nowDate.getMonth() + '.' + nowDate.getFullYear());
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