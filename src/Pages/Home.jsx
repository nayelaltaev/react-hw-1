import ContainUp from "../Containers/ContainUp";
import Input from "../Сomponents/Input";

import Button from "../Сomponents/Button";
import TextContain from "../Containers/TextContain";
import ContainDown from "../Containers/ContainDown";

import "./Style.css";
import Header from "../Сomponents/Header";

function Home() {
  return (
    <>
      <div className="block">
        <ContainUp />
        <Header />
        <Input />
        <Button />
        <TextContain />
        <ContainDown />
      </div>
    </>
  );
}

export default Home;
