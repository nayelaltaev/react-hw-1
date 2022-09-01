import React from "react";
import "../Pages/Style.css";

import Img1 from "../Image/main1.png";

function ContainUp() {
  return (
    <>
      <div className="MainContainer">
        <img className="img1" src={Img1} alt="" />
      </div>
    </>
  );
}

export default ContainUp;
