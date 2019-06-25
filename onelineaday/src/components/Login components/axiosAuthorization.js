import axios from "axios";

export const axiosWithAuthorization = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://onelineadaybe.herokuapp.com/"
  });
};
