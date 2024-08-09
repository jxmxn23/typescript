// 1.
const coffee1: string = "1";
// 2.
const coffee = "아메리카노";

const coffeelist: string[] = ["아메리카노", "라떼", "핫초코"];

//num 배열 변수 만들기
const a = (arr: Number[]) => {
  arr.forEach((v) => v);
};

//boolean 배열 변수 만들기 그리고 js화 시키기
const b = (arr: boolean[]) => {
  arr.forEach((x) => x);
};

const test = (arr: string[]) => {
  arr.forEach((x) => {
    x.toUpperCase();
  });
};
