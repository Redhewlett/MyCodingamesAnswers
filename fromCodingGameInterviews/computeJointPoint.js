function computeJoinPoint(s1, s2) {
  let lastNumber1 = s1
  let lastNumber2 = s2

  while (lastNumber1 !== lastNumber2) {
    if (lastNumber1 === lastNumber2) {
      break
    }
    if (lastNumber1 > lastNumber2) {
      lastNumber2 = nextNumber(lastNumber2)
    } else if (lastNumber1 < lastNumber2) {
      lastNumber1 = nextNumber(lastNumber1)
    }
  }

  return lastNumber1
}

function nextNumber(number) {
  let separate = String(number)
    .split('')
    .map((element) => {
      return Number(element)
    })
    .reduce((a, b) => a + b)
  return number + separate
}
