import React from 'react'

class InputCardAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {accountNumber: ''} // пустая строка как исходное значение номера банковского счета
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) { 
    // console.log('Typed: ', event.target.value) // выводит нефильтрованное значение в том виде, в каком оно было введено
    this.setState({
      accountNumber: event.target.value.replace(/[^0-9]/ig,'')
    })
  }
  render() { 
    return <div> 
      Account Number: 
      <input 
      type="text" 
      onChange={this.handleChange} 
      placeholder="123456" 
      value={this.state.accountNumber} // управляет элементом присваивая значение state
      /> 
      <br/> 
      <span>{this.state.accountNumber.length>0?'You entered: ' + this.state.accountNumber: ''}</span> 
    </div> // выводит значение банковского счета, если поле не пустое. Фильтрует, оставляя только цифры.
  }
}

export default InputCardAccount