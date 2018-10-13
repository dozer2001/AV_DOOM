'use strict';

 let menu = document.querySelector('.menu'),
     elements = document.getElementsByClassName('menu-item'),
     newLi = document.createElement('li'),
     title = document.getElementById('title'),
     adv = document.querySelector('.adv'),
     promt = document.getElementById('prompt');
adv.remove();
console.log(promt);
title.innerText = 'Мы продаем только подлинную технику Apple';
menu.insertBefore(elements[2],elements[1]);
menu.appendChild(newLi);
newLi.classList.add('menu-item');
elements[4].innerText = 'Пятый пункт';


window.onload=function(){
    let ask = prompt('Какое у вас отношение к технике Aplle?');
    console.log(ask);
    promt.innerText = ask ;
    console.log(promt.innerText);
};
