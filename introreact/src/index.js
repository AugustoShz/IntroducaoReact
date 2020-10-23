import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      disabled: false
    }
  }

  componentDidMount(){
    window.setTimeout(()=>{
      this.setState({
        disabled: true
      })
    }, 3000)
  }

  componentDidUpdate(){
    console.log("Updated Value");
  }

  addCont = (valor) => {
    const { count } = this.state

    this.setState({
      count: count+1
    });
  }

  render() {
    const { count, disabled} = this.state

    return(
    <div>
      <h1>{ count }</h1>
      <Button btnText="Curioso" onClick ={ this.addCont } disabled = { disabled }></Button>
    </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);