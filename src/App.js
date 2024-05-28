import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import Button from "./components/Button/Button";


function App() {

  const {onToggleButton, tg}=useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <Header/>
      <Button className={"toggleButton"} onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
