import React from 'react'

class Link extends React.Component {
  
  render() { 
    const url = '/'
    + this.props.label
    .toLowerCase()
    .trim()
    .replace(' ', '-')
    return <React.Fragment>
      <a className="nav-link" href="#" href={url}>
        {this.props.label}
      </a>
      <br />
    </React.Fragment>
  }
}

export default Link