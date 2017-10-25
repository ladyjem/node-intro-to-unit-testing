const should = require('chai').should();
 const fizzBuzzer = require('../fizzBuzzer');
 
 describe('fizzBuzzer', function(){
    it('should count off Fizz Buzz style', function(){
       const normalCases = [
           {"num":18, "expected": "fizz"},
           {"num": 22, "expected": 22},
           {"num": 25, "expected": "buzz"},
           { "num": 30, "expected": "fizz-buzz"}
        ]; 
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            answer.should.equal(input.expected);
        });
    }); 
     it('should raise error if args not numbers', function() {
      // range of bad inputs where not both are numbers
        const badInputs = [
            'a',
            '1',
            false
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
            (function() {
                fizzBuzzer(input);
            }).should.throw(Error);
        });
     });
 });