// boxstyle 이라는 타입 만들기
// width, height, backgroundColor , borderRdius, border

type BoxSize = "small" | "medium" | "large";
type BoxBG = "red" | "blue" | "black" | "green" | "skyblue";
type BoxBR = "0px" | "4px" | "10px" | "9999px";
type Boxborder = "1px solid black" | "1px solid gray";
type BoxStyle = {
  size: BoxSize;
  background: BoxBG;
};

// type boxStyle = {
//     wieth: "50px" | "100px" | "150px"
//     heigth:  "50px" | "100px" | "150px"
//     backgronudColor: "red" | "blue" | "black" | "green" | "skyblue"
//     borderRdius:number,
//     border:number,
// }
