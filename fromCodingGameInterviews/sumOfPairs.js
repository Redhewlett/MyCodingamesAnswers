// todo:solve with only 2 int

function findSumPair(numbers, k) {
  const indexs = []
  for (let i = 0; i < numbers.length; i++) {
    const value1 = numbers[i]

    for (let j = 1; j < numbers.length; j++) {
      value2 = numbers[j]
      if (value1 + value2 === k) {
        indexs.push(i, j)
      }
    }
  }
  return indexs
}
