define([], function () {
    return {
        text: 'function longest_string (arr) {\n' +
            '    // TODO: return the longest string in array\n' +
            '}' +

            '\n\n' +
            '// SOLUTION:\n' +
            '// function longest_string (arr) {\n' +
            '//     var longest = "";\n' +
            '//     var n;\n' +
            '//     var len = arr.length;\n' +
            '//\n' +
            '//     for (n = 0; n < len; n++) {\n' +
            '//         if (typeof arr[n] !== "string") {\n' +
            '//             //  not a string, go to next iteration of the loop\n' +
            '//             continue;\n' +
            '//         }\n' +
            '//\n' +
            '//         if (arr[n].length > longest.length) {\n' +
            '//             longest = arr[n];\n' +
            '//         }\n' +
            '//     }\n' +
            '//     return longest;\n' +
            '// }\n',

        func: 'longest_string'
    };
});

// SOLUTION:
// function longest_string (arr) {
//     var longest = '';
//     var n;
//     var len = arr.length;
//
//     for (n = 0; n < len; n++) {
//         if (typeof arr[n] !== 'string') {
//             //  not a string, go to next iteration of the loop
//             continue;
//         }
//
//         if (arr[n].length > longest.length) {
//             longest = arr[n];
//         }
//     }
//     return longest;
// }
