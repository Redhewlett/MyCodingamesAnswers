// a(i,j) must return true if at least one of the arguments is =1
// or if i+j = 1, else return false

function a(i, j) {
  if (i === 1 || j === 1) {
    return true
  }
  if (i + j === 1) {
    return true
  }
  return false
}
