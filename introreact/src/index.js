import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,

    }
  }

  addCont = () => {
    const { count } = this.state

    this.setState({
      count: count+1
    });
  }

  render() {
    const { count } = this.state

    return(
    <div>
      <h1>{ count }</h1>
      <Button btnText="Curioso" onClick ={ this.addCont }></Button>
    </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);