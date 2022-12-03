/*Первая задача*/
const sayHello = function (nameOfPerson) {
	const SPECIAL_NAME = 'mark';
	const isMark = nameOfPerson.toLowerCase() === SPECIAL_NAME;
	const greeting = isMark ? 'Hi' : 'Hello';

	return `${greeting}, ${nameOfPerson}`



	// if (isMark) {
	// 	return `Hi, ${nameOfPerson}`;
	// }
	// return `Hello ${nameOfPerson}`;




	// const greeting = 'Hello, ' + nameOfPerson + '!';
	// const greetingMark = 'Hi,' + nameOfPerson + '!';
	// if (nameOfPerson !== 'Mark') {
	// 	return greeting;
	// } else {
	// 	return greetingMark;
	// }
};

console.log(sayHello('Mark'));
console.log(sayHello('Sergio'));
/*====================================================================================================================================*/


/*Вторая задача*/
const findingHypotenuse = function (n, m) {
	return Math.sqrt(n ** 2 + m ** 2);


	// const hypotenuse = (((n ** 2) + (m ** 2)) ** (1 / 2));
	// return hypotenuse;
};

console.log(findingHypotenuse(3, 4));
/*====================================================================================================================================*/


/*Третья задача*/
const min = function (a, b) {
	if (a === b) {
		return 'Numbers are equal';
	}

	return Math.min(a, b);
};

console.log(min(200, 200));
/*====================================================================================================================================*/


/*Четвертая задача*/
const isEven = function (n) {
	return n % 2 === 0;
};

console.log(isEven(7));
/*====================================================================================================================================*/


/*Пятая задача*/
const deleteChars = function (word) {
	return word.slice(1, -1);
};

console.log(deleteChars('OartyomMikulichO'));
console.log(deleteChars('O'));
/*====================================================================================================================================*/


/*Шестая задача*/
const someFn = function (word) {
	const firstCapitalLetter = word[0].toUpperCase();
	const isCharsEven = word.length % 2 === 0;

	if (isCharsEven) {
		const restWord = word.slice(1, -1).toLowerCase();
		const lastCapitalLetter = word[word.length - 1].toUpperCase();

		return `${firstCapitalLetter}${restWord}${lastCapitalLetter}`;
	}
	return `${firstCapitalLetter}${word.slice(1).toLowerCase()}`


	// const capitalFirstLetter = word[0].toUpperCase();
	// const restLetters = word.slice(1).toLowerCase();
	// const capitalLastLetter = word.slice(1, -1).toLowerCase() + word.slice(-1).toUpperCase();
	// if (word.length % 2 === 0) {
	// 	return capitalFirstLetter + capitalLastLetter;
	// } else {
	// 	return capitalFirstLetter + restLetters;
	// }
};

console.log(someFn('even'));
console.log(someFn('odd'));
/*====================================================================================================================================*/


/*Седьмая задача*/
const checkLetterCase = function (stringValue) {
	const optimizedString = typeof stringValue === 'string' ? stringValue.trim() : null;
	if (!optimizedString || optimizedString.length > 1) {
		return;
	}
	return stringValue === stringValue.toUpperCase() ? 'Оууу май, большая буква!' : 'Нет уж, маленькие буквы - скучно';

	// const upLetter = 'Оууу май, большая буква!';
	// const lowLetter = 'Нет уж, маленькие буквы - скучно';
	// if (stringValue.charAt(0) === stringValue.charAt(0).toUpperCase()) {
	// 	return upLetter;
	// } else {
	// 	return lowLetter;
	// }
}

console.log(checkLetterCase(5));
console.log(checkLetterCase('A'));
console.log(checkLetterCase('a'));
console.log(checkLetterCase('    '));

/*====================================================================================================================================*/

/*Восьмая задача*/
const concatenate = function (firstString, secondString) {
	return `${firstString} ${secondString}`;

	// const space = ' ';

	// return firstString + space + secondString;
}

console.log(concatenate('Hello', 'world'));

/*====================================================================================================================================*/


/*Девятая задача*/
const checkStringLength = function (stringValue, numberValue) {
	return stringValue.length >= numberValue ? 'String is too long!' : stringValue;

	// const longString = 'String is too long!';
	// if (stringValue.length >= numberValue) {
	// 	return longString;
	// } else {
	// 	return stringValue;

	// }
}

console.log(checkStringLength('JavaScript', 11));
console.log(checkStringLength('Java', 4));
/*====================================================================================================================================*/
