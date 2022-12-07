const stock = ['AMZN', 'CACC', 'EQIX', 'GOOG', 'ORLY', 'ULTA']
const prices = [
  [12.81, 11.09, 12.11, 10.93, 9.83, 8.14],
  [10.34, 10.56, 10.14, 12.17, 13.1, 11.22],
  [11.53, 10.67, 10.42, 11.88, 11.77, 10.21]
]
function getStockPrices(stock, prices) {
  let avgPrice = {}
  // store total in object props
  for (let i = 0; i < prices.length; i++) {
    let day = prices[i]
    for (let j = 0; j < day.length; j++) {
      let dailyPrice = day[j]
      if (avgPrice[stock[j]]) {
        avgPrice[stock[j]] += dailyPrice
      } else {
        avgPrice[stock[j]] = dailyPrice
      }
    }
  }
  // avg calc
  for (let x = 0; x < stock.length; x++) {
    avgPrice[stock[x]] /= 3
  }
  let result = []
  // send only the 3 top
  Object.entries(avgPrice)
    .sort(([, a], [, b]) => b - a)
    .map((element, index) => {
      if (index >= 3) return
      result.push(element[0])
    })
  console.log(result)
}

getStockPrices(stock, prices)
