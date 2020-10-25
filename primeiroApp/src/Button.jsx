import React, { Component } from "react";

class Button extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			disabled : false
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

	render(){
		const { btnText, onClick } = this.props;
		const { disabled } = this.state;

		return (
			<button onClick={onClick} disabled={disabled}>{btnText}</button>
		)
	}

}

export default Button;