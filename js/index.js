'use strict';

const numberInput = prompt('Введіть ціле число:');
const result = [];

if (!numberInput?.trim() || isNaN(numberInput) || !Number.isInteger(+numberInput)) {
    alert('Помилка, спробуйте ще раз.');
}
else {
    for (let i = 0; i <= 100; i++) {
        if (i * i <= numberInput) {
            result.push(i);
        }
    }
alert(`Цілі числа, квадрат яких не перевищує ${numberInput}:
${result.join(', ')}`);
}