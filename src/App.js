import { useState } from 'react';
import './App.css';
import Add from './component/Add';
// import Sub from './component/Sub';
// Add()
// Sub()
// console.log('App js');

function App() {
  const [inputValue2, setInputValue2] = useState();
  const [inputValue1, setInputValue1] = useState();
  const printValue = () => {
    // console.log('printValue', inputValue)
  }
  // let inputValue = 5 ;
  return (
    <div>
    <h1>my app first  react</h1>
    <div> <input
     value={inputValue2}
      onChange={(e) =>  {
         setInputValue2(e.target.value) 
      //  console.log('inputValue',inputValue);
       } } type='number' placeholder = 'Enter no 2' ></input> </div>

  <div>
    {/* <h1>my app first  react</h1> */}
    <div> <input
     value={inputValue1}
      onChange={(e) =>  {
         setInputValue1(e.target.value) 
      //  console.log('inputValue',inputValue);
       } } type='number' placeholder = 'Enter no 1' ></input> </div>
    <p>2 this is paragraph 1 {inputValue1} {inputValue2} </p>

  <button onClick={printValue}>print</button>
  {inputValue1 && inputValue2 ? <Add a = {inputValue1} b={inputValue2} > </Add>: ''}
    

    
      
      
  </div></div>
  );
}
export default App;
