import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import Button from "./components/Button/Button";
import {Link, Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";


function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route index element={<ProductList/>}/>
          <Route path={"/form"} element={<Form/>}/>
      </Routes>
      <Button className={"toggleButton"} onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
