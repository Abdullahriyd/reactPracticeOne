import React ,{useState} from 'react';

import './App.css';


function App() {
  return (<div>
    <Person name='Kashem'>hello again</Person>
    <CountNow></CountNow>
  </div>
    
  );
}

function Person(e) {
  return (
    <div>
      <h1>Hello again {e.name}</h1>
  <p>Welcome Home! {e.name}</p>
    </div>
  )
}

function CountNow(){
  const [count, setCount] = useState(0);
  const [countNeg, setCountNeg] = useState(0);
  return(
    <div>
      <button onClick={()=> setCount(count+1) }>Click Me Count Plus {count}</button>
      <button onClick={()=> setCountNeg(countNeg-1) }>Click Me Count Minus {countNeg}</button>
    </div>
    
  )
}

export default App;
