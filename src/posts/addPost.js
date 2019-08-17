import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {addPost} from './../actions/postAction'

class AddPosts extends React.Component {
  constructor(props){
    super(props);
    this.state={
     title :'',
     body: '',
    }
  }

  onchange(e){
      e.preventDefault();
      this.setState({
          [e.target.name] : e.target.value
      })
  }

    onsubmit() {
        let body = {
            title: this.state.body,
            body: this.state.body
        }
     this.props.addPost(body)
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
           <lable>Title</lable>
            <input type="text" name="title" value={this.state.title} onChange={(e) => this.onchange(e)} placeholder="Title" />
            <lable>Body</lable>
            <input type="text" name="body" value={this.state.body} onChange={(e) => this.onchange(e)} placeholder="Body" />
        </div>
        <button onClick={(e)=>this.onsubmit(e)}>Submit</button>
      </div>
    </div>
    )
  }
}

AddPosts.propTypes ={
    addPost : propTypes.func.isRequired,
}

export default connect(null, {addPost})(AddPosts);
