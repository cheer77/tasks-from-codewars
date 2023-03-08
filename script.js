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

// const nums = [1, 2, 5, 6, 3, 4, 9];

// const numsPlus = nums.reduce((acc, num) => {
// 	return acc + num;
// }, 0);

// console.log(numsPlus);

// function sum(a, b, ...args) {
// 	let result = a + b;

// 	for (let i = 0; i < args.length; i++) {
// 		result += args[i];
// 	}
// 	return result;
// }

// console.log(sum(...nums));

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score(dice) {
	let score = 0;
	let counts = [0, 0, 0, 0, 0, 0];
	for (let i = 0; i < dice.length; i++) {
		counts[dice[i] - 1]++;
	}
	for (let i = 0; i < counts.length; i++) {
		if (counts[i] >= 3) {
			if (i == 0) {
				score += 1000;
			} else {
				score += (i + 1) * 100;
			}
			counts[i] -= 3;
		}
		if (i == 0 && counts[i] > 0) {
			score += counts[i] * 100;
		}
		if (i == 4 && counts[i] > 0) {
			score += counts[i] * 50;
		}
	}
	score += counts[0] * 100 + counts[4] * 50;
	return score;
}

//Playing with digits
function digPow(n, p) {
	let digits = n.toString().split(""); // split n into digits
	let sum = 0;
	for (let i = 0; i < digits.length; i++) {
		sum += Math.pow(parseInt(digits[i]), p + i); // sum the powers of the digits
	}
	let k = sum / n; // calculate k
	return Number.isInteger(k) ? k : -1; // return k if it's an integer, otherwise return -1
}
