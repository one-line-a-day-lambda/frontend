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

  //not happy having to use window.location.reload for the axios requests, but from my readings,
  //it seems the only other way to force a re-render is either this.forceUpdate() or componentDidUpdate,
  //which we didn't learn

  postRequest = newPost => {
    console.log("newPost is below");
    console.log(newPost);
    axiosWithAuth()
      .post("/api/posts", newPost)
      .then(res => {
        console.log(res);
        this.setState({
          defaultPost: [...this.state.defaultPost, newPost],
          newPostSuccess: "POST request successful! Console log above ^",
          newPostError: ""
        });
        // this.forceUpdate();
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
        this.getRequest();
        // this.setState(prevState => ({
        //   defaultPost: prevState.defaultPost.map(post => {
        //     if (post.id === id) {
        //       return newPost;
        //     } else {
        //       return post;
        //     }
        //   })
        // }));
      })
      .catch(rej => {
        console.log(rej);
        this.setState({
          newPostError: "PUT request failed, console log above ^",
          newPostSuccess: ""
        });
      });
  };

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
      <div className="everything">
        {/* See Menu component for details */}
        {Menu()}
        <h1 className="h1Header">Your One Line A Day Journal</h1>
        <div className="entryBox">
          <h2>Dear Journal, Today . . .</h2>
          <input
            className="diaryInput"
            type="text"
            placeholder="What are your thoughts for today?"
            onChange={this.changeHandler}
            value={this.state.newPost.post}
            name="post"
          />

          <button
            className="navlink submitDiary"
            onClick={() => {
              this.postRequest(this.state.newPost);
            }}
          >
            +
          </button>
        </div>
        <div>
          {this.state.defaultPost.map((post, id) => (
            <div key={id}>
              <h4 className="userPosts">{post.post}</h4>

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
            </div>
          ))}
        </div>
        {console.log(this.state.defaultPost)}
      </div>
    );
  }
}
