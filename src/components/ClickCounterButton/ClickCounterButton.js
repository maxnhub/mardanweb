import React from 'react'
// import classes from './ClickCounterButton.module.scss'

class ClickCounterButton extends React.Component {
  render() {
    return <button
        onClick={this.props.handler}
        style={{marginRight: 10}}
        className="btn btn-warning">
        {this.props.buttonLabel}
      </button>
    }
}
ClickCounterButton.defaultProps={buttonLabel: 'Submit'} // надпись на кнопке по умолчанию, если ничего не задано

export default ClickCounterButton