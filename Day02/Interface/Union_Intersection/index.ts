// Union (|)
const price: string | number = "2500"; // 2500 또는 "2500"
const name2: string | undefined = undefined;
const hasMilk: boolean | string = "있음"; // true 또는 "있음"

// intersec (&)
const price1: { name: string } & { price: number } = {
  name: "신짐",
  price: 100,
};

type Szie = "Tall" | "grande" | "venti";
type TypeShot = {
  coffee: string;
  shot: number;
};
type Price = { price: number };

type coffee1 = Szie & TypeShot & Price;
type Ade = Szie & Price;
