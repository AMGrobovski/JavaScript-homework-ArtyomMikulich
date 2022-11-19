/*Первая задача*/
const sayHello = function (nameOfPerson) {
	const greeting = 'Hello, ' + nameOfPerson + '!';
	const greetingMark = 'Hi,' + nameOfPerson + '!';
	if (nameOfPerson !== 'Mark') {
		return greeting;
	} else {
		return greetingMark;
	}
};

console.log(sayHello('Mark'));
console.log(sayHello('Sergio'));
/*====================================================================================================================================*/


/*Вторая задача*/
const findingHypotenuse = function (n, m) {
	const hypotenuse = (((n ** 2) + (m ** 2)) ** (1 / 2));
	return hypotenuse;
};

console.log(findingHypotenuse(3, 4));
/*====================================================================================================================================*/


/*Третья задача*/
const min = function (a, b) {
	return Math.min(a, b);
};

console.log(min(-100, 200));
/*====================================================================================================================================*/


/*Четвертая задача*/
const isEven = function (n) {
	return n % 2 === 0;
};

console.log(isEven(7));
/*====================================================================================================================================*/


/*Пятая задача*/
const deleteChars = function (text) {
	const str = text.slice(1, text.length - 1);
	return str;
};

console.log(deleteChars('OartyomMikulichO'));
/*====================================================================================================================================*/


/*Шестая задача*/
const someFn = function (stringValue) {
	const capitalFirstLetter = stringValue[0].toUpperCase();
	const restLetters = stringValue.slice(1).toLowerCase();
	const capitalLastLetter = stringValue.slice(1, -1).toLowerCase() + stringValue.slice(-1).toUpperCase();
	if (stringValue.length % 2 === 0) {
		return capitalFirstLetter + capitalLastLetter;
	} else {
		return capitalFirstLetter + restLetters;
	}
};

console.log(someFn('even'));
console.log(someFn('odd'));
/*====================================================================================================================================*/


/*Седьмая задача*/
const checkLetterCase = function (stringValue) {
	const upLetter = 'Оууу май, большая буква!';
	const lowLetter = 'Нет уж, маленькие буквы - скучно';
	if (stringValue.charAt(0) === stringValue.charAt(0).toUpperCase()) {
		return upLetter;
	} else {
		return lowLetter;
	}
}

console.log(checkLetterCase('a'));
console.log(checkLetterCase('A'));

/*====================================================================================================================================*/

/*Восьмая задача*/
const concatenate = function (firstString, secondString) {
	const space = ' ';

	return firstString + space + secondString;
}

console.log(concatenate('Hello', 'world'));

/*====================================================================================================================================*/


/*Девятая задача*/
const checkStringLength = function (stringValue, numberValue) {
	const longString = 'String is too long!';
	if (stringValue.length >= numberValue) {
		return longString;
	} else {
		return stringValue;

	}
}

console.log(checkStringLength('JavaScript', 11));
console.log(checkStringLength('Java', 4));
/*====================================================================================================================================*/
