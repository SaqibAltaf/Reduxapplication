import React from 'react';
import propTypes from 'prop-types';
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
  componentWillReceiveProps(nextprops){
    if(nextprops.post){
      console.log("added")
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

Posts.propTypes = {
  fetchPosts : propTypes.func.isRequired,
  posts : propTypes.array.isRequired,
  post : propTypes.object
}
const mapStateToProps = state =>({
  posts : state.posts.items,
  post : state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);
