import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import Form from "./components/Form/Form";
function App() {

    const {tg} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <Header/>
        <Form/>
    </div>
  );
}

export default App;
