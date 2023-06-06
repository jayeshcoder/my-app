import { useState } from 'react';
import './App.css';
import Add from './component/Add.js';
import { Sub, Multi } from './component/Sub.js';
Add()
Sub()
Multi()
console.log('App js');

function App() {
  const [inputValue, setInputValue] = useState(0);
  const printValue = () => {
    console.log('printValue', inputValue)
  }
  // let inputValue = 5 ;
  return (
    <div>
    <h1>my app first  react</h1>
    <div> <input value={inputValue} onChange={(e) =>  { setInputValue(e.target.value) 
       console.log('inputValue',inputValue);} } type='number' placeholder = 'Enter no' ></input> </div>
  <button onClick={printValue}>print</button>
    <p>2 this is paragraph 1 { inputValue }</p>

    <a href = "https://www.google.com/">google</a>
      <Add a = '2' b = '2' ></Add>
      <Sub a = '2' b = '2' ></Sub>
</div>
  );
}
export default App;
