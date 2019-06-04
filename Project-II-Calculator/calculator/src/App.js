import React from 'react';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay />
      <ActionButton text="clear" buttonStyle="big lambda-white"/>
      <NumberButton text="/" buttonStyle="small lambda-red"/>
      <NumberButton text="7" buttonStyle="small lambda-white"/>
      <NumberButton text="8" buttonStyle="small lambda-white"/>
      <NumberButton text="9" buttonStyle="small lambda-white"/>
      <NumberButton text="X" buttonStyle="small lambda-red"/>
      <NumberButton text="4" buttonStyle="small lambda-white"/>
      <NumberButton text="5" buttonStyle="small lambda-white"/>
      <NumberButton text="6" buttonStyle="small lambda-white"/>
      <NumberButton text="-" buttonStyle="small lambda-red"/>
      <NumberButton text="1" buttonStyle="small lambda-white"/>
      <NumberButton text="2" buttonStyle="small lambda-white"/>
      <NumberButton text="3" buttonStyle="small lambda-white"/>
      <NumberButton text="+" buttonStyle="small lambda-red"/>
      <ActionButton text="0" buttonStyle="big lambda-white"/>      
      <NumberButton text="=" buttonStyle="small lambda-red"/>
      
    </div>
  );
};

export default App;
