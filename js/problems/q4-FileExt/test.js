define(['mocha', 'chai'], function (mocha, chai) {
    describe('Q4 Test', function () {
        it('return text extension', function () {
            var expect = chai.expect;
            var text = "text.git";
            var result = "git";
            var text2 = "text.doc"
            var result2 = "doc"

            expect(get_file_extension(text)).to.equal(result);
            expect(get_file_extension(text2)).to.equal(result2);
        });

        it("return text extension without name", function () {
            var expect = chai.expect;
            var text3 = ".doc";
            var result3= "doc"
            var text4 = ".json"
            var result4= "json"

            expect(get_file_extension(text3)).to.equal(result3);
            expect(get_file_extension(text4)).to.equal(result4);
        });
    });
});
