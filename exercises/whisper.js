'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = (str) =>{
    let res = str.toLowerCase()
    return res;
 }
 
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof whisper, 'function');
assert.deepStrictEqual(whisper('ABC'),('abc'));
assert.deepStrictEqual(whisper('Cat'),('cat'));
//assert.fail('You must write your own tests');
// End of tests */
