define(['mocha', 'chai'], function (mocha, chai) {
    describe('Q1 Test', function () {
        it('should return multiplied result', function () {
            var expect = chai.expect;
            var a = 3;
            var b = 4;

            expect(multiply(a, b)).to.equal(12);
        });

        it("should be able to handle floating points", function () {
            var expect = chai.expect;
            var x = 3.5;
            var y = 3.7;
            var result = 3.5 * 3.7

            expect(multiply(x, y)).to.equal(result);
        });

        it("should not evaluate strings", function () {
            var expect = chai.expect ;
            var w = "this";
            var v = 3 ;

            expect(multiply(w, v)).to.be.empty;
        });
    });
});
