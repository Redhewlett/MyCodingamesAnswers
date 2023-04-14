const EventEmitter = require("events")
const ac = new AbortController()

// write the function createEE:
// the output of the fn function must be emitted with the 'data' event
// the abort signal should be considered to emitt the close event and stop the data emission

// solved !!!!!!
const createEE = ({ fn, interval, signal }) => {
  const e = new EventEmitter()
  // emit signal on the provided interval
  const myInterval = setInterval(() => {
    e.emit("data", fn())
    // stop when the signal is aborted!
    if (signal.aborted) {
      e.emit("close")
      return clearInterval(myInterval)
    }
  }, interval)

  return e
}

// test
let counter = 0
const e = createEE({
  fn: () => {
    return ++counter
  },
  interval: 300,
  signal: ac.signal
})

e.on("data", console.log)
e.on("close", () => {
  console.log("closed")
})

setTimeout(() => {
  console.log("stopping after 1 seconde")
  ac.abort()
}, 1000)
