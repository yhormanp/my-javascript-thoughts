/* OPTION A
given the following array, 

const transactions = [
    ['usd','buy', 5000],
    ['mxn','buy', 8000],
    ['usd','sell', 12000],
    ['gbp','buy', 8000],
    ['eur','sell', 7000],
    ['usd','sell', 18000],
    ['gbp','buy', 11000],
    ['mxn','buy', 2000],
     ['usd','buy', 5000],
]
group the data by currency and by transaction type to obtain

 {
    // currency: [sums for buy, sums for sell]
    usd: [10000, 30000],
    gbp: [19000, 0],
    eur: [0, 7000],
    mxn: [10000, 0],
}

*/



const transactions = [
    ['usd','buy', 5000],
    ['mxn','buy', 8000],
    ['usd','sell', 12000],
    ['gbp','buy', 8000],
    ['eur','sell', 7000],
    ['frn', 'buy', 3000],
  ['usd','sell', 18000],
    ['gbp','buy', 11000],
    ['frn', 'sell', 1000],
  ['mxn','buy', 2000],
    ['usd','buy', 5000],
  ['frn', 'buy'],
  ['frn', 'sell', null],
];
// [
//   ['usd', 'buy', 5000],
//   ['mxn', 'buy', 8000],
//   ['usd', 'sell', 12000],
//   ['gbp', 'buy', 8000],
//   ['eur', 'sell', 7000],
//   ['usd', 'sell', 18000],
//   ['gbp', 'buy', 11000],
//   ['mxn', 'buy', 2000],
//   ['usd', 'buy', 5000],
// ]

const groupedTransactions = transactions.reduce((total, currentValue) => {
  const [currency, type, value] = currentValue;
  const existentValue = total[currency];
  const valueTranform = value ?? 0;
  if (type === 'buy') {

    total[currency] = existentValue
      ? [existentValue[0] + valueTranform, existentValue[1]]
      : [valueTranform, 0];
  } else if (type === 'sell') {
    total[currency] = existentValue
      ? [existentValue[0], existentValue[1] + value ?? 0]
      : [0, valueTranform];
  }

    return total;

},{})

console.log('result ', groupedTransactions);

// let trans = [['usd', 9000]];
// let text = {};

// text[trans[0][0]] = 'añsldjaoisd';
// console.log(text);

// let a ;
// console.log( 'test', a ?? 9)

/* OPTION B
given the following array, 


const transactions = [
    ["usd", "buy", 5000],
    ["mxn", "buy", 8000],
    ["usd", "sell", 12000],
    ["gbp", "buy", 8000],
    ["eur", "sell", 7000],
    ["frn", "buy", 3000],
    ["usd", "sell", 18000],
    ["gbp", "buy", 11000],
    ["frn", "sell", 1000],
    ["mxn", "buy", 2000],
    ["usd", "buy", 5000],
    ["frn", "buy"],
    ["frn", "sell", null]
  ],

  
group the data by currency and by transaction type to obtain

{
  usd: [ 10000, 30000 ],
  mxn: [ 8000, 1000 ],
  gbp: [ 19000, 0 ],
  eur: [ 0, 7000 ],
  frn: [ 3000, 1000 ]
}

 {
    // currency: [sums for buy, sums for sell]
    usd: [10000, 30000],
    gbp: [19000, 0],
    eur: [0, 7000],
    mxn: [10000, 0],
}

*/
