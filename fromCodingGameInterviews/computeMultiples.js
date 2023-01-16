// not done yet
function computeMultiplesSum(n) {
  const numbers = []
  const multiples = [3, 5, 7]
  for (let i = 0; i < n; i++) {
    multiples.forEach((element) => {
      if (i !== 0 && i % element === 0) {
        if (!numbers.includes(i)) {
          numbers.push(i)
        }
      }
    })
  }
  console.log(numbers)

  return numbers.reduce((a, b) => a + b, 0)
}

console.log(computeMultiplesSum(20))
