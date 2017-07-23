
/* IS NUMERIC */

function isNumeric ( x ) {

  return !isNaN ( parseFloat ( x ) ) && Number.isFinite ( Number ( x ) );

}

/* EXPORT */

export default isNumeric;
