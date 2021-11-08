/*
With more traditional syntaxes like concat, we can concatenate arrays, 
but this only allows us to combine arrays at the end of one, and at the start of another. 
Spread syntax makes the following operation extremely simple, to put the values in any position:
*/

let thisArray =  ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

console.log(thatArray) // ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].
