import React, {useRef} from "react";
import './App.css';
import { useReactToPrint } from 'react-to-print';
//import {PrintComponent} from "./printComponent";
import QuotationDetails from "./quotation";

const App = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

  return (
    <div className="App">
        <QuotationDetails ref={ componentRef}/>
        <button onClick={handlePrint}>Imprimer !</button>
    </div>
  );
}

export default App;
