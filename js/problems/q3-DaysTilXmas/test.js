define(['mocha', 'chai'], function (mocha, chai) {
    describe('Q3 Test', function () {
        it('test days from jan 1 til christmas', function () {
            var expect = chai.expect;
            var janfirst = new Date('2016/01/01');
            var mayfifth = new Date("2015/05/05");
            var result = 359;
            var result2 = 235;

            expect(days_til_christmas(janfirst)).to.equal(result);
            expect(days_til_christmas(mayfifth)).to.equal(result2);
        });
    });
});
