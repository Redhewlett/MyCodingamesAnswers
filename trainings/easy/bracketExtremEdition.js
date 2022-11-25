const expression = readline()

const array = expression.split('')
const close = [')', ']', '}']
const tags = { '(': ')', '[': ']', '{': '}' }

const listOpen = []
const other = []
let result = true

//early return closing tag starts
for (let j = 0; j < close.length; j++) {
  if (array[0] === close[j]) {
    result = false
  }
}

for (let i = 0; i < array.length; i++) {
  //if we have an open tag put it in the list
  if (Object.keys(tags).includes(array[i])) {
    listOpen.push(array[i])
  }
  //if there is a closed tag check if the last index of listopen is matching, if so delete
  if (Object.values(tags).includes(array[i])) {
    const closingTag = array[i]
    const key = Object.keys(tags).find((key) => tags[key] === closingTag)
    if (listOpen[listOpen.length - 1] === key) {
      listOpen.pop()
    } else {
      result = false
      console.log(result)
      return
    }
  }
  if (i === array.length - 1 && listOpen.length !== 0) {
    return console.log(false)
  }
}

//if the list of open is not = 0 then a tag was not closed and thus its false
console.log(result)
