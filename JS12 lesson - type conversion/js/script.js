
// ----------------------------- Самый простой оператор для приведения типов является +, который складывает операнды (значения с которыми мы работаем справа и слева). Оператор + обычно приводит к String -----------------------------

// В JS существует 6 основных типов. Первые 5 - это приметивы: number, string, boolean -> true, false, underfined, null. Объекты - 6 тип.

// В данном примере будет приведение одного типа (приметивов) к другому.

var separator = '------------- + to String ----------------';
console.log(separator);

var result = 5 + 5;
console.log(result);
console.log(typeof result);

// Если мы сделаем по примеру ниже, то JS проведет конкотенацию строк, соответственно приведет Number к String

var resultTwo = 5 + '5';
console.log(resultTwo);
console.log(typeof resultTwo);

// Если мы пропишем пустую строку (пример ниже), то JS также, как и в примере выше проведет конкотенацию строк, соответственно приведет Number к String

var resultThree = 5 + '';
console.log(resultThree);
console.log(typeof resultThree);

// Сложение true + false. Получается, если привести к числам, то екгу будет 1, а false 0. Соответственно сложение true + false = 1
// Если в console.log(+true); мы прописываем +true, то true знаком + мы пытаемся привести к числу.

var resultFour = true + false;

console.log(+true);
console.log(+false);
console.log(resultFour);
console.log(typeof resultFour);

// Если мы сложим с объектом. 5 и объект также приведутся к строке.

var resultFive = 5 + {};
console.log(resultFive);
console.log(typeof resultFive);





// ----------------------------- Если мы используем другой оператор - либо / либо *, то все операнды будут приводиться к Number -----------------------------

var separatorTwo = '------------- - * / to Number ----------------';
console.log(separatorTwo);


// Если мы сделаем 5 - 5, то будет 0 с типом данных Number

var resultSix = 5 - 5;
console.log(resultSix);
console.log(typeof resultSix);

// Если мы сделаем 5 - '5', то будет 0 с типом данных Number, т.к. JS приведет переменнуюк строке

var resultEight = 5 - '5text';
console.log(resultEight);
console.log(typeof resultEight);

// Но если мы сделаем 5 - '5text', 5 / '5text', 5 * '5text', то будет NaN, т.к. JS не сможет привести значение к Number





// ----------------------------- Также частым является приведение к boolean -----------------------------

var separatorThree = '------------- to Boolean ----------------';
console.log(separatorThree);

// Если мы в условии напишем Its good, будет выполняться первое значение, если Its not good, то второе.

if('Its good'){
	console.log('Its good');
} else {
	console.log('Its not good');
}

// Если строка условия будет пустая - будет Its not good

if(''){
	console.log('Its good');
} else {
	console.log('Its not good');
}

// Если в строка условия будет любой текст - будет Its good

if('fghfdhd'){
	console.log('Its good');
} else {
	console.log('Its not good');
}

// Если строка условия будет 0 - будет Its not good

if(''){
	console.log('Its good');
} else {
	console.log('Its not good');
}

// Если в строка условия будет 5 (или все кроме 0) - будет Its good

if('fghfdhd'){
	console.log('Its good');
} else {
	console.log('Its not good');
}



// ----------------------------- Как можно для функций задавать стандартніе значения -----------------------------

var separatorFour = '------------- default values for functions ----------------';
console.log(separatorFour);

// Если a приводиться к true, то в b записуется значение a, если к false, то записывается 5. Данная конструкция позволяет задавать значения по умполчанию для переменных.

function calculate(a) {
	console.log('value a', a);
	var b = a || 5;
	console.log(b);
}

calculate();

// Если мы в calculateTwo передадим значение 5, то value a будет 5 и значение в var b будет также 5

function calculateTwo(a) {
	console.log('value a', a);
	var b = a || 5;
	console.log(b);
}

calculateTwo(5);

// Если мы будем делать сравнение переменных, то это лучше делать через === равно, т.к. это значение учитывает тип. Если писать ==, то JS будет пытаться привести к одному типу.

if (a === b){
	
}