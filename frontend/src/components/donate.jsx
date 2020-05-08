import React, { Component } from "react";

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  donate() {
    console.log("donate");


    window.location.href = "https://rzp.io/l/0mDHR3P";
  }


  render() {

       const buttonStyle = {
      backgroundColor: "black" /* Green */,
      border: "5px solid black",
      color: "white",
      padding: "0px 32px",
      marginLeft: "36%",
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

      return (

      <div>
          <button onClick={this.donate} style={buttonStyle} type="button" > Donate </button>
      </div>
          
      );
    }

  }

export default Donate;
