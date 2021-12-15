// eslint-disable-next-line no-undef
importScripts('a.js')

// a 里面有一个函数
// eslint-disable-next-line no-undef
sayHello()

self.onmessage = e => {
  console.log(e)
}

setTimeout(() => {
  self.postMessage({ b: 1 })
  // eslint-disable-next-line no-undef
  self.postMessage({ result: add(500, 20) })
}, 3000)
