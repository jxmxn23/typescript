// type mega = {
//   [key: string]: string;
// }; // 키값은 string 이여만 함

// type coffeemenu = "name" | "price";
// type coffeeIngredient = "Kcal" | "shot" | "size";
// type coffee = coffeemenu | coffeeIngredient;

// type venticoffee = {
//   [key in coffee]: string;
// };

// const menu: venticoffee = {
//   name: "아아",
//   price: "1500",
//   Kcal: "250",
//   shot: "2",
//   size: "small",
// };

//자동차 객페 변수 필요
// 모델 생산연도 엔진종류 가격 색상

type carmodel = "model" | "color" | "year" | "price" | "engine";

type car = {
  [key in carmodel]: string;
};

const vantte: car = {
  model: "avantte",
  color: "black",
  year: "2024",
  price: "2000",
  engine: "hybird",
};
