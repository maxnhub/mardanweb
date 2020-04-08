import React from 'react'
import ReactDOM from 'react-dom'
import '../../bootstrap.min.css'
import classes from './Tooltip.module.scss';

class Tooltip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {opacity: false}
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.top,
      left: tooltipNode.left
    })
  }
  render() {
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      /* Состояние непрозрачности this.state.opacity представляет собой логическое значение true или false, но непрозрачность CSS является двоичным значением 0 или 1. Если состояние непрозрачности равно false, непрозрачность CSS равна 0; а если состояние непрозрачности равно true, непрозрачность CSS равна 1. Преобразование выполняется при помощи бинарного оператора (+): */
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) -60
      /*Что касается позиции подсказки, текст должен располагаться неподалеку от текста, на который был наведен указатель мыши. Для этого мы добавим 20 пикселов к верхнему краю (расстояние от верхней стороны окна до элемента) и вычтем 30 пикселов из левого края (расстояние от левой стороны окна до элемента). */
    }
    return <div className={classes.Tooltip}>
      <div style={{display: 'inline'}}> 
        <span 
          style={{color: 'blue'}} 
          onMouseEnter={this.toggle} // инициирует вывод подсказки при входе указателя мыши
          onMouseOut={this.toggle}> 
          {this.props.children}
        </span> 
        <div 
        className="tooltip bottom" // применяет стили с opcity, zIndex и правильной позицией на основании позиции узла DOM
        style={style} 
        role="tooltip"> 
          <div className="tooltip-arrow"></div> 
          <div className="tooltip-inner" // выводит текст подсказки на основании классов Twitter Bootstrap
          > 
            {this.props.text}
          </div> 
        </div> 
      </div>
    </div>
  }
}

export default Tooltip