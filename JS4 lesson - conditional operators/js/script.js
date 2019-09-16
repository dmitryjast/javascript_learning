
// Example with description


/*

if (условие){
	какой-то код, который нужно выполнить
}

*/

// приводиться к типу boolean - если true = выполняем такой-то код, если false = выполняем такой-то код

// var user = 'admin';

var user;

user = prompt('Enter your name');


if (user == 'admin'){
	alert('hello Admin');
} else {
	alert('good bye');
}


// Convertion into ternary

// (user == 'admin') ? alert('hello Admin') : alert('good bye');