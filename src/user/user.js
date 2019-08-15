import React from 'react';
import './user.css';

class User extends React.Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return <h1>{this.props.username}</h1>;
  }
}

export default User;
