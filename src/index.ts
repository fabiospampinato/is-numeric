
/* MAIN */

const isNumeric = ( value: string ): boolean => {

  return !isNaN ( parseFloat ( value ) ) && Number.isFinite ( Number ( value ) );

};

/* EXPORT */

export default isNumeric;
