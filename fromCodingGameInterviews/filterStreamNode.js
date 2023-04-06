const stream = require("stream")

function filterStream(inputStream, regexp) {
  // Your code goes here
  const outputStream = inputStream
  const transform = new stream.Transform({
    transform(chunk, encoding, callback) {
      const str = chunk.toString()
      const match = str.match(regexp)
      if (match) {
        this.push(match[0])
      }
      callback()
    }
  })
  outputStream.pipe(transform)

  return outputStream
}
