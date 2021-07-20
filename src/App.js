import React, {useRef} from "react";
import './App.css';
import { useReactToPrint } from 'react-to-print';
import {PrintComponent} from "./printComponent";

const App = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

  return (
    <div className="App">
        <PrintComponent ref={ componentRef}/>
        <button onClick={handlePrint}>Imprimer !</button>
    </div>
  );
}

export default App;
