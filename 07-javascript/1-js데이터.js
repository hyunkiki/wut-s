// string(문자열)
const string1 = 'hello';// 큰따옴표 가능
const string2 = 'bye';// 작은따옴표 가능
const string3 = `stupid ${string1} ${1 + 1}`;// 백틱 가능

console.log(string1, string2, string3);

// number (숫자)
const number = 123; //123은 문자열이다.
const negative = -123;
const float = 3.14;

console.log(number + 1);
console.log(negative + number);
console.log(float + number);

const number2 = -123.123;

console.log(number2 + undefined);
console.log(typeof (number2 + undefined));

// 숫자로 변환
const a = 0.1;
const b = 0.2;

console.log(a + b);
console.log((a + b).toFixed(1));
console.log(typeof (a + b).toFixed(1));
console.log(Number((a + b).toFixed(1)));

// boolean 참과 거짓
const truthy = true;
const falsy = false;

if (truthy) {
  console.log('truthy');
}

// null
let age = null;
console.log(age);

// 재할당의 경우 let을 사용하지 않음
age = 26;
console.log(age);

// underfined
let height;
console.log(height);

height = 'hyunki';
console.log(height);

// ex
const user1 = {
  name: 'hyunki',
  age: 20,
  height: 180,
  email: null,
};

console.log(user1.name, user1.age, user1.height);
console.log(user1.email); // null
console.log(user1.weight); // undefined

// array (배열)
const animals = ['dog', 'cat', 'fish'];

console.log(animals);
console.log(animals[0]); // dog
console.log(animals[2]); // fish
console.log(animals.length); // 3
console.log(animals[animals.length - 1]); // fish

// object (객체)
const user2 = {
  name: 'hyunki',
  age: 20,
};

console.log(user2);
console.log(user2.name); // hyunki
console.log(user2.age); // 20
console.log(user2['name']); // hyunki
console.log(user2['age']); // 20


// ex
const userA = {
  name: 'kim',
  age: 50,
};

const userB = {
  name: 'lee',
  age: 20,
  parent: userA,
};

console.log(userB);
console.log(userB.parent.name); //kim
console.log(userB['parent']['name']); //kim

// 배열에 객체 넣기

const users = [userA, userB];

console.log(users[0]); // {name: 'kim', age: 50}
console.log(users[0].name); // kim
console.log(users[0]['name']); // kim

// function (함수)
// 함수 선언식(기명 함수)
function printHello() {
  console.log('hello');
}

printHello();

console.log(printHello); // [Function: printHello()]
console.log(printHello()); // Hello

// 함수 표현식 (익명 함수)
const getNumber = function () {
  return 123;
}

console.log(getNumber);  // [Function: getNumber]
console.log(typeof getNumber); // 함수 데이터

console.log(getNumber()); // 123
console.log(typeof getNumber()); // number

//TYPE CONVERSION (형 변환)
const aa = 1;
const bb = '1';

console.log(aa == bb);  // false (=== : 일치 연산자)
console.log(aa === bb); // true (== : 동등 연산자)

const cc = false;
const dd = 0;

console.log(cc == dd); //true
console.log(cc === dd); //false

const ee = true;
const ff = 1;

console.log(ee == ff); // true
console.log(ee === ff); // false

// truthy (참 같은 값) & falsy (거짓 같은 값)

if (true) {
  console.log('true');
}

// 데이터 타입 확인(typeof)
console.log(typeof '123');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () { });

// 비교(Comarison) 연산자
// ==, ===, !=, !==, >, >=, <, <=
const d = 1
const e = 3

console.log(d == e); // true
console.log(d === e); // false
console.log(d != e);  // false 부동
console.log(d !== e); // true (불일치)
console.log(d > e); // false
console.log(d < e); //true
console.log(d >= e); //false
console.log(d <= e); // true

// 논리 연산자
// &&, ||

const f = true;
const g = true;

if (f && g) {
  console.log('둘다 참입니다.');
}

console.log(true && false);
console.log(1 && 0);
console.log(1 && 2 && 3);
console.log('a' && 'b' && 'c');
console.log('a' && 'b' && 'c');

// 또는(||)는 연산자
const h = false;
const i = true;

if (h || i) {
  console.log('둘 중에 하나라도 참입니다.');
}

// 연산자를 기준으로 가장 먼저 만나는 true 데이터
console.log(true || false); // true
console.log(1 || 0); // 1
console.log(false || {} || 0); // {}
console.log(false || [] || null); // []
console.log(function () { } || "" || undefined);
console.log(false || 0 || "" || NaN); // NaN

// 병합 연산자
// a ?? b

const j = 0;

console.log(j || 5); //5
console.log(j ?? 5); //0
console.log(undefined ?? 1); //1
console.log(undefined || null); //null
console.log(null ?? 1 ?? 2); //1
console.log(0 ?? 1 ?? 2); //0

// 삼항 연산자
// 조건 ? 침 : 거짓

console.log(true ? 1 : 2); //1
console.log(false ? 1 : 2); //2

// if문 
let p = 5;
// if (p < 3) {
//   console.log('p는 3보다 직습니다.');
// }
// else {
//   console.log('p는 3보다 큽니다.');
// }
console.log(p < 3 ? '참' : '거짓');

// 예시
function isAnimal(text) {
  return text === '고양이' ? '고양이' : '고양이아님';
}

console.log(isAnimal('고양이')); // 고양이
console.log(isAnimal('개')); //고양이 아님

// 전개 연산자
// 배열의 전개

const q = [1, 2, 3];
const r = [4, 5, 6];

console.log(q.concat(r)); //[1,2,3,4,5,6]
console.log([...q, ...r]); //[1,2,3,4,5,6]

// 객체의 전개
const userC = {
  name: '김부모',
  age: 50,
};

const userD = {
  ...userC,
  nick: '김자식',
  age: 20,
  //parent: userC,
};

console.log(userD);

// 함수 인자에서의 전개
function sum(a, b, c) {
  console.log(a + b + c);
}
sum(1, 2, 3); //6

//배열의 데이터를 인자로 전달하려면?
const num = [1, 2, 3];
sum(num[0], num[1], num[2]); // 6(기존방식)

// 전개 연산자를 사용하면?
sum(...num); // 6