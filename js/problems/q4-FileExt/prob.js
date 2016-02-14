define([], function () {
    return {
        text: 'function get_file_extension (file) {\n' +
            '    // TODO: file will be a string, return the file extension if it has one\n' +
            '}',
        func: 'get_file_extension'
    };
});

// SOLUTION:
// function get_file_extension (file) {
//     var filenameArray = file.split('.');
//
//     if (filenameArray.length <= 1) {
//         return false;
//     } else {
//         return filenameArray[filenameArray.length - 1];
//     }
// }
