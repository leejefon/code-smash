define([], function () {
    return {
        text: 'function days_til_christmas (startDate) {\n' +
            '    // TODO: Calculate the dates until next Christmas\n' +
            '}' +

            '\n\n' +
            '// SOLUTION:\n' +
            '// function days_til_christmas (startDate) {\n' +
            '// 	var xmas = new Date(startDate.getFullYear(), 11, 25);\n' +
            '// 	if (startDate.getMonth() == 11 && startDate.getDate() > 25) {\n' +
            '// 		xmas.setFullYear(xmas.getFullYear()+1);\n' +
            '// 	}\n' +
            '// 	var one_day = 1000 * 60 * 60 * 24;\n' +
            '// 	var result = Math.ceil((xmas.getTime() - startDate.getTime()) / (one_day));\n' +
            '// 	return result;\n' +
            '// }\n',

        func: 'days_til_christmas'
    };
});

// SOLUTION:
// function days_til_christmas (startDate) {
// 	var xmas = new Date(startDate.getFullYear(), 11, 25);
// 	if (startDate.getMonth() == 11 && startDate.getDate() > 25) {
// 		xmas.setFullYear(xmas.getFullYear()+1);
// 	}
// 	var one_day = 1000 * 60 * 60 * 24;
// 	var result = Math.ceil((xmas.getTime() - startDate.getTime()) / (one_day));
// 	return result;
// }
