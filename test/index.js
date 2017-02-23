
/* IMPORT */

import {describe} from 'ava-spec';
import isNumeric from '../dist';

/* IS NUMERIC */

describe ( 'isNumeric', it => {

  it ( 'Checks if a variable represents a numeric value', t => {

    const truthy = [3, '3', 2e+30, '2e+30'],
          falsy = [Infinity, NaN, '__test__', '123test'];

    truthy.forEach ( val => t.true ( isNumeric ( val ) ) );
    falsy.forEach ( val => t.false ( isNumeric ( val ) ) );

  });

});
