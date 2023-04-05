// example = 39847
function computeCheckDigit(identificationNumber) {
  // Write your code here

  // add evenindexed numbers then multiply by 3
  const addEven =
    identificationNumber
      .split("")
      .map((num, index) => {
        if (index % 2 === 0) {
          return parseInt(num)
        }
        return 0
      })
      .reduce((a, b) => {
        return a + b
      }) * 3
  // add oddindexed numbers
  const addOdd = identificationNumber
    .split("")
    .map((num, index) => {
      if (index % 2 !== 0) {
        return parseInt(num)
      }
      return 0
    })
    .reduce((a, b) => {
      return a + b
    })
  // add even and odd
  const sum = addEven + addOdd
  const sumArr = String(sum).split("")
  // last number
  let last = sumArr[sumArr.length - 1]
  // check if 0 and decide
  let checkDigit = last !== "0" ? 10 - parseInt(last) : 0

  console.log(checkDigit)
}
computeCheckDigit("39847")
