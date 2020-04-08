import React from 'react'
import axios from 'axios';
import classes from './Users.module.scss'
import { connect } from 'react-redux';
import { setUsers } from '../../store/actions/users'


class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  
  componentDidMount() {
    // const { setUsers } = this.props;

    axios.get('https://mardanusers.firebaseio.com/users.json')
    .then(response => {
        const users = response.data;
        this.setState({
          users
        })
        // setUsers(users);
    });
  }
  // <ul key={user.id}>
  //   <li>{user.first_name} {user.last_name}</li>
  //   <li> {user.email}</li>
  //   <li> {user.ip_address}</li>
  // </ul>
  render() {
    const { users } = this.props;
    console.log('users: ', users)
    return (
      <div className={classes.Users_container}>
        <h1>List of Users</h1>
        <div className="">
          <div>{this.state.users.map((user)=>
            <div key={user.id} className="card border-primary mb-3" style={{maxWidth: 300}}>
              <div className="card-header">Email: {user.email}</div>
              <div className="card-body">
                <h4 className="card-title">Name: {user.first_name} {user.last_name}</h4>
                <p className="card-text">IP address: {user.ip_address}</p>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return state;
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUsers: (users) => dispatch(setUsers(users))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Users);

export default Users