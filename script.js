// // Задача угадай слово
// const riddle = {
// 	question: "Висит груша, нельзя скушать",
// 	correctAnswer: "лампочка",
// 	hints: ["это съедобное", "это фрукт"],
// 	hintIndex: 0,
// 	tries: 3,
// 	checkAnswers(guessedAnswer) {
// 		const btn = document.getElementsByTagName("button")[0];
// 		if (guessedAnswer === this.correctAnswer) {
// 			alert("верно");
// 			console.log("верно !");
// 			btn.disabled = true;
// 		} else if (guessedAnswer !== this.correctAnswer) {
// 			if (this.tries === 1) {
// 				alert("Вы проиграли!");
// 				btn.disabled = true;
// 			} else {
// 				const hint = this.hints[this.hintIndex];
// 				this.hintIndex = (this.hintIndex + 1) % this.hints.length;
// 				this.tries--;
// 				alert(
// 					`Ответ не верен, у вас осталось ${this.tries} попыток, вот вам подсказка - ${hint}`
// 				);
// 			}
// 		}
// 	},
// };

// window.onload = function () {
// 	document.getElementById("riddle").innerText = riddle.question;
// };

// function check() {
// 	const input = document.getElementsByTagName("input")[0];
// 	const guessedAnswer = input.value;

// 	if (guessedAnswer) {
// 		riddle.checkAnswers(guessedAnswer);
// 	} else {
// 		alert("Введите ответ в поле");
// 	}

// 	input.value = "";
// }
// // Задача угадай слово

// //Напиши программу, которая проверяет, является ли число четным или нечетным, и выводит соответствующее сообщение в консоль.
// function numCheck(num) {
// 	return num % 2 === 0 ? "Четное" : "Не четное";
// }
// console.log(numCheck(2));
// ///

// ////////////////////

// function numCheck(num) {
// 	return num % 2 === 0 ? "Четное" : "Не четное";
// }

// console.log(numCheck(2));
// ///

// //Напишите программу, которая принимает массив целых чисел и возвращает новый массив, содержащий только четные числа из исходного массива.
// function arrTask(arr) {
// 	const newArr = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			newArr.push(arr[i]);
// 		}
// 	}
// 	return newArr;
// }

// console.log(arrTask([2, 1, 3, 5, 6]));
// //

// // Напишите функцию, которая принимает строку и возвращает эту строку, но все слова в ней записаны задом наперед. Если в строке есть знаки препинания, они должны остаться на своих местах.
// function reverseWords(str) {
// 	// Разбиваем строку на массив слов
// 	const words = str.split(" ");

// 	// Используем метод map для переворачивания каждого слова
// 	const reversedWords = words.map((word) => {
// 		// Используем метод split, reverse и join для переворачивания слова
// 		return word.split("").reverse().join("");
// 	});

// 	// Объединяем массив перевернутых слов в строку с помощью метода join
// 	return reversedWords.join(" ");
// }

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
// //

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из удвоенных значений каждого элемента входного массива.
// const nums = [2, 5, 7, 11];
// function doubleNumbers(num) {
// 	return num * 2;
// }
// const newArr = nums.map(doubleNumbers);
// console.log(newArr);

// Напишите функцию calculateSum, которая принимает массив чисел и возвращает сумму всех чисел в массиве.

// const arr = [1, 2, 3, 4, 5];
// function calculateSum(num) {
// 	let sum = 0;
// 	for (let i = 0; i < num.length; i++) {
// 		sum = sum + num[i];
// 	}
// 	return sum;
// }

// console.log(calculateSum(arr));

// напишите функцию filterOddNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только нечетные числа из исходного массива. Используйте метод filter() для решения этой задачи.

// const numbers = [1, 2, 3, 4, 5, 6];
// const filterOddNumbers = numbers.filter((num) => num % 2 !== 0);

// console.log(filterOddNumbers);

// // напишите функцию filterNamesByFirstLetter, которая принимает массив имен и букву в качестве аргументов и возвращает новый массив, содержащий только имена, начинающиеся с этой буквы (регистронезависимо). Используйте метод filter() для решения этой задачи.

// function filterNamesByFirstLetter(names, letter) {
// 	const filteredNames = names.filter(
// 		(name) => name.charAt(0).toLowerCase() === letter.toLowerCase()
// 	);
// 	return filteredNames;
// }

// const names = ["Alice", "Bob", "Charlie", "Dave", "Edward"];
// console.log(filterNamesByFirstLetter(names, "a"));

// Задача: написать функцию, которая получает на вход массив чисел и возвращает их сумму.

const nums = [1, 2, 5, 6, 3, 4, 9];

const numsPlus = nums.reduce((acc, num) => {
	return acc + num;
}, 0);

console.log(numsPlus);

function sum(a, b, ...args) {
	let result = a + b;

	for (let i = 0; i < args.length; i++) {
		result += args[i];
	}
	return result;
}

console.log(sum(...nums));
