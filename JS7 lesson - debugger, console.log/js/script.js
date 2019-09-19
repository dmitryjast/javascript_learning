
// Debugging при помощи команды debugger

// var array = [1, 2, 3, 4];

// for (var i = 0; i < array.length; i++) {
// 	debugger;
// 	console.log(array[i]);
// }


// Debugging при помощи команды console.log

var array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
	console.log('array[i]',array[i]);
}


// Если хотим отследить итератор, в каком значении он

var array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
	console.log('i = ', i);
	console.log('array[i]',array[i]);
}