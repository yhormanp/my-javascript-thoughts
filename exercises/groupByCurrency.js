/*
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
    ['usd','sell', 18000],
    ['gbp','buy', 11000],
    ['mxn','buy', 2000],
    ['usd','buy', 5000],
]

const groupedTransactions = transactions.reduce((total, currentValue)=> {
    console.log('total', total);
    console.log('current value', currentValue);
    const existentValue = total[currentValue[0]];
    if(currentValue[1] === 'buy'){
        total[currentValue[0]] =existentValue ? [existentValue[0] + currentValue[2] , existentValue[1]] : [currentValue[2], 0];
    } else if (currentValue[1] === 'sell'){
        total[currentValue[0]] = existentValue ? [ existentValue[0], existentValue[1] + currentValue[2]] : [0, currentValue[2] ];
    }

    return total;

},{})

console.log('result ', groupedTransactions)