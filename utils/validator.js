// 数据校验
export const form = (obj, key, value) => {
    if (Reflect.has(key) && value > 20) {
      obj[key] = value
    }
}
let data = new Proxy(response.data, {
  set: form
})

// 读写监控
let validator = {
    set(target, key, value) {
      if (key === 'age') {
        if (typeof value !== 'number' || Number.isNaN(value)) {
          throw new TypeError('Age must be a number')
        }
        if (value <= 0) {
          throw new TypeError('Age must be a positive number')
        }
      }
      return true
    }
  }
const person = { age: 27 }
const proxy = new Proxy(person, validator)
proxy.age = 'foo'

// Generator 可以通过调用 next 方法拿到依次遍历的值，让遍历的执行变得“可控”。
function * generatorForLoop () {
  for (let i = 0; i < 5; i += 1) {
    yield console.log(i)
  }
}

const genForLoop = generatorForLoop()
console.log(genForLoop.next()) // first console.log - 0
console.log(genForLoop.next()) // 1
console.log(genForLoop.next()) // 2