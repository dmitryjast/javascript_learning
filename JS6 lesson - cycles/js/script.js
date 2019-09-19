
var i = 0;

// Добавляем условия, пока i меньше 4

// while (i < 4) {
//     alert('test');
//     console.log('i = ', i);
//     i++;
// }


// Также есть аналогичный синтаксис цикла

// do {
//     console.log('i = ', i);
//     alert('hello ' + i);
//     i++;
// } while (i < 4);


// Принципиальная разница 2 принципов в том, что в первом мы сначала проверяем условие, а во втором наоборот


// Также есть аналогичный синтаксис цикла FOR

// for (var i = 0; i < 4; i++) {
//     console.log('i = ', i);
// }


// console.log('out of cycle');




// Как FOR-ом проходить по массиву (1 - мы мождем сравнивать I с длинной массива)

// var arr = ['test', 1, 2, 'qweqwe'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('arr[i] = ', arr[i]);
// 	console.log('i = ', i);
// }


// console.log('out of cycle');


// Как FOR-ом с конца (наоборот) проходить по массиву

var arr = ['test', 1, 2, 'qweqwe'];

	console.log('arr', arr);

for (var i = arr.length - 1; i >= 0; i--) {
    console.log('arr[i] = ', arr[i]);
	console.log('i = ', i);
}


console.log('out of cycle');