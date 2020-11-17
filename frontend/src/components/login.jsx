import React, { Component } from "react";
import "./hover.css";
require('dotenv').config();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  login() {
    console.log("get redirect from server");
    console.log(process.env.REACT_APP_URL);


    window.location.href = process.env.REACT_APP_URL + "/login";
  }

  render() {
    const buttonStyle = {
      backgroundColor: "black" /* Green */,
      border: "5px solid black",
      color: "white",
      padding: "0px 32px",
      marginLeft: "81.2%",
      top: "0%",
      textAlign: "center",
      height: "10%",
      borderBottom: "none",
      textDecoration: "none",
      display: "inline-block",
      fontWeight: "Bold",
      fontSize: 24,
      outlineWidth: 0,
      position: "fixed"
    };

    const logoutStyle = {
      backgroundColor: "white" /* Green */,
      border: "5px solid black",
      color: "black",
      padding: "15px 32px",
      marginLeft: "81.2%",
      top: "10%",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontWeight: "Bold",
      fontSize: 24,
      outlineWidth: 0,
      position: "fixed"
    };

    if (this.props.username.localeCompare("error:not logged in") === 0) {
      return (
        <div>
          <button onClick={this.login} style={buttonStyle} type="button">
            Login
        </button>
        </div>
      );
    }


    else {
      return (
        <div className="dropdown">
          <button className="dropbtn" style={buttonStyle} type="button">
            {this.props.username}
          </button>
          <div className="dropdown-content">
            <div style={logoutStyle} onClick={this.props.logout.bind(this)} href="#">Logout</div>
          </div>
        </div>
      );
    }

  }
}

export default Login;
