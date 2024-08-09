// 1.
var coffee1 = "1";
// 2.
var coffee = "아메리카노";
var coffeelist = ["아메리카노", "라떼", "핫초코"];
//num 배열 변수 만들기
var a = function (arr) {
    arr.forEach(function (v) { return v; });
};
//boolean 배열 변수 만들기 그리고 js화 시키기
var b = function (arr) {
    arr.forEach(function (x) { return x; });
};
var test = function (arr) {
    arr.forEach(function (x) {
        x.toUpperCase();
    });
};
