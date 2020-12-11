import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchTagsButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const buttonStyle = {
      backgroundColor: "black" /* Green */,
      border: "5px solid black",
      color: "white",
      padding: "0px 32px",
      marginLeft: "56.2%",
      top: "0%",
      textAlign: "center",
      height: "10%",
      borderBottom: "none",
      textDecoration: "none",
      display: "inline-block",
      fontWeight: "Bold",
      fontSize: 24,
      outlineWidth: 0,
      position: "fixed",
    };

    return (
      <div>
        <Link to="searchtags">
          <button style={buttonStyle} type="button">
          🔍 Search Tags
          </button>
        </Link>
      </div>
    );
  }
}

export default SearchTagsButton;
