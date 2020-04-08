import React from 'react'
import classes from './NewUser.module.scss';

class NewUser extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleFirstNameChange(event) { 
    this.setState({firstName: event.target.value}) 
  }
  
  handleSubmit() { 
    fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)}) 
    .then((response)=>{return response.json()}) 
    .then((data)=>{console.log('Submitted: ', data)})
  }
  render() {
    return <form className={classes.NewUser}> 
      <input 
      name="firstName" 
      onChange={this.handleFirstNameChange.bind(this)} 
      type="text"
      style={{marginBottom: '5px'}}/>
      <input 
      className="btn btn-primary"
      type="button" 
      onClick={this.handleSubmit} 
      value="Submit"/> 
    </form>
  }
}

export default NewUser


