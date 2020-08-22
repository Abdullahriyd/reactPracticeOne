import React from 'react';

import './App.css';



function App() {
  return (
    <Person name='Kashem'>hello again</Person>
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

export default App;
