import React from 'react'

class TimerWrapper extends React.Component {
  constructor(props) { // задает исходные состояния
    super(props)
    this.state = {timeLeft: null, timer: null} // при исходной загрузке приложения таймер работать не должен; следовательно, в конструкторе TimerWrapper необходимо задать timeLeft значение null.
    this.startTimer = this.startTimer.bind(this) // также свойству состояния timer присваивается null. Это свойство содержит ссылку на функцию setInterval(), которая выполняет обратный отсчет. Но в данный момент работающего таймера нет — отсюда и значение null.
  }
  startTimer(timeLeft) { // запускает новый таймер(сброс)
    clearInterval(this.state.timer) // если пользователь щелкает по кнопке в то время, когда таймер уже работает, нужно сбросить предыдущий интервал и начать заново — ни в коем случае не должна возникнуть ситуация с несколькими одновременно работающими таймерами. По этой причине метод startTimer() первым делом останавливает предыдущий отсчет, вызывая метод сброса для результата вызова setInterval(). Объект setInterval текущего таймера хранится в переменной this.state.timer.
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1
      if (timeLeft === 0) clearInterval(timer)
      this.setState({timeLeft: timeLeft}) // обновляет уменьшенное время каждую секунду
    }, 1000)
    return this.setState({timeLeft: timeLeft, timer: timer})
  }
  render() { // генерирует кнопки для вызова startTimer с разным временем
    return (
      <div className="row-fluid">
        <h2>Timer</h2> 
        <div className="btn-group" role="group" > 
          <Button time="5" startTimer={this.startTimer}/> 
          <Button time="10" startTimer={this.startTimer}/>
          <Button time="15" startTimer={this.startTimer}/>
        </div> 
        <Timer timeLeft={this.state.timeLeft}/>
      </div>
    )
  }
}

class Timer extends React.Component { 
  render() { 
    if (this.props.timeLeft === null || this.props.timeLeft === 0) {
      return <div/> //  висходном состоянии не выводится ничего, пустой див
    }
    return <h1>Time left: {this.props.timeLeft}</h1> // выводит текст Time left: ...
  }
}

class Button extends React.Component { 
  startTimer(event) { // запускает новый таймер(сброс) из события щелчка. вызывает startTimer из TimerWrapper
    return this.props.startTimer(this.props.time)
  } 

  render() { 
    return <button type="button" className='btn-default btn' // перехватывает onClick
      onClick={this.startTimer.bind(this)}> 
        {this.props.time} seconds
    </button>
  }
}



export default TimerWrapper