import React from 'react'
import Link from '../Link/Link'
// import classes from './Menu.module.scss';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { setMenus } from '../../store/actions/menus'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: []
    }
  }
  
  componentDidMount() {

    axios.get('https://mardanusers.firebaseio.com/menus.json')
    .then(response => {
        const menus = response.data;
        this.setState({
          menus
        })
    });
  }
  
  render() { 

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              {this.state.menus.map((menu) => {
                return <li 
                className="nav-item" 
                style={{ display: 'flex',
                alignItems: 'center'}}
                key={menu.index}><Link label={menu.value}/></li>
              })}
            </ul>
          </div>
          
        </nav>
      </React.Fragment>
    )
  }
}


export default Menu;

