import "./App.css";
import Header from "./Сomponents/Header";
import Button from "./Сomponents/Button";
import Input from "./Сomponents/Input";
import Footer from "./Сomponents/Footer";
import Main from "./Сomponents/Main";
import Menu from "./Сomponents/Menu/Menu";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Button />
        <Input />
        <Main />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
