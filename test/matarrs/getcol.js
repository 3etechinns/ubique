var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/getcol ...');
test('getcol', function (done) {



assert.deepEqual(ubique.getcol([[5,6,5],[7,8,-1]],0),[5,7]);
assert.deepEqual(ubique.getcol([[5,6,5],[7,8,-1]],2),[5,-1]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->