import React from "react";
import "./ContainStyle.css";
import Img2 from "../Image/main2.png";

import TextContain from "./TextContain";

function ContainDown() {
  return (
    <div>
      <img className="Img2" src={Img2} alt="" />
      {/* <TextContain /> */}
      <div>
        <h2 className="text-second">
          В глубоком смысле медитация — это инструмент духовных учений, который
          помогает очистить сознание и научиться управлять им. Это позволяет
          достичь внутреннего состояния спокойствия ума и тела при полной
          осознанности и внимательности. Существуют разные медитативные
          практики. Одни направлены на расслабление и безоценочное наблюдение
          настоящего момента бытия. Целью таких
          медитаций является управление нашим сознанием.
        </h2>
      </div>
    </div>
  );
}

export default ContainDown;
