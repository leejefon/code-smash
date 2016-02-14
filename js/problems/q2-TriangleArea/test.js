define(['mocha', 'chai'], function (mocha, chai) {
    describe('Q2 Test', function () {
        it('should return triangla area', function () {
            var expect = chai.expect;
            var a = 5, b = 6, c = 7;
            var d = 3, e = 4, f = 5;

            expect(triangle_area(a, b, c)).to.equal(Math.sqrt(216));
            expect(triangle_area(d, e, f)).to.equal(6)
        });

        it("should not evaluate 0 and should check for valid sides", function () {
            var expect = chai.expect;
            var a = 0, b = 5, c = 6;

            expect(triangle_area(a, b, c)).to.not.be.ok;
        });
    });
});
