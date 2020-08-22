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
  const design = {margin: '10px', padding: '5px', backgroundColor: "green", color: 'white'}
  return(
    <div>
      <h2>Age: {count}</h2>
      <button style={design} onClick={()=> setCount(count+1) }>Click Me Count Plus {count}</button>
      <button style={{backgroundColor: 'orange',margin: '10px', padding: '5px',color:'black'}} onClick={()=> count>0 ? setCount(count-1) : setCount(0)}>Click Me Count Minus {count}</button><br/>
      <button style={{backgroundColor: 'red',margin: '10px', padding: '5px',color:'white'}} onClick={()=> {setCount(0)} }>Reseat Button</button>
    </div>  
  )
}

export default App;
