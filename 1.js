// https://www.opentutorials.org/course/743/6495
// oepntutorials__생활코딩 javascript_functions

// 유효범위
var vscope = 'global';
function fscope() {
  alert(vscope);
}
fscope(); // 'global'
// fscope이라는 함수는 함수 외부에 선언된 vscope라는 변수에 접근

var vscope = 'global';
function fscope() {
  var vscope = 'local';
  var lv = 'local variables';
  alert(vscope); // 함수 내부의 vscope를 가리킨다.
}
fscope(); // 'local'
// 지역변수 > 전역변수 순서로 매개변수를 탐색
alert(lv);  // 접근할 수 없어서 undefined

// 함수는 굳이 이름이 필요 없음 : 익명함수
(function() {
  //codes
}())    // 함수를 선언하자마자 바로 호출하는것

function myappFn() {
  //codes
}
myappFn();  //이거랑 똑같음.
// myappFn이라는 변수 안에 함수를 담는다는 의미



// 지역변수를 선언할 수 있는 범위는 함수 내부로 제한(쁠록)
// for loop의 내부에서 선언된 변수는 지역변수가 아니다


// lexical scoping, static scoping : 정적 유효범위
// 클로저와 연결된 개념
var i = 5;

function a() {
  var i = 10;
  b();
}

function b() {
  document.write(i);
}

a();    // function b에서 호출하는 i는 a의 i인가 전역변수 i인가?
// 일단 b블록 안에 지역변수 i가 있는지를 찾음 >> 전역변수를 찾음
// 정의된 시점에서의 유효범위를 갖는다 >> 전역변수 i : 5가 출력된다
// 정적 유효범위라고 한다
// 선언되었을때로 치면 10이 나오는데 정의된 위치를 기준으로 전역변수를 찾기 때문에 5








// 값으로써의 함수와 콜백
// javaScript에서는 함수도 객체다. 함수는 일종의 값이 될 수 있다. 함수 = 값.
// 1. 어떤 변수에 담을 수 있다.
function a() {}
var a = function() {} // 둘이 같은건데 두번째꺼는 a라는 변수에 담기는거
a = {
  b : function() {}
}   // 객체 안에 저장된 함수 // b : key(변수같은의미). property // function() : value, method


// 함수는 인자로도 전달될 수 있다.
function cal(func, num) {
  return func(num)
}
function increase(num) {
  return num+1
}
function decrease(num) {
  return num-1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));


// 함수는 함수의 리턴값으로도 사용될 수 있다
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1));

// 배열의 값으로도 사용할 수 있다
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){  // 0, 1, 2 돈다
    input = process[i](input);
}
alert(input);   // 결과는 11, 121, 60.5가 alert
// 함수는 값이다. 값을 저장하는 컨테이너인 배열에도 저장할 수 있다
// 변수, 함수의 매개변수, 리턴값으로 쓸수있고 이런 형태로 쓸수있는 데이터를 first-class citizen(object) 라고 부른다



// 콜백 : 처리의 위임.

// 비동기 처리에서의 콜백
// 동기적 처리 : 시간 순서대로 실행. 순차적으로
// 비동기적 처리 : 오래걸리는 부분에서는 예약하고 다음 코드를 그냥 실행 >> todo같은것
// Ajax : asynchronous(비동기) javascript and xml
// Ajax로 유알엘을 변경하지 않고도 버튼을 눌러 화면에 표현되는 정보를 바꿀 수 있다
// 웹페이지를 조작하면서 다른 필요한 데이터를 다운받을때 비동기가 사용됨
$.get('./datasource.json.js', function(result){
        console.log(result);
    }, 'json');
    // callback함수 function(result) 에서 result는 get을 통해 가져온 저 js파일 그 자체
    // 제이쿼리 라이브러리의 함수. 저 url에 해당하는 데이터를 가져온 후 어떻게 할지에 대한 콜백함수임
    // 사용자에게 어떤 처리를 위임하고있음
    
