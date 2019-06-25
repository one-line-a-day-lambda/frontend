import React from "react";

class Login extends React.Component {

    state = {
        credentials = {
            username: "",
            password: ""
        }
    }

    changeHandler = event => {
        preventDefault();
      this.setState({ [event.target.name]: event.target.value })
      
    }


    render(){
        return (
            <>
            Hello from Login
            </>
        )
    }
}

export default Login