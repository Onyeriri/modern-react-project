import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import dog from "./svg/dog.svg";
import heart from "./svg/heart.svg";
import "./AimalShow.css";
import { useState } from "react";

const svgMap = {
  bird,
  cat,
  cow,
  gator,
  horse,
  dog,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <div onClick={handleClick} className="animal">
      <div>
        <img className="size" src={svgMap[type]} alt="animals" />
        <img
          className="heart"
          src={heart}
          alt="heart"
          style={{ width: 10 + 10 * clicks + "px" }}
        />
      </div>
    </div>
  );
}

export default AnimalShow;
