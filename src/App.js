import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import Form from "./components/Form/Form";
function App() {

    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <Header/>
        <Form/>
        <button onClick={onToggleButton}>Main Button</button>
    </div>
  );
}

export default App;
