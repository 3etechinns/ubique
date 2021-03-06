var assert = require('assert');
var ubique = require('../../index.js');

suite('linalgebra',function () {
console.log('Testing linalgebra/linsolve ...');
test('linsolve', function (done) {

var transp = ubique.transpose;

assert.deepEqual(ubique.linsolve([[1,1,-1],[1,-2,3],[2,3,1]],transp([5,6,3])),[[5.846153846153846],[-2.3846153846153846],[-1.5384615384615385]]);
assert.deepEqual(ubique.linsolve([[1,1,-1],[1,-2,3],[2,3,1]],[[4],[-6],[7]]),[[1],[2],[-0.9999999999999999]]);
assert.deepEqual(ubique.linsolve([[1,1,-1],[1,-2,3],[2,3,1]],ubique.eye(3)),[[0.846153846153846,0.3076923076923077,-0.07692307692307707],[-0.3846153846153846,-0.23076923076923078,0.30769230769230776],[-0.5384615384615384,0.07692307692307691,0.23076923076923078]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->