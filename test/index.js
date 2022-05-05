
/* IMPORT */

import {describe} from 'fava';
import isNumeric from '../dist/index.js';

/* MAIN */

describe ( 'isNumeric', it => {

  it ( 'Checks if a variable represents a numeric value', t => {

    const truthy = [3, '3', 2e+30, '2e+30'];
    const falsy = [Infinity, NaN, '__test__', '123test'];

    truthy.forEach ( val => t.true ( isNumeric ( val ) ) );
    falsy.forEach ( val => t.false ( isNumeric ( val ) ) );

  });

});
