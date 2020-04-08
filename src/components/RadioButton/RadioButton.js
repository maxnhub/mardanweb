import React from 'react'
import classes from './RadioButton.module.scss';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        vue: false
      }
    }

    this.handleRadio = this.handleRadio.bind(this);
    
  }
  
  handleRadio(event) {
    let obj = {}
    obj[event.target.value] = event.target.checked
    this.setState({
      radioGroup: obj
    })
  }

  render() {
    return (
      <div className={classes.RadioButton}>
        <input type="radio"
          name="radioGroup"
          value = 'angular'
          checked = {this.state.radioGroup['angular']}
          onChange = {this.handleRadio}
        />
        <input type="radio"
          name="radioGroup"
          value = 'react'
          checked = {this.state.radioGroup['react']}
          onChange = {this.handleRadio}
        />
        <input type="radio"
          name="radioGroup"
          value = 'vue'
          checked = {this.state.radioGroup['vue']}
          onChange = {this.handleRadio}
        />
      </div>
    ) 
  }
}

export default RadioButton