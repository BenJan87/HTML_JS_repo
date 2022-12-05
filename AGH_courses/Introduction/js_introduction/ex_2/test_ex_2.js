var expect = chai.expect;

function cyfry(napis) {
    let count = 0;
    napis.split("").forEach(element => {if (Number.isInteger(parseInt(element))) {count += parseInt(element);}});
    return count;
}

function litery(napis) {
    let count = 0;
    napis.split("").forEach(element => {if (!Number.isInteger(parseInt(element))) {count += 1;}});
    return count;
}

function suma(napis) {
    let count = "";
    napis.split("").every(element => {
        if (Number.isInteger(parseInt(element))) {count += element;return true;} 
        else {return false;}
    });

    if (count.length === 0) {count = 0;}
    count = parseInt(count);
    return count;
    // return sum + count;
}

// cyfry
describe('The "cyfry(napis)" function', function() {
    it('Returns 10 for 1234', function() {
        expect(cyfry('1234')).to.equal(10);
        });

    it('Returns 0 for abcd', function() {
        expect(cyfry('abcd')).to.equal(0);
        });

    it('Returns 10 for abcd1234', function() {
        expect(cyfry('abcd1234')).to.equal(10);
        });

    it('Returns 10 for 1234abcd', function() {
        expect(cyfry('1234abcd')).to.equal(10);
        });

    it('Returns 0 for empty string', function() {
        expect(cyfry('')).to.equal(0);
        });
});

//litery
describe('The "litery(napis)" function', function() {
    it('Returns 0 for 1234', function() {
        expect(litery('1234')).to.equal(0);
        });

    it('Returns 4 for abcd', function() {
        expect(litery('abcd')).to.equal(4);
        });

    it('Returns 4 for abcd1234', function() {
        expect(litery('abcd1234')).to.equal(4);
        });

    it('Returns 4 for 1234abcd', function() {
        expect(litery('1234abcd')).to.equal(4);
        });

    it('Returns 0 for empty string', function() {
        expect(litery('')).to.equal(0);
        });
});

//suma
describe('The "suma(napis)" function - basic variable sum is equal to 5', function() {
    it('For 1234 the sum should equals 1234', function() {
        expect(suma('1234')).to.equal(1234);
        });

    // suma("abcd");
    it('For abcd the sum should equals 0', function() {
        expect(suma('abcd')).to.equal(0);
        });
    // actual_sum = 5;

    // suma("1234abcd");
    it('For 1234abcd the sum should equals 1234 ', function() {
        expect(suma('abcd')).to.equal(0);
        console.log(3);

        });
    // actual_sum = 5;

    // suma("abcd1234");
    it('For abcd1234 the sum should equals 0 ', function() {
        expect(suma('abcd1234')).to.equal(0);
        console.log(4);

        });
    // actual_sum = 5;

    // suma("");
    it('For empty string the sum should equals 0 ', function() {
        expect(suma("")).to.equal(0);
        console.log(5);
        });
});