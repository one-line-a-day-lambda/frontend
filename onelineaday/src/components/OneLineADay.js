import React from "react";
//import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

export default class OneLineADay extends React.Component {
  // state of state a total guess.  No idea what server looks like right now
  // Use Date.now() for both date and post ID - two birds with one stone
  state = {
    post: ""
  };
  // Just get it rendering first.  Later spin this off into its own (class?) component
  // and use an imported callback in the componentDidMount
  componentDidMount() {
    console.log("Hello from CDM");
    const id = localStorage.getItem("id");

    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then(res => {
        // console.log({ res });
        // console.log("This is res.data");
        // console.log(res.data);

        this.setState({ post: res.data });
        console.log("This is this.state.post");
        console.log(this.state.post);
        console.log("This is this.state.post.action");
        console.log(this.state.post.action);
        console.log("This is this.state.post.action.posts");
        console.log(this.state.post.action.posts);
        console.log("This is this.state.post.action.posts[3].post");
        console.log(this.state.post.action.posts[3].post);
      })
      .catch(rej => console.log(rej));
  }

  createPost = newPost => {
    axiosWithAuth()
      .post("/", newPost)
      .then(res => {
        console.log(res);
      })
      .catch(rej => console.log(rej));
  };

  render() {
    // Again, just get it working
    // Later, spin map off into its own (fucntion, not class) component, use OneLineADay for rendering only
    return (
      // console.log("This is this.state"),
      // console.log(this.state),
      // console.log("This is this.state.post"),
      // console.log(this.state.post),
      // console.log("This is this.state.post.action"),
      // console.log(this.state.post.action),
      //  console.log("This is this.state.post.action.posts"),
      //  console.log(this.state.post.action.posts),
      // console.log("This is this.state.post.action.posts[3].post"),
      // console.log(this.state.post.action.posts[3].post),
      (
        <div>
          Hello from OneLineADay
          {/* <p>{this.state.post.action.posts.map(post=>post.post)}</p> */}
        </div>
      )
    );
  }
}