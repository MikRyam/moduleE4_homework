// Задание № 3 (Модуль E4).

/*
Написать функцию, которая создает пустой объект, но без прототипа.
*/

// Решение:

// пустой объект:
const obj = new Object();

// Пустой объект без прототипа:
const emptyObj = Object.create(null)
