'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadenCase = (str) =>{
    let arr=str.split('');
    let res ='';
            for (let i=0; i<arr.length; i++) {
                if (arr[i-1]==' ') {   
                   // let b = arr[i]               
                     res += arr[i].toUpperCase()
                } else {
                res +=arr[i];
                }
               
            }
   
    return res;
 }
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof jadenCase, 'function');
assert.deepStrictEqual(jadenCase('I am?'),('I Am?'));
assert.deepStrictEqual(jadenCase('How are you ?'),('How Are You ?'));
//assert.fail('You must write your own tests');
// End of tests */
