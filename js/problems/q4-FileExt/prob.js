define([], function () {
    return {
        text: 'function get_file_extension (file) {\n' +
            '    // TODO: file will be a string, return the file extension if it has one\n' +
            '}' +

            '\n\n' +
            '// SOLUTION:\n' +
            '// function get_file_extension (file) {\n' +
            '//     var filenameArray = file.split(".");\n' +
            '//\n' +
            '//     if (filenameArray.length <= 1) {\n' +
            '//         return false;\n' +
            '//     } else {\n' +
            '//         return filenameArray[filenameArray.length - 1];\n' +
            '//     }\n' +
            '// }\n',

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
