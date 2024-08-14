// xs, sm , md, lg, xl
// xs, sm , md, lg, xl
// bg : primary, secondary, dark
//child : top, middle , botton
// click : 함수(알럿)
var childIn = {
    top: "start",
    middle: "center",
    botton: "end",
};
var mycard = {
    height: "xs",
    width: "xs",
    backgroundcolor: "dark",
    child: "top",
    click: function () { return alert("이힛"); },
};
var applycardstyle = function (tag, css) {
    tag.style.height = css.height;
    tag.style.width = css.width;
    tag.style.backgroundColor = css.backgroundcolor;
    tag.style.display = "flex";
    tag.addEventListener("click", css.click);
};
var cards = document.createElement("div");
applycardstyle(cards, mycard);
document.body.appendChild(cards);
