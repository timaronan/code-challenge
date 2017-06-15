// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

var Hamming = function(){};
Hamming.prototype.compute = function(input1, input2) {
	if(input2.length !== input1.length)
		throw 'DNA strands must be of equal length.';
	
	var diff = 0;
    for (i = 0; i < input1.length; i++) {
        if (input1[i] != input2[i]) {
            diff = diff + 1;            
        };
    };
    return diff;
};

module.exports = Hamming;