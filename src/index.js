const NUMBER = {
	0: 'zero',
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90: 'ninety',
	100: 'hundred'
};

module.exports = function toReadable(number) {
	const string = '' + number;
	let stringNumber;

	if (string.length === 1) {
		stringNumber = NUMBER[number];
	}

	if (string.length === 2) {
		if (number >= 10 && number <= 20) {
			stringNumber = NUMBER[number];
			return (stringNumber = NUMBER[number]);
		}
		for (let i = 0; i < string.length; i++) {
			if (i === 0) {
				stringNumber = NUMBER[string[i] * 10];
			} else if (+string[i] === 0) {
				return stringNumber;
			} else {
				stringNumber = stringNumber + ' ' + NUMBER[string[i]];
			}
		}
	}
	if (string.length === 3) {
		for (let i = 0; i < string.length; i++) {
			if (i === 0) {
				stringNumber = NUMBER[string[i]] + ' ' + NUMBER[100];
				if (number - +string[0] * 100 === 0) {
					return stringNumber;
				}
			}
			if (i === 1) {
				if (+string[i] === 0) {
					return (stringNumber = stringNumber + ' ' + NUMBER[string[i + 1]]);
				}

				if (number - string[0] * 100 >= 10 && number - string[0] * 100 <= 20) {
					return (stringNumber = stringNumber + ' ' + NUMBER[number - +string[0] * 100]);
				}

				if (number - (+string[i] * 10 + string[0] * 100) === 0) {
					return (stringNumber = stringNumber + ' ' + NUMBER[string[i] * 10]);
				}
				stringNumber = stringNumber + ' ' + NUMBER[+string[1] * 10] + ' ';
			}
			if (i === 2) {
				stringNumber = stringNumber + NUMBER[string[i]];
			}
		}
	}
	return stringNumber;
};