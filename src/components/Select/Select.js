import React from 'react'
import classes from './Select.module.scss';

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelectChange = this.handleSelectChange.bind(this)

    this.state = {selectedValue: 'node'}
  }
  handleSelectChange(event) {
    this.setState({selectedValue: event.target.value})
  }

  render() {
    return (
      <div className={classes.Select}>
        <select
        multiple={true}
        value={['ruby', 'node']}
        onChange={this.handleSelectChange}>
          <option value="ruby">Ruby</option>
          <option value="node">Node</option>
          <option value="python">Python</option>
        </select>
        <select
        value={this.state.selectedValue}
        onChange={this.handleSelectChange}>
          <option value="ruby">Ruby</option>
          <option value="node">Node</option>
          <option value="python">Python</option>
        </select>
      </div>
    )
  }
}

export default Select