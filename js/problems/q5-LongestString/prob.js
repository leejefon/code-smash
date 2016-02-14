define([], function () {
    return {
        text: 'function longest_string (today) {\n' +
            '    // TODO: return the longest string in array\n' +
            '}',
        func: 'longest_string'
    };
});

// SOLUTION:
// function longest_string (i) {
//     // i will be an array.
//     // return the longest string in the array
//
//     var longest = '';
//     var n;
//     var len = i.length;
//
//     for (n = 0; n < len; n++) {
//         if (typeof i[n] !== 'string') {
//             //  not a string, go to next iteration of the loop
//             continue;
//         }
//
//         if (i[n].length > longest.length) {
//             longest = i[n];
//         }
//     }
//     return longest;
// }
