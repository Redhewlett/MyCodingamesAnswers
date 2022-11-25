// -----wrong answer below-----
// function factorial(n) {
//     if (n === 0) {
//       return 1
//     } else {
//       return n * factorial(n)
//     }
//   }
// -----wrong answer above-----

// -----good answer below-----
function factorial(n) {
  if (n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
