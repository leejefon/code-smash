define([], function () {
    return {
        text: 'function c_to_f (today) {\n' +
            '    // TODO: Convert celcius to fahrenheit\n' +
            '}' +

            '\n\n' +
            '// SOLUTION:\n' +
            '// function c_to_f (i) {\n' +
            '//     //Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit\n' +
            '//     var cTemp = i;\n' +
            '//     var cToFahr = cTemp * 9 / 5 + 32;\n' +
            '//     var result = cToFahr\n' +
            '//     return result\n' +
            '// }\n',

        func: 'c_to_f'
    };
});

// SOLUTION:
// function c_to_f (i) {
//     //Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit
//     var cTemp = i;
//     var cToFahr = cTemp * 9 / 5 + 32;
//     var result = cToFahr
//     return result
// }
