define([], function () {
    return {
        text: 'function array_sum (arr) {\n' +
            '    // TODO: sum the elements in array\n' +
            '}',
        func: 'array_sum'
    };
});

// SOLUTION:
// function array_sum(arr) {
// 	// i will be an array, containing integers, strings and/or arrays like itself.
//     // Sum all the integers you find, anywhere in the nest of arrays.
//
//     var sum = 0;
//     var n = 0;
//     var len = arr.length;
//
//     if (typeof arr === 'number') {
//        //test if arr is a number
//         sum += arr;
//     } else if (Array.isArray(arr)) {
//         //  arr could be an array too apparently in js
//         for (; n < len; n++) {
//             sum += array_Sum(arr[n]);
//         }
//     }
//
//     return sum;
// }
