define(['mocha', 'chai'], function (mocha, chai) {
    describe('Q7 Test', function () {
        it('return celcius to Fahrenheit', function () {
            var expect = chai.expect;
            var celcius = 30;
            var result = 86;

            expect(c_to_f(celcius)).to.equal(result);
        });

        it("return celcius to fahrenheit with negative temperature", function () {
            var expect = chai.expect;
            var celcius2 = -5;
            var result2 = 23;

            expect(c_to_f(celcius2)).to.equal(result2);
        });
    });
});
