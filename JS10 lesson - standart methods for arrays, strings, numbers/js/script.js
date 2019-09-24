
// var str = 'teST';



// У строки, как и у массива есть длина. Если мы выведем, как на примере ниже, то увидим, что ее длина 4 символа.

// console.log(str.length);



// Также можем к строке обратиться, как к массиву и поискать элемент по индексу

// console.log(str[1]);



// Также можнор искать подстроку, для этого существует индекс "Of". JS вернет нам порядковый номер, с которого начинается эта подстрока.
// Если мы напишем console.log(str.indexOf('gdgfdg')); вернется индекс -1, что будет означать, что совпадений не найдено

// console.log(str.indexOf('st'));



// Если мы решим присвоить str 1 = a по принципу ниже, у нас ничего не получится, т.к. в JS нельзя перезаписывать строки

// str[1] = 'A';

// console.log(str);

// Чтобы изменить строку (переменную), нужно результат измененной строки записать по новой. Для этого существует метод REPLACE. На примере мы ищем 'Е' и заменяем на 'А'. Получается изменилась не строка, а переменная уже с другим значением.

// str = str.replace('e', 'A');

// console.log(str);




// Также можно сделать приведение к  маленьким или большим буквам. Для этого существует метод TOLOWERCASE или TOUPPERCASE

// К маленьким

// console.log(str);

// str = str.toLowerCase();

// console.log(str);

// К большим


// str = str.toUpperCase();

// console.log(str);



// Также можно искать подсктроку из нашей строки. Только не как INDEXOF (не оп искомой подстроке, а по номеру позиции). Для этого существует метод SUBSTRING. Чтобы искать до конца строки, нужно писать первый параметр без второго (см. пример 2)



// console.log(str.substring(1, 3));

// console.log(str.substring(1));



// -------------- Далее числа --------------


// Задаем строку и приводим ее к числу при помощи оператора +. Это работает, если у нас в строке исключительно число. С буквами привести строку к числу не получится (получим NAN - not a number). 

// var str = '12';
// var num = +str;

// console.log(str);
// console.log(num);

// Или выводим так, чтобы было видно где string, а где number

// console.log(typeof str);
// console.log(typeof num);

// При сравнении мы можем проверять это номер или нет

// if ( isNaN(num) ){
// 	console.log('not a number');
// } else {
// 	console.log('is a number');
// }


// Можем немного упростить код

// var str = '12px';
// var num = +str;

// console.log(str);
// console.log(num);

// console.log(typeof str);
// console.log(typeof num);

// var flag = isNaN(num);
// console.log(flag);

// if (flag){
// 	console.log('not a number');
// } else {
// 	console.log('is a number');
// }



// Для того, чтобы приводить и цифры и символы к цифрам, существует метод PARSEINT (действует по принципу - анализирует строку, и как только доходит до букв останавливает анализ и берет цифровое значение, которое нашел ранее)

// var str = '12px';
// var num = parseInt(str);

// console.log(str);
// console.log(num);

// console.log(typeof str);
// console.log(typeof num);

// var flag = isNaN(num);
// console.log(flag);

// if (flag){
// 	console.log('not a number');
// } else {
// 	console.log('is a number');
// }



// Чтобы приводить уже готовое число к строке мы можем либо вызвать метод TOSTRING или приплюсовать пустую строку (2-й вариант)

// var str = '12px';
// var num = parseInt(str);

// console.log('num', num);

// var newStr = num.toString();

// console.log('newStr', newStr);

// console.log(typeof newStr);


// 2й вариант - приплюсовать пустую строку

// var str = '12px';
// var num = parseInt(str);

// console.log('num', num);

// var newStr = num + '';

// console.log('newStr', newStr);

// console.log(typeof newStr);




// Глобальный модуль Math (mess) - хранит в себе стандартные математические операции
// Наиболее часто используемые операции - это округление, где Math - это глобальный модуль, а floor - это округление к нижнему. Например

// округление к меньшему

var newNumber = 12.3;

var roundResult = Math.floor(newNumber);

console.log(roundResult);


// округление к большему

var newNumber = 12.3;

var roundResult = Math.ceil(newNumber);

console.log(roundResult);

// округление автоматически - куда ближе

var newNumber = 12.3;

var roundResult = Math.round(newNumber);

console.log(roundResult);




// Работа с массивами

// Создаем строку и разбиваем ее на массив. На примере строки с var arr это метод строки, но разбивает он это в массив. Метод SPLIT выступает разделителем в строке (все между запятыми он записывает в новые ячейки массива).

// var str = '1, 2, test, 4';

// var arr = str.split (',');

// console.log(arr);


// Массив можно объеденять в строку

var arr = [1, 2, 3, 4, 'test'];

var str = arr.join();

console.log(arr);

27.27