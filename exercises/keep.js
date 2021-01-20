'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) =>{
    let arr=str.split('');
    let res ='';
    return res=arr[0]+arr[1];
 }
 const keepLast = (str) =>{
    let arr=str.split('');
    let res ='';
    return res=arr[arr.length-2]+arr[arr.length-1];
 }
 const keepFirstLast = (str) =>{
    let arr=str.split('');
    let res ='';
    if (arr.length>=2) {
            for (let i=2; i<arr.length; i++) {
                res +=arr[i];
            }
    }  else {
        res =res+'';
    }
    return res;
 }
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function');
assert.deepStrictEqual(keepFirst('ABC'),('AB'));
assert.deepStrictEqual(keepFirst('Catsss'),('Ca'));

assert.strictEqual(typeof keepLast, 'function');
assert.deepStrictEqual(keepLast('ABC'),('BC'));
assert.deepStrictEqual(keepLast('Catsss'),('ss'));

assert.strictEqual(typeof keepFirstLast, 'function');
assert.deepStrictEqual(keepFirstLast('ABC'),('C'));
assert.deepStrictEqual(keepFirstLast('Catsss'),('tsss'));
assert.deepStrictEqual(keepFirstLast('Catdog'),('tdog'));
//assert.fail('You must write your own tests');
// End of tests */
