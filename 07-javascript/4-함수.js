// sum 함수
// 선언식
function sum1(x, y) {
  return x + y
}

// 표현식
const sum2 = function (x, y) {
  return x + y
}

// 화살표 함수
const sum3 = (x, y) => {
  return x + y
}

// 화살표 함수 축약
const sum4 = (x, y) => x + y


console.log(sum1(1, 2)) // 3
console.log(sum2(1, 2)) // 3
console.log(sum3(1, 2)) // 3

// 화살표 함수 예시
const a = () => { }
const b = x => { }
const c = (x, y) => { }
const d = x => { return x + x }
const e = x => x + x
const f = x => {
  console.log(x)
  return x * x
}
const g = () => { return { a: 1 } }
const h = () => ({ a: 1 })

// const i = () => { return { a: 1 } }
// const j = () => ({ a: 1 })  