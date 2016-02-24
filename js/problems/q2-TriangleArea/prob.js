define([], function () {
    return {
        text: 'function triangle_area (a, b, c) {\n' +
            '    // TODO: Calculate the area of the triangle from the three edges\n' +
            '}' +

            '\n\n' +
            '// SOLUTION:\n' +
            '// function triangle_area (a,b,c) {\n' +
            '// 	if (a !== 0 && b !== 0 && c!== 0){\n' +
            '// 		var parameter = (a + b + c ) / 2;\n' +
            '// 		var area = Math.sqrt(parameter*((parameter - a) * (parameter - b) * (parameter - c)));\n' +
            '// 		return area;\n' +
            '// 	} else {\n' +
            '// 		return null;\n' +
            '// 	}\n' +
            '// }\n',

        func: 'triangle_area'
    };
});

// SOLUTION:
// function triangle_area (a,b,c) {
// 	if (a !== 0 && b !== 0 && c!== 0){
// 		var parameter = (a + b + c ) / 2;
// 		var area = Math.sqrt(parameter*((parameter - a) * (parameter - b) * (parameter - c)));
// 		return area;
// 	} else {
// 		return null;
// 	}
// }
