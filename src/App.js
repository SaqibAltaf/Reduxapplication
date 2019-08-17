import React from 'react';
import './App.css';
import Home from './home/home';
import User from './user/user';
import Posts from './posts/posts';
import AddPosts from './posts/addPost';
import {Provider} from 'react-redux';
import store from './store';
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
      <Provider store ={store}>
        <div className="App">
        {/* <Home changeUserName={this.changeUserName.bind(this)}></Home>
        <User username = {this.state.username} /> */}
        <AddPosts></AddPosts>

        <Posts></Posts>
      </div>
      </Provider>
      
    );
  }

}

export default App;
