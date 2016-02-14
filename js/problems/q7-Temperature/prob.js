define([], function () {
    return {
        text: 'function c_to_f (today) {\n' +
            '    // TODO: Convert celcius to fahrenheit\n' +
            '}',
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
