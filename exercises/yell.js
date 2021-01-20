'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = (str) =>{
    let res = str.toUpperCase()
    return res;
 }
 
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof yell, 'function');
assert.deepStrictEqual(yell('abc'),('ABC'));
assert.deepStrictEqual(yell('Cat'),('CAT'));
//assert.fail('You must write your own tests');
// End of tests */
