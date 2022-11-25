let extensions = []

for (let i = 0; i < N; i++) {
  var inputs = readline().split(' ')
  const EXT = inputs[0] // file extension
  const MT = inputs[1] // MIME type.
  extensions.push({ ext: EXT.toLocaleLowerCase(), mt: MT })
}

for (let j = 0; j < Q; j++) {
  const FNAME = readline().toLocaleLowerCase() // One file name per line.
  const dot = FNAME.lastIndexOf('.')
  if (dot < 0) {
    console.log('UNKNOWN')
    continue
  }

  const FNameExtension = FNAME.slice(dot + 1, FNAME.length)
  let match = 0
  let indexMatch

  for (let i = 0; i < extensions.length; i++) {
    if (FNameExtension === extensions[i]['ext']) {
      match++
      indexMatch = i
    }
  }
  if (match > 0) {
    console.log(extensions[indexMatch]['mt'])
  } else {
    console.log('UNKNOWN')
  }
}
