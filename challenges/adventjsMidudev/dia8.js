/*
Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Por ejemplo:

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
    
Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
*/

function maxProfit(prices) {
  const maxValue = Math.max(...prices);
  const indexMaxValue = prices.indexOf(maxValue);

  const buyData = prices.filter(
    (value, index) => value < maxValue && index < prices.length - 2
  );

  if( buyData.length === 0 ){
    console.log('no hay ganancias')
      return -1;
  }
  console.log('buy', buyData);

  const minValue = Math.min(...buyData);
  const indexMinValue = prices.indexOf(minValue);
  console.log(minValue);

  if (indexMaxValue > indexMinValue) {
    console.log("estoy por encima");
    console.log("benefit", maxValue - minValue);
    return maxValue - minValue;
  } else if (indexMaxValue < indexMinValue) {
    console.log("estoy por debajo");

    // need to find a new high value from the minValue position
    const sellData = prices.filter(
      (value, index) => value > minValue && index > indexMinValue
    );
    console.log("val", sellData);
    if (sellData.length > 0) {
      const newMaxValue = Math.max(...sellData);
      console.log("benefit", newMaxValue - minValue);
      return newMaxValue - minValue;
    } else {
        console.log('no hay ganancias')
        return -1
    }
  }
}

// const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
// maxProfit(pricesBtc); // -> -1 (no hay ganancia posible)

const pricesEth = [1,1,1];
maxProfit(pricesEth);
