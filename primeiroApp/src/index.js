import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import MyButton from "./Button";

const App = () => {
  const [ count, setCount ] = useState(0);
  
  useEffect(()=>{
    document.title = 'Clicou ' + count + ' vezes';
  })

  return(
    <div>
      <h1>{count}</h1>
      <MyButton onClick = {()=>{setCount(count+1)}} btnText = "Teste"/>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);