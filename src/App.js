import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import User from './user/user';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'May Name'
    }
  }
  changeUserName(myname) {
    this.setState({
      username: myname
    })
  }

  render() {
    return (
      <div className="App">
        <Home changeUserName={this.changeUserName.bind(this)}></Home>
        <User username = {this.state.username} />
      </div>
    );
  }

}

export default App;
