
/* IS NUMERIC */

function isNumeric ( x ) {

  return !isNaN ( parseFloat ( x ) ) && Number.isFinite ( Number ( x ) );

}

/* EXPORT */

export = Object.assign ( isNumeric, { default: isNumeric } );
