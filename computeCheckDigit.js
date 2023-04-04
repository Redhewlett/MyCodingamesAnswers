// example = 39847
function computeCheckDigit(identificationNumber) {
  // Write your code here
  const numbersArr = identificationNumber.split("").map((num) => parseInt(num))
  const addEven = identificationNumber
    .split("")
    .map((num, index) => {
      if (index % 2 === 0) {
        return parseInt(num)
      }
      return 0
    })
    .reduce((a, b) => {
      return a + b
    })
  // rest of the algo in codingame report
}
computeCheckDigit("39847")
