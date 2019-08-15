import React from 'react';
import './home.css';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render() {
    return(
      <div className="App">
      <div className="row">
        <div className="col-xs-12">
          <h1>Main Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button className="btn btn-primary" onClick={() =>this.props.changeUserName('Anna')}>Change</button>
        </div>
      </div>
    </div>
    )
  }
}

export default Home;
