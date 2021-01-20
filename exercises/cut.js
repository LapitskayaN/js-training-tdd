'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (str) =>{
    let arr=str.split('');
    let res ='';
    for (let i=2; i<arr.length; i++) {
        res +=arr[i];
    }
    return res;
 }
 const cutLast = (str) =>{
    let arr=str.split('');
    let res ='';
    for (let i=0; i<arr.length-2; i++) {
        res +=arr[i];
    }
    return res;
 }
 const cutFirstLast = (str) =>{
    let arr=str.split('');
    let res ='';
    if (arr.length>=4) {
            for (let i=2; i<arr.length-2; i++) {
                res +=arr[i];
            }
    }  else {
        res =res+'';
    }
    return res;
 }

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.deepStrictEqual(cutFirst('ABC'),('C'));
assert.deepStrictEqual(cutFirst('Catsss'),('tsss'));

assert.strictEqual(typeof cutLast, 'function');
assert.deepStrictEqual(cutLast('ABC'),('A'));
assert.deepStrictEqual(cutLast('Catsss'),('Cats'));

assert.strictEqual(typeof cutFirstLast, 'function');
assert.deepStrictEqual(cutFirstLast('ABC'),(''));
assert.deepStrictEqual(cutFirstLast('Catsss'),('ts'));
assert.deepStrictEqual(cutFirstLast('Catdog'),('td'));
//assert.fail('You must write your own tests');
// End of tests */
