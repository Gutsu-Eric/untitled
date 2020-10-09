"use strict";

const block = document.createElement('div');
block.classList.add('block');
block.textContent = 'HELLO';
document.querySelector('.block1').append(block);
document.querySelector('.block2').append(block);
document.body.append(block);    // сработает на последний элемент присоединение

const boxes = document.querySelectorAll('.box');
for (let item of boxes) {
    item.style.background = 'green';
}

if (boxes) {
    alert('Hello');
}