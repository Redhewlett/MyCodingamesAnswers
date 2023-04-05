function reshape(n, str) {
  // take out all spaces
  const str_no_space = str.split(" ")
  //   get the letters
  const final_str = str_no_space.join("").split("")
  //   create groups of n
  const final_arr = []
  for (let i = 0; i < final_str.length; i += n) {
    final_arr.push(final_str.slice(i, i + n).join(""))
  }
  for (let words in final_arr) {
    console.log(final_arr[words])
  }
}

reshape(3, "abc def ghi j")
