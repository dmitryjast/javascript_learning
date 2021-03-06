
// ----------------------------- Копирование по ссылке -----------------------------

// Создаем примитивную переменную

var num = 123;


// И создаем объект

var object = {
	test: 123
};

// И создаем функцию

function updateObject(a) {
	a.test = 5;
}

function updateNum(a) {
	a = 5;
	console.log('a', a);
}


// Делаем вызов этих двух методов сверху

updateNum(num);
updateObject(object);


// И выводим в консоль

console.log('Object', object);
console.log('Number', num);


// В таком случае значение в Object изменится, а в num нет. Это происходит потому, что, если аргументом в функцию передается примитив number, string, boolean -> true, false, underfined, null, то его значение копируется и создается
// своя локальная переменная с этим значением и она изменяется (пример console.log в строке 23).
// В случае с updateObject не копируется весь объект, а передается ссылка на него. Получается 	a.test = 5; в a ссылка на внешний объект (строка 18). Другими словами влияет на более верхний объект.

// Другими словами примитив не изменится, а массив или объект измениться, т.к. обращаемся к нему по ссылке.