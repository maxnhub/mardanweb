import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

class Link extends React.Component {
  
  render() { 
    const url = '/'
    + this.props.label
    .toLowerCase()
    .trim()
    .replace(' ', '-')
    return <React.Fragment>
      <RouterLink className="nav-link" to={url}>
        {this.props.label}
      </RouterLink>
      <br />
    </React.Fragment>
  }
}

export default Link