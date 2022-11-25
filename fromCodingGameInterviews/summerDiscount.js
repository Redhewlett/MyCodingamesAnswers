// given a list of product price and a discount, output the total price
// the discount is applied on the highest product's price

function calculateTotalPrice(prices, discount) {
  const ordered = prices.sort((a, b) => a - b)
  const highestReduced = Math.floor(ordered[ordered.length - 1] - (ordered[ordered.length - 1] * discount) / 100)
  ordered[ordered.length - 1] = highestReduced
  const finalPrice = ordered.reduce((a, b) => a + b)
  return finalPrice
}
