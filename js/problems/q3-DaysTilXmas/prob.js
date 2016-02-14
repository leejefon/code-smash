define([], function () {
    return {
        text: 'function days_til_christmas (today) {\n' +
            '    // TODO: Calculate the dates until next Christmas\n' +
            '}',
        func: 'days_til_christmas'
    };
});

// SOLUTION:
// function days_til_christmas (today) {
// 	var xmas = new Date(today.getFullYear(), 11, 25);
// 	if (today.getMonth() == 11 && today.getDate() > 25) {
// 		xmas.setFullYear(xmas.getFullYear()+1);
// 	}
// 	var one_day = 1000 * 60 * 60 * 24;
// 	var result = Math.ceil((xmas.getTime() - today.getTime()) / (one_day));
// 	return result;
// }
