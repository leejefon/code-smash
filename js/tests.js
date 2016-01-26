/**
 * Tests
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['mocha', 'chai'], function (mocha, chai) {
    describe('Random', function() {
        describe('#Tests', function () {
            it('has a lot of random tests', function () {
                var expect = chai.expect;
                var foo = 'bar';
                var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

                expect(foo).to.be.a('string');
                expect(foo).to.equal('bar');
                expect(foo).to.have.length(3);
                expect(beverages).to.have.property('tea').with.length(3);
            });
        });
    });
});
