// Задача угадай слово
const riddle = {
	question: "Висит груша, нельзя скушать",
	correctAnswer: "лампочка",
	hints: ["это съедобное", "это фрукт"],
	hintIndex: 0,
	tries: 3,
	checkAnswers(guessedAnswer) {
		const btn = document.getElementsByTagName("button")[0];
		if (guessedAnswer === this.correctAnswer) {
			alert("верно");
			console.log("верно !");
			btn.disabled = true;
		} else if (guessedAnswer !== this.correctAnswer) {
			if (this.tries === 1) {
				alert("Вы проиграли!");
				btn.disabled = true;
			} else {
				const hint = this.hints[this.hintIndex];
				this.hintIndex = (this.hintIndex + 1) % this.hints.length;
				this.tries--;
				alert(
					`Ответ не верен, у вас осталось ${this.tries} попыток, вот вам подсказка - ${hint}`
				);
			}
		}
	},
};

window.onload = function () {
	document.getElementById("riddle").innerText = riddle.question;
};

function check() {
	const input = document.getElementsByTagName("input")[0];
	const guessedAnswer = input.value;

	if (guessedAnswer) {
		riddle.checkAnswers(guessedAnswer);
	} else {
		alert("Введите ответ в поле");
	}

	input.value = "";
}

// Задача угадай слово

//Напиши программу, которая проверяет, является ли число четным или нечетным, и выводит соответствующее сообщение в консоль.

function numCheck(num) {
	return num % 2 === 0 ? "Четное" : "Не четное";
}

console.log(numCheck(2));
///
