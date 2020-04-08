import React from 'react'
import RadioButton from '../../components/RadioButton/RadioButton'
import Checkbox from '../../components/Checkbox/Checkbox'
import Select from '../../components/Select/Select'
import NewUser from '../../components/NewUser/NewUser'
import classes from './Main.module.scss';
import InputCardAccount from '../../components/InputCardAccount/InputCardAccount';
// import Menu from '../../components/Menu/Menu'
import Tooltip from '../../components/Tooltip/Tooltip'
import TimerWrapper from '../../components/TimerWrapper/TimerWrapper'

class Main extends React.Component {

  render() {
    return <div className={classes.Main}>
      <h1>About (components)</h1>
      <form className={classes.Main_form}>
        <RadioButton />
        <Checkbox />
        <Select />
        <InputCardAccount />
      </form>
      <NewUser />
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Tooltip text="The book you're reading now">React Quickly</Tooltip> was published in 2017. It's awesome!
      </div>
      <TimerWrapper />
    </div>
    }
}

export default Main