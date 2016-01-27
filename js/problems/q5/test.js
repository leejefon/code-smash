define(['mocha', 'chai'], function (mocha, chai) {
    describe('#Tests', function () {
        it('should return mutiplied result', function () {
            var expect = chai.expect;
            var a = 3;
            var b = 4;

            expect(multiply(a, b)).to.equal(12);
        });
    });
});
