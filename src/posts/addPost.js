import React from 'react';

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
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => console.log(data))
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

export default AddPosts;
