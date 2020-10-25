import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Button from "./Button";

const App = () => {
  const [ count, setCount ] = useState(0);
  
  useEffect(()=>{
    document.title = 'Clicou ' + count + ' vezes';
  })

  return(
    <div>
      <h1>{count}</h1>
      <Button btnText = "Teste" onClick = {()=>{setCount(count+1)}}/>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);