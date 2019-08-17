import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './../actions/postAction';

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state={
      posts: []
    }
  }
  componentDidMount(){
    this.props.fetchPosts();
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
            {this.props.posts.length > 0 ? 
            this.props.posts.map((val, key)=>{
                return(
                    <div key={key}>
                        <h3>{val.title}</h3>
                        <p>{val.body}</p>

                    </div>
                )
            }) : ""}
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state =>({
  posts : state.posts.items,
})

export default connect(mapStateToProps, {fetchPosts})(Posts);
