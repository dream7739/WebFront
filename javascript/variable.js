// 1. JavaScript is very flexble
//developer.mozila.org => MDN에서 공부하기

//Script 태그 위치
// (1) body 맨 마지막
// 단점: 웹사이트가 자바스크립트에 의존적이라면 사용자가 정상적인 페이지 보기 전까지 패칭하는 시간기다려야함
// (2) head + async
// 브라우저가 script async 병렬로 동작, 패칭이 병렬적으로 일어나 다운로드 시간 줄일 수 있음
// (3) head + defer
// 다운로드 명령만 시켜놓고 html 파싱 후 다운로드된 js 실행 [가장 좋은 방법]

// flexible === dangerous
// added ECMAScript 5
// 정리되어있지 않은 문법 오류 발생(상식적인 범위 내 동작)
'use strict';
console.log("hello")



//2. variable
//let (added in ES6) 
//block Scope => 블록 밖에서는 블록 안 변수에 접근 불가
//global 변수 => 실행순간 ~ 끝까지 항상 메모리 탑재 => 최소한으로 탑재. 가능한한 필요한 부분에서 선언해서 사용
let globalName = 'global name'; {
    let name = 'jm';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name); //보이지 않음
console.log(globalName); //보임

//var (don't ever use this) => 이제 사용 X
//why? var은 선언되지 않아도 undefined로 출력 됨, let은 오류 출력
//var hoisting: 어디 선언되어있던 상관 없이 선언을 위로 끌어올려 줌
//var은 block scope를 가지고 있지 않다
console.log(age);
age = 4;
console.log(age); {
    age = 4;
    var age;
}
console.log(age);



//3. constants [상수]
//favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;



//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
//function(변수 타입 중 하나) => first-class function
const count = 17; //integer
const size = 17.1; //demical number
console.log(`value:${count}, type: ${typeof count}`);

//number - special numeric value:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt ( fairy new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890; //over (-2**53) - 2**53
console.log(`vlue: ${bigInt}, type: ${typeof bigInt}`);

//string: 한글자 or 여러글자 상관없이 string으로 통일
const char = 'c';
const bredan = 'bredan';
const greeting = 'hello ' + bredan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${bredan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NanN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, value: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined: 아직 정해지지 않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
//고유 식별자 필요할 때 사용
//동일한 스트링을 사용해도 동일한 것 아님 => Symbol.for을 사용하면 동일하게 가능
//항상 .description으로 스트링 변환해서 출력해야 함
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, ata structure
const jeongmin = {
    name: 'jeongmin',
    age: 25
};
jeongmin.age = 20;

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; //문자열이랑 + , 5가 스트링으로 타입이 변환되면서 75가 된다
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; //넘버로 변환되면서 나누기 연산한다
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); //에러 발생
