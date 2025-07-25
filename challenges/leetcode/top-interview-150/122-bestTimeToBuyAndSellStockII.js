// // 122. Best Time to Buy and Sell Stock II
// // You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// // On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// // Find and return the maximum profit you can achieve.

// // Example 1:

// // Input: prices = [7,1,5,3,6,4]
// // Output: 7
// // Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// // Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// // Total profit is 4 + 3 = 7.
// // Example 2:

// // Input: prices = [1,2,3,4,5]
// // Output: 4
// // Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// // Total profit is 4.
// // Example 3:

// // Input: prices = [7,6,4,3,1]
// // Output: 0
// // Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let buyPrice = prices[0];
  // let qtyStocks = 0;

  for (let i = 1; i < prices.length; i++) {
    let sellPrice = prices[i];
    if (sellPrice - buyPrice > 0) {
      //need to sell
      maxProfit += sellPrice - buyPrice;
      console.log('max profit add', sellPrice, buyPrice, maxProfit);
      buyPrice = prices[i];
      continue;
    }
    buyPrice = sellPrice < buyPrice ? sellPrice : buyPrice;
  }

  return maxProfit;
};

// solution proposed by leetcode
var maxProfit = function(prices) {
    let hasStock = -1, maxProfit = 0

    for(let i=0;i<prices.length;i++) {
        if(hasStock < 0) { // need to find good price to buy 
            if(prices[i] < prices[i+1]) { //buy 
                hasStock = i
            }
        } else { //find price to sell 
            if(i+1 >= prices.length || prices[i] > prices[i+1]){ //sell
                maxProfit += prices[i] - prices[hasStock]
                hasStock = -1
            } 
        }
    }

    return maxProfit
};


//scenario 1
prices = [7, 1, 5, 3, 6, 4];
console.log('scenario 1', maxProfit(prices)); // expected: 7

//scenario 2
prices = [1, 2, 3, 4, 5];
console.log('scenario 2', maxProfit(prices)); // expected: 4

//scenario 3
prices = [7, 6, 4, 3, 1];
console.log('scenario 3', maxProfit(prices)); // expected: 0
