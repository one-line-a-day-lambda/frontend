// deleteRequest = (id) => {
//     axiosWithAuth()
//       .delete(`/api/posts/${id}`)
//       .then(res => {
//         console.log(res);
//         this.setState({
//           newPostSuccess: "DELETE request successful! Console log above ^",
//           newPostError: ""
//         });
//       })
//       .catch(rej => {
//         console.log(rej);
//         this.setState({
//           newPostError: "DELETE request failed, console log above ^",
//           newPostSuccess: ""
//         });
//       });
//   };