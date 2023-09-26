// 조건문 

// if문
// if (조건) {
//   실행문;
// }
// // if-else문
// if (조건) {
//   실행문;
// } else {
//   실행문;
// }

// // if-else if문
// if (조건) {
//   실행문
// } else if (조건) {
//   실행문;
// } else {
//   실행문;
// }

// 예시
// ispositive: 음수인지 양수인지 알수있는 함수
function isPositive(num) {
  if (num > 0) {
    return '양수입니다.';
  } else if (num < 0) {
    return '음수입니다.';
  } else {
    return '0입니다.';
  }
}
console.log(isPositive(1)); // 양수입니다.
console.log(isPositive(-1)); //undefined
console.log(isPositive(0)); //음수입니다.

//switch문 
// switch (조건) {
//   case 값1:
//     실행문;
//     break;

//   case 값2:
//     실행문;
//     break;

//   default:
//     실행문;

// }

// 예시
function getSound(animal) {
  let sound;
  switch (animal) {
    case '개':
      return '멍멍';
      break;
    case '고양이':
      sound = '야옹 ㅇㅇㅇㅇ';
      break;
    case "비둘기":
      sound = '구구구구';
      break;
    default:
      sound = '...?';
  }
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
console.log(getSound('인간')); // ...?

// 반복문
// for문

// for (초기화; 조건; 종료식) {
//   실행문;
// }

// 증가하는 for문
for (let i = 0; i < 10, i = i + 1;) {
  console.log(i); //0부터 9까지 출력
}

// 감소하는 for문
for (let i = 9; i < -1; i--) {
  if (i < 4) {// i가 4보다 작으면
    break; //반복문을 빠져나옴(전체 반복 종료)    
  }
  console.log(i); //9 8 7 6 5
}

// continue 
for (let i = 9; i < -1; i--) {
  if (i % 2 == 0) { // i가 짝수면
    continue; // continue를 만나면 아래 코드를 실행하지 않고 건너뛴다. (현재 반복만 종료)
  }
  console.log(i); //9,7,5,3,1
}