
// Функция позволят написать код и выводить его несколько раз (не путать с циклами). Комментарий - в функцию должна войти какая-то информация, и выйти какой-то результат, то есть return.



// function sayHi() {
// 	alert('hello world!');
// }

// Для вывода функции необходимо ниже добавить скрипт (сколько раз добавим, столько раз и повториться вывод)

// sayHi();
// sayHi();
// sayHi();
// sayHi();

// Кода мы создаем функцию, то в глобальную переменную window записывается ее имя. Можем также выводить информацию, находящуюся в функции через консоль Chrome. На примере выше, пишем: widow.sayHi

// Также можем информацию из функции вывести в консоль при помощи скрипта:

// console.log(sayHi);



// Функции умеют принимать аргумент

function calculate(a, b) {
	console.log(a + b)
	console.log('calculate result = ', a + b)
}

calculate(2, 5);

// Чтобы более наглядно было можем console.log прописать по другому пример выше

// console.log('calculate result = ', a + b)

// Можно добавить свои переменные

function calculateTwo(a, b) {
	var test = 'test';
// var test = 2;
	console.log(a + b)
	console.log('calculateTwo result = ', a + b + test)
}

calculateTwo(2, 5);

// Комментарий - переменная в функции не будет доступна при помощи window, т.к. она является локальной внутри функции (во внутреннем scope).
// Комментарий 2 - переменную можно прописать и без var, но тогда это нарушит модульность и она попадет в глобальный контекст window (во внешний scope).




// Существуют псевдо массив arguments ()список реально переданных параметров, которые реально приходят в функцию

var abc = 'global abc';
var a = 'global a';

function calculateThree(a, b, c) {
	var test = 'test';
	console.log('c = ', c);
	console.log('arguments = ', arguments[2]);
	console.log('arguments.length = ', arguments[2].length);
	console.log('calculateThree result = ', a + b + test)
}

calculateThree(2, 7, 'third parameter');




// Return - команда, которая прекращает выполнение функции и возвращает какой-то результат

var abcd = 'global abcd';
var ab = 'global ab';

function calculateFour(a, b, c) {
	var test = 'test';
	var result;
	result = a + b + c;
	alert('test');
	return result
}

var calculationResult = calculateFour(2, 7, 3);
console.log(calculationResult);



// Ситуации с условием


var abcde = 'global abcde';
var abe = 'global abe';

function calculateFive(a, b, c) {
	var test = 'test';
	var result;
	result = a + b + c;
	alert('test');
	console.log(result);
	
	if (result > 10){
		return result
	} else {
		return 'bad parameters';
	}
	
	return result
}

var calculationResultTwo = calculateFive(2, 5, 3);
console.log(calculationResultTwo);