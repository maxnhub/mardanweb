import React from 'react';
import './App.css';
import './bootstrap.min.css'
import Users from './components/Users/Users'
import Main from './containers/Main/Main'
import Menu from './components/Menu/Menu'
import {Route, Switch, Redirect } from 'react-router-dom'
import ClickCounterButton from './components/ClickCounterButton/ClickCounterButton'
import Counter from './components/Counter/Counter'
import Movies from './components/Movies/Movies'
import Movie from './components/Movie/Movie'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  handleClick() {
    this.setState({
      counter: ++this.state.counter
    })
  }
  
  render() {
    let dataUrl = 'https://mardanusers.firebaseio.com/users.json'
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/">
            <div style={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <ClickCounterButton
                handler={this.handleClick.bind(this)}
                buttonLabel="Don't click me"
              />
              <Counter
                value={this.state.counter}
              />
            </div>
          </Route>
          <Route path="/home">
            <Users data-url={dataUrl}/>
          </Route>
          <Route path="/about">
            <Main />
          </Route>
          <Route path="/services"> 
            <Route path="/movies" component={Movies} /> 
            <Route path="/movies/:id" component={Movie} /> 
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default App;
