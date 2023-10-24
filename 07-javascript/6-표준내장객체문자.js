const str = "Hello World";

//length
console.log(str.length); //11

//include
console.log(str.includes("Hello")); //true
console.log(str.includes("hello")); //false
console.log(str.includes("ello", 1)); //true

//indexOf
console.log(str.indexOf("World")); //6
console.log(str.indexOf("world")); //-1

if (str.indexOf("Hello") !== -1) {
  console.log("Hello가 포함된 문장입니다.");
}
if (!str.includes("Hello")) {
  console.log("Hello가 포함되지 않은 문장입니다.");
}

//padStart
const str2 = "12345";

console.log(str2.padStart(10, "0")); //0000012345
console.log(str2.padEnd(3, "0")); //12345

// replace
const str3 = "hello winter winter";

console.log(str3.replace("winter", "summer"));
console.log(str3.replace("/winter/g", "summer"));
console.log(str3);

//slice
const str4 = "hello world";

console.log(str4.slice(0, 3));
console.log(str4.slice(6, -1));
console.log(str4.slice(6));
console.log(str4);

//split
console.log(str4.split(" "));
console.log(str4.split(""));

//toLowerCase,toUpperCase
const str5 = "Hello World";

console.log(str5.toLocaleLowerCase());
console.log(str5.toUpperCase());

// trim
const str6 = "hello world";
console.log(str6.trim);
console.log(str6);
