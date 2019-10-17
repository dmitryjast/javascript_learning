// Создаем простой объект

var dog = {
	name: 'Jack',
	age: 3,
	woof: function () {
		alert('woof!');
	}	
}

/*

// Вызываем функцию woof

dog.woof();

// Таким образом можно делать разные методы для объектов и получать своего рода классы




// Создаем простой объект 2 - когда есть 50 костей и с каждым разом становиться на 1 меньше

var dog = {
	name: 'Jack',
	age: 3,
	bones: 50,
	woof: function () {
		alert('woof!');
	},
		eat: function () {
			dog.bones--;
		}
}



// Вызываем функцию woof

dog.eat();
dog.eat();
dog.eat();

console.log(dog);

*/

// ----------------------------- Если мы захотим поменять имя класса из dog в animal, то придется заменять вручную везде, где оно используется -----------------------------

// Для того, чтобы этого не делать, существует ключевое слово this. This - context

var dog = {
	name: 'Jack',
	age: 3,
	bones: 50,
	woof: function () {
		console.log('this ->', this);
	},
		eat: function () {
			this.bones--;
		}
}

// Вызываем функцию woof

dog.eat();
dog.eat();
dog.eat();

dog.woof();


// В качестве this выступает window, поэтому он на сквозь прошивает функцию

var a = 5;

console.log(this.a); // Что равносильно window.a