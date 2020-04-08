import React from 'react'
import classes from './Checkbox.module.scss';

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.handleCheckbox = this.handleCheckbox.bind(this)

    this.state = {
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      }
    }
  }
  handleCheckbox(event) {
    let obj = Object.assign(this.state.checkboxGroup)
    obj[event.target.value] = event.target.checked
    this.setState({checkboxGroup: obj})
  }

  render() {
    return (
      <div className={classes.Checkbox}>
        <input 
          type="checkbox" 
          name="checkboxGroup" 
          value='node' 
          checked={this.state.checkboxGroup['node']} 
          onChange={this.handleCheckbox}
        />
        <input 
          type="checkbox" 
          name="checkboxGroup" 
          value='react' 
          checked={this.state.checkboxGroup['react']} 
          onChange={this.handleCheckbox}
        />
        <input 
          type="checkbox"
          name="checkboxGroup" 
          value='express' 
          checked={this.state.checkboxGroup.express} 
          onChange={this.handleCheckbox}
        />
        <input 
          type="checkbox" 
          name="checkboxGroup" 
          value='mongodb' 
          checked={this.state.checkboxGroup['mongodb']} 
          onChange={this.handleCheckbox}
        />
      </div>
    )
  }
}

export default Checkbox