import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class MyButton extends Component {
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
			<Button onClick = {onClick} color="primary" variant="contained" disabled = {disabled}>{btnText}</Button>
		)
	}

}

export default MyButton;