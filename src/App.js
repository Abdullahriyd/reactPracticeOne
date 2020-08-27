import React ,{useState} from 'react';
import {useEffect} from 'react';

import './App.css';


function App() {
  const [names, setNames] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNames(data))
  },[])

  //const names = ["hashem","kashem","jomuna","Shurma","Noman"];
  const ages =[27, 23, 18, 15, 25];

  return (<div>
    {
      names.map(e => <Person name={e.name} key={e.id}></Person>)
    }
    <PersonAge age={ages} ></PersonAge>
    <CountNow></CountNow>
    <UserData></UserData>
  </div>
    
  );
}

function PersonAge(props) {
  
  return (
    <div>
    {props.age.map(e=><p key={Math.random(4)}>Age {e} </p>)}
    </div>
  )
}
//or Person 2nd method to passing data
//name= {names}{props.name.map(e=><h4>{e}</h4>)}

function Person(props) {
  return (
      <div>
      <h5>Hello {props.name}</h5>
      </div>
  )
}
  

function CountNow(){
  const [count, setCount] = useState(0);
  const design = {margin: '10px', padding: '5px', backgroundColor: "green", color: 'white'}
  const plusHandler = ()=> setCount(count+1);
  const minusHandler = ()=> count>0 ? setCount(count-1) : setCount(0);
  return(
    <div>
      <h2>Age: {count}</h2>
      <button style={design} onClick={plusHandler}>Click Me Count Plus</button>
      <button style={{backgroundColor: 'orange',margin: '10px', padding: '5px',color:'black'}} onClick={minusHandler}>Click Me Count Minus </button><br/>
      <button style={{backgroundColor: 'red',margin: '10px', padding: '5px',color:'white'}} onClick={()=> setCount(0) }>Reseat Button</button>
    </div>  
  )
}

function UserData() {
  const [names, setNames] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNames(data))
  },[])

  return(
    <>
      {names.map(e=>
      <div key={20}>
      <p key={Math.random(5)}>{e.name}</p>
      <p key={Math.random(4)}>{e.phone}</p>
      </div>
      )}
      
    </>
    
  )
}

export default App;
