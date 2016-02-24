define(['mocha', 'chai'], function (mocha, chai) {
    describe('Q6 Test', function () {
        it('should return sum of numbers in array', function () {
            var expect = chai.expect;
            var array = ['bob','testering', 3, 5, 13, ["test", 1, 2], "henning"];
            var result = 24;

            expect(array_sum(array)).to.equal(result);
        });

        it("lets make a easier test case", function () {
            var expect = chai.expect;
            var array2 = [1, 2, 33, 4, 5];
            var result2 = 45 ;

            expect(array_sum(array2)).to.equal(result2);
        });
    });
});
