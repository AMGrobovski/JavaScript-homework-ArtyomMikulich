/*Первая задача*/
const sayHello = function (nameOfPerson) {
	const SPECIAL_NAME = 'mark';
	const isMark = nameOfPerson.toLowerCase() === SPECIAL_NAME;
	const greeting = isMark ? 'Hi' : 'Hello';

	return `${greeting}, ${nameOfPerson}`
};

console.log(sayHello('Mark'));
console.log(sayHello('Sergio'));
/*====================================================================================================================================*/


/*Вторая задача*/
const findingHypotenuse = function (n, m) {
	return Math.sqrt(n ** 2 + m ** 2);
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
}

console.log(checkLetterCase(5));
console.log(checkLetterCase('A'));
console.log(checkLetterCase('a'));
console.log(checkLetterCase('    '));

/*====================================================================================================================================*/

/*Восьмая задача*/
const concatenate = function (firstString, secondString) {
	return `${firstString} ${secondString}`;

}

console.log(concatenate('Hello', 'world'));

/*====================================================================================================================================*/


/*Девятая задача*/
const checkStringLength = function (stringValue, numberValue) {
	return stringValue.length >= numberValue ? 'String is too long!' : stringValue;
}

console.log(checkStringLength('JavaScript', 11));
console.log(checkStringLength('Java', 4));
/*====================================================================================================================================*/