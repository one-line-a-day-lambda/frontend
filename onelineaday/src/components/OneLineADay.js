import React from "react";

import { axiosWithAuth } from "../axiosWithAuth";
import { Menu } from "./Login components/Menu";
import { getRequest } from "./axios requests/GET";

export default class OneLineADay extends React.Component {
  state = {
    post: [],
    newPostSuccess: "",
    newPostError: "",
    newPost: "",
    id: localStorage.getItem("id")
  };


  componentDidMount() {
    //getRequest()
    const id = localStorage.getItem("id");

    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then(res => {
        this.setState({ post: res.data.action.posts });
      })
      .catch(rej => console.log(rej));
  }

  //for Post request
changeHandler = event => {
  event.preventDefault();
  this.setState({[event.target.name]: event.target.value})
}


postRequest = (id, newPost) => {
  axiosWithAuth
      .post(`/api/users/${id}`, newPost)
      .then(res=>{
          console.log(res);
          this.setState({
            newPostSuccess: "POST request successful! Console log above ^",
            newPostError: ""
          });
      })
      .catch(rej=>{
          console.log(rej);
          this.setState({
            newPostError: "POST request failed, console log above ^",
            newPostSuccess: ""
          })
      })

}

  // createPost = newPost => {
  //   axiosWithAuth()
  //     .post("/", newPost)
  //     .then(res => {console.log(res);})
  //     .catch(rej => console.log(rej));
  // };

  render() {
    // Again, just get it working
    // Later, spin map off into its own (fucntion, not class) component, use OneLineADay for rendering only
    return (
      <div>
        {Menu()}
        {this.state.post.map((post, id) => (
          <h4 key={id}>{post.post}</h4>
        ))}
        <input 
        type="text"
        placeholder="What are your thoughts for today?"
        onChange={this.changeHandler}
        value={this.state.newPost}
        name="newPost"
        />
        <button onClick={()=>{this.postRequest(this.state.id, this.state.newPost)}}>Submit your thoughts for the day</button>
      </div>
    );
  }
}
