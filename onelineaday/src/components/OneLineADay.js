import React from "react";

import { axiosWithAuth } from "../axiosWithAuth";
import { Menu } from "./Login components/Menu";
//import { getRequest } from "./axios requests/GET";

export default class OneLineADay extends React.Component {
  state = {
    defaultPost: [],
    newPostSuccess: "",
    newPostError: "",
    newPost: {
      post: "",
      user_id: localStorage.getItem("id")
    },
    id: localStorage.getItem("id")
  };

  componentDidMount() {
    this.getRequest();
  }

  getRequest = () => {
    const id = localStorage.getItem("id");
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then(res => {
        this.setState({ defaultPost: res.data.action.posts });
      })
      .catch(rej => console.log(rej));
  };

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      newPost: {
        ...this.state.newPost,
        [event.target.name]: event.target.value
      }
    });
  };

  postRequest = newPost => {
    console.log("newPost is below");
    console.log(newPost);
    axiosWithAuth()
      .post("/api/posts", newPost)
      .then(res => {
        console.log(res);
        this.setState({
          newPostSuccess: "POST request successful! Console log above ^",
          newPostError: ""
        });
        window.location.reload();
        console.log(this.state.newPostSuccess);
      })
      .catch(rej => {
        console.log(rej);
        this.setState({
          newPostError: "POST request failed, console log above ^",
          newPostSuccess: ""
        });
        console.log(this.state.newPostError);
      });
  };

  putRequest = (id, newPost) => {
    axiosWithAuth()
      .put(`/api/posts/${id}`, newPost)
      .then(res => {
        console.log(res);
        this.setState(prevState => ({
          defaultPost: prevState.defaultPost.filter(line => line.id != id)
        }));
      })
      .catch(rej => {
        console.log(rej);
        this.setState({
          newPostError: "PUT request failed, console log above ^",
          newPostSuccess: ""
        });
      });
  };

  // deleteRequest = id => {
  //   axiosWithAuth()
  //     .delete(`/api/posts/${id}`)
  //     .then(res => {
  //       //window.location.reload();
  //       console.log(res);
  //       this.setState({
  //         //defaultPost: res.data.action.posts,
  //         //newPostSuccess: "DELETE request successful! Console log above ^",
  //        // newPostError: ""
  //       });
  //     })
  //     .catch(rej => {
  //       console.log(rej);
  //       this.setState({
  //         newPostError: "DELETE request failed, console log above ^",
  //         newPostSuccess: ""
  //       });
  //     });
  // };

  deleteRequest = id => {
    axiosWithAuth()
      .delete(`/api/posts/${id}`)
      .then(res => {
        console.log(res);
        this.setState(prevState => ({
          defaultPost: prevState.defaultPost.filter(line => line.id != id)
        }));
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
    return (
      <div>
        {Menu()}
        <p>
          {this.state.defaultPost.map((post, id) => (
            <h4 key={id}>
              {post.post}
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
                value={this.state.newPost.post}
                name="post"
              />
              <p>
                <button
                  onClick={() => {
                    this.putRequest(post.id, this.state.newPost);
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
              </p>
            </h4>
          ))}
        </p>
        {console.log(this.state.defaultPost)}
        <p>
          <input
            type="text"
            placeholder="What are your thoughts for today?"
            onChange={this.changeHandler}
            value={this.state.newPost.post}
            name="post"
          />
        </p>
        <p>
          <button
            className="navlink"
            onClick={() => {
              this.postRequest(this.state.newPost);
            }}
          >
            Submit your thoughts for the day
          </button>
        </p>
      </div>
    );
  }
}
