const b = readline()
//get indexs of 0s that are followed by a one, the rest we dont need
//if the array starts with a 1 then the first sequence is = to arr[0] - index of the first 0
// once we know that we push the already existing sequences of 1s in the sequence array.

const result = b
  .split('0')
  .map((b) => b.length)
  .map((curr, index, arr) => {
    return arr[index - 1] > arr[index + 1] ? curr + arr[index - 1] + 1 : curr + arr[index + 1] + 1
  })
  .sort((a, b) => b - a)
console.log(result[0])
