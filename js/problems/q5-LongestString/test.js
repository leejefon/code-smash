define(['mocha', 'chai'], function (mocha, chai) {
    describe('Q5 Test', function () {
        it('should return longest string', function () {
            var expect = chai.expect;
            var array = ["test","testing","testingcase"];
            var result= "testingcase";

            expect(longest_String(array)).to.equal(result);
        });

        it("should return string only and not number", function(){
            var expect = chai.expect;
            var array2 = ["test", 2, 5, 43, 120];
            var result2 = "test";

            expect(longest_String(array2)).to.equal(result2);
        });
    });
});
