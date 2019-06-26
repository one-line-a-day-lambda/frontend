// putRequest = (id, newPut) => {
//     axiosWithAuth()
//       .put(`/api/posts/${id}`, newPut)
//       .then(res => {
//         console.log(res);
//         this.setState({
//           newPostSuccess: "PUT request successful! Console log above ^",
//           newPostError: ""
//         });
//       })
//       .catch(rej => {
//         console.log(rej);
//         this.setState({
//           newPostError: "PUT request failed, console log above ^",
//           newPostSuccess: ""
//         });
//       });
//   };