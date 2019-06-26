// postRequest = newPost => {
//     axiosWithAuth()
//       .post("/api/posts", newPost)
//       .then(res => {
//         console.log(res);
//         this.setState({
//           newPostSuccess: "POST request successful! Console log above ^",
//           newPostError: ""
//         });
//       })
//       .catch(rej => {
//         console.log(rej);
//         this.setState({
//           newPostError: "POST request failed, console log above ^",
//           newPostSuccess: ""
//         });
//       });
//   };