const str = [" # #  #####  ##  #"]
function scanChar(str) {
  for (let i = 0; i < str.length; i++) {
    const line = str[i]
    console.log(line)
    for (let j = 0; j < line.length; j++) console.log(line.charCodeAt(j))
  }
  return ""
}
scanChar(str)
