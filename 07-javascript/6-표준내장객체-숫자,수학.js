//숫자

// toFixed(자릿수): 소수점 자릿수를 지정
const num = 3.1439897376;

console.log(num.toFixed(2));
console.log(typeof num.toFixed(2));
console.log(Number(num.toFixed(2)));

// toLocaleString(언어):숫자를 문자열로 변환하면서 천 단위마다 구분
const num2 = 1000000000;

console.log(num2.toLocaleString());
console.log(`${num2.toLocaleString()}원`);

// Number.isInteger(숫자): 숫자가 정수인지 확인

console.log(Number.isInteger(0.5));
console.log(Number.isInteger(1));
console.log(Number.isInteger(-1));
