import React from "react";

import { axiosWithAuth } from "../axiosWithAuth";
import { Menu } from "./Login components/Menu";
//import { getRequest } from "./axios requests/GET";

export default class OneLineADay extends React.Component {
  state = {
    post: [],
    newPostSuccess: "",
    newPostError: "",
    newPost: "",
    newPut: "",
    id: localStorage.getItem("id")
  };

  componentDidMount() {
    this.getRequest()
  }

 getRequest = () => {
    const id = localStorage.getItem("id");
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then(res => {this.setState({ post: res.data.action.posts });})
      .catch(rej => console.log(rej));
    }
    

  changeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  postRequest = newPost => {
    axiosWithAuth()
      .post("/api/posts", newPost)
      .then(res => {
        console.log(res);
        this.setState({
          post: res.data.action.posts,
          newPostSuccess: "POST request successful! Console log above ^",
          newPostError: ""
        });
      })
      .catch(rej => {
        console.log(rej);
        this.setState({
          
          newPostError: "POST request failed, console log above ^",
          newPostSuccess: ""
        });
      });
  };

  putRequest = (id, newPut) => {
    axiosWithAuth()
      .put(`/api/posts/${id}`, newPut)
      .then(res => {
        console.log(res);
        this.setState({
          post: res.data.action.posts,
          newPostSuccess: "PUT request successful! Console log above ^",
          newPostError: ""
        });
      })
      .catch(rej => {
        console.log(rej);
        this.setState({
          newPostError: "PUT request failed, console log above ^",
          newPostSuccess: ""
        });
      });
  };

  deleteRequest = (id) => {
    axiosWithAuth()
      .delete(`/api/posts/${id}`)
      .then(res => {
    
        console.log(res);
        this.setState({
          post: res.data.action.posts,
          newPostSuccess: "DELETE request successful! Console log above ^",
          newPostError: ""
        });
      })
      .catch(rej => {
        console.log(rej);
        this.setState({
          newPostError: "DELETE request failed, console log above ^",
          newPostSuccess: ""
        });
      });
  };

  render() {
    // Again, just get it working
    // Later, spin map off into its own (fucntion, not class) component, use OneLineADay for rendering only
    return (
      <div>
        {Menu()}
        {this.state.post.map((post, id) => (
          <h4 key={id}>{post.post}
          {/* {console.log("this is post object")}
          {console.log(post)}
          {console.log("this is pthe array position")}
          {console.log(id)}
          {console.log("this is the post.id/specific post ID")}
          {console.log(post.id)}
          {console.log("this is the user id")}
          {console.log(post.user_id)} */}
          <input
          type="text"
          placeholder="Replace your thoughts for today?"
          onChange={this.changeHandler}
          value={this.state.newPut}
          name="newPut"
        />
          <button
          onClick={() => {
            this.putRequest(post.id, this.state.newPut);
          }}
        >
          Replace this post
        </button>
        <button
          onClick={() => {
            this.deleteRequest(post.id);
          }}
        >
          Delete this post
        </button>
          
          </h4>
        ))}
        {console.log(this.state.post)}
        <input
          type="text"
          placeholder="What are your thoughts for today?"
          onChange={this.changeHandler}
          value={this.state.newPost}
          name="newPost"
        />
        <button
          onClick={() => {
            this.postRequest(this.state.newPost);
          }}
        >
          Submit your thoughts for the day
        </button>
      </div>
    );
  }
}
