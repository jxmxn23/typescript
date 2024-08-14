// xs, sm , md, lg, xl
// xs, sm , md, lg, xl
// bg : primary, secondary, dark
//child : top, middle , botton
// click : 함수(알럿)

type Card = {
  Cardheight: "xs" | "sm" | "md" | "lg" | "xl";
  Cardwidth: "xs" | "sm" | "md" | "lg" | "xl";
cardBG: "primary" | "secondary" | "dark";
  Cardchild: "top" | "middle" | "botton";
  Cardclick: () => void;
};

type Cardstyle = {
  height: Cardheight,
  width: Cardwidth,
  backgroundcolor: 
}

type childstyle = {
  top: string;
  middle: string;
  botton: string;
};

const childIn: childstyle = {
  top: "start",
  middle: "center",
  botton: "end",
};

type Cardheight = {
  xs: "10px";
  sm: "15px";
  md: "20px";
  lg: "30px";
  xl: "40px";
};

type Cardwidth = {
  xs: "10px";
  sm: "15px";
  md: "20px";
  lg: "30px";
  xl: "40px";
};

type backgroundColors = {
  primary: "#1abc9c";
  secondary: "#8e44ad";
  dark: "#2c3e50";
};

const mycard: Card = {
  height: "xs",
  width: "xs",
  backgroundcolor: "dark",
  child: "top",
  click: () => alert("이힛"),
};


type color = {
  [key in ]: string
}
 const colormap:color = {

 }



const applycardstyle = (tag: HTMLElement, css: Card) => {
  tag.style.height = css.height;
  tag.style.width = css.width;
  tag.style.backgroundColor = css.backgroundcolor;
  tag.style.display = "flex";
  tag.addEventListener("click", css.click);
};

const cards = document.createElement("div");
applycardstyle(cards, mycard);
document.body.appendChild(cards);
