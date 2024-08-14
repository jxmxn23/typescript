// 타입 매니퓰레이션(조작) 연산자들

// 1.in 연산자
//object 에 특정 속성이 있음?

// 2. keyof 연산자
// key 이름 가져오기
type Humen = {
  name: string;
  age: number;
  race: string;
};

type test = keyof Humen; // name | age | race
const b1: test = "age";

// 3. as 연산자 [타입 단언]
const a4 = document.querySelector(".box") as Element;

type person = {
  name: string;
  age: number;
  make: () => void; // void 비었음
};

const a5: person = {
  name: "고봉민",
  age: 51,
  make: () => {
    alert("김밥 만드는 중");
  },
};

type dog = {
  name: string;
  age: number;
  type: string;
  eat: () => void;
  run: () => void;
};

const dogs: dog = {
  name: "꼬미",
  age: 3,
  type: "푸들",
  eat: () => alert("간식먹는중"),
  run: () => alert("달리는중"),
};

type fish = { swim: () => void };
type mammal = { breathe: () => void };
type bird = { fly: () => void };
type Reptile = { lay: () => void };

const dolphin: mammal & fish = {
  swim: () => alert("수영"),
  breathe: () => alert("새끼"),
};

const croco: Reptile & fish = {
  lay: () => alert("새끼악어"),
  swim: () => alert("입벌림"),
};
