import style from "./Card.module.css";
import Localfont from "next/font/local";
// font-family: "Exile", system-ui;
//   font-weight: 400;
const myfont = Localfont({
  src: "../../../public/Alkalami/Alkalami-Regular.ttf",
  weight: "100",
});
function Card({ name, time }) {
  return (
    <div className={style.Card}>
      <h2 className={myfont.className}>{name}</h2>
      <p className={myfont.className}>{time}</p>
    </div>
  );
}

export default Card;
