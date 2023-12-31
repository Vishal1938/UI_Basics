
import './App.css';
import { useState } from 'react';

function App() {

  const [counter,setCounter]=useState(0);

  const AddValue=()=>{
    setCounter(prevCounter=> prevCounter+1);
  }

  const removeValue=()=>{
    setCounter(prevCounter=>prevCounter-1);
  }

  return (
    <>
    <h1>Counter react App</h1>
    <h2>Counter value: {counter} </h2>
    <button onClick={AddValue}>Add Value {counter}</button>
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  );
}

export default App;
