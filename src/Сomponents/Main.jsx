import React from "react";
import "./Main.css";
import Foto1 from "../Сomponents/Image/Jungle.jpg";
import Foto2 from "../Сomponents/Image/Jungle-Rot.jpg";

// import articles from "../Data/article.json";
// import "bootstrap/dist/css/bootstrap.css";

function Main() {
  return (
    <div className="Main">
      <img className="img1" src={Foto1} alt="" />
      <img className="img2" src={Foto2} alt="" />
    </div>
  );
}

export default Main;
