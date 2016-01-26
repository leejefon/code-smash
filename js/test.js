var expect = chai.expect;


describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
        var foo = 'bar'
        var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.length(3);
        expect(beverages).to.have.property('tea').with.length(3);
    });

    it('should return -1 when the value is not present 2', function() {
        var foo = 'bar'
        var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.length(3);
        expect(beverages).to.have.property('tea').with.length(3);
    });

    xit('should return -1 when the value is not present 3', function() {
        [1,2,3].indexOf(5).should.equal(-1);
        //   [1,2,3].indexOf(0).should.equal(-1);
    });
});
