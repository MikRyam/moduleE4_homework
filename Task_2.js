// Задание № 2 (Модуль E4).

/*
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

// Решение:


function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Alex", 
    ownCity: "Tver",
    age: 19,
    course: "Frontend"
  };


  console.log(showProps(student1, "same"));  // false
  console.log(showProps(student1, "name"));  // true
