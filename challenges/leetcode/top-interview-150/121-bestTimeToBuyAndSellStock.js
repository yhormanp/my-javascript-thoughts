// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

let prices = [];
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let maxProfit = 0;
  let sellPrice = 0;

  for (let i = 1; i < prices.length; i++) {
    sellPrice = prices[i];
    if (sellPrice - buyPrice > 0) {
      maxProfit =
        sellPrice - buyPrice > maxProfit ? sellPrice - buyPrice : maxProfit;
    }
    buyPrice = sellPrice < buyPrice ? sellPrice : buyPrice;
    console.log('setting buy Price', buyPrice);
  }
  return maxProfit;
};

// proposal from leetcode
// var maxProfit = function(prices) {
//     let min = prices[0];
//     let profit = 0;
//     for(let i =1 ; i< prices.length; i++) {
//         let price = prices[i];
//         if(price < min) {
//             min = price
//             continue;
//         }

//         let currentProfit = price - min;
//         if(currentProfit > profit) {
//             profit = currentProfit
//         }

//     }
//     return profit
// };

//scenario 1
prices = [7, 1, 5, 3, 6, 4];
console.log('scenario 1', maxProfit(prices));

//scenario 2
prices = [7, 6, 4, 3, 1];
console.log('scenario 2', maxProfit(prices));

//scenario 3
// console.log('scenario 3', maxProfit(prices));
