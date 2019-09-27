
// Создали пустой массив, создали пустую переменную

var names = [];


// Далее создали цикл с условием, где итератор = 0, повторение цикла 5 раз, шаг увеличения +1. При помощи Promt наполняем массив из 5 имен.


for (var i = 0; i < 5; i++) {
    names[i] = prompt('Please enter your name');
 }
 
 
 // Прописываем условие и при помощи Promt выводим окно для ввода Login name. 
 
 if (enterName = prompt('Please, enter your login name')) {
	 alert(names.indexOf(enterName) != -1 ? enterName + ', you have successfully logged' : 'Error');
 }
 



// https://learn.javascript.ru/ifelse
// https://learn.javascript.ru/array
