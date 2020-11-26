import React, { Component } from "react";
import "../autoCompleteText.css";
import axios from "axios";

class CreateTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "",
      category: "",
      description: "",
      status: "❤️ Create",
    };
  }

  handleTagChange = (event) => {
    this.setState({
      tag: event.target.value.substring(0, 45),
    });
  };

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value.substring(0, 45),
      status: "❤️ Create"
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value.substring(0, 190),
      status: "❤️ Create"
    });
  };

  handleCreate = () => {
    if (this.state.status === "❤️ Create") {
      this.setState({ status: "Creating Your Tag..." });

      var bodyFormData = new FormData();
      bodyFormData.append("username", "chaos_");
      bodyFormData.append("tag", this.state.tag);
      bodyFormData.append("category", this.state.category);
      bodyFormData.append("tag_description", this.state.description);

      axios({
        withCredentials: true,
        method: "post",
        url: process.env.REACT_APP_URL + `/create_tag`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
        this.setState({ status: "✅ Tag Created" });
      });
    }
  };

  render() {
    const textStyle = {
      marginLeft: "5%",
      marginTop: "5%",
      border: "5px solid black",
      padding: "12px 3%",
      fontWeight: "Bold",
      fontSize: 24,
      outlineWidth: 0,
      overflow: "auto",
    };

    const buttonStyle = {
      backgroundColor: "black" /* Green */,
      border: "5px solid black",
      marginLeft: "5%",
      marginTop: "5%",
      color: "white",
      padding: "3%",
      textAlign: "center",
      height: "10%",
      borderBottom: "none",
      textDecoration: "none",
      display: "inline-block",
      fontWeight: "Bold",
      fontSize: 24,
      outlineWidth: 0,
      cursor: "pointer",
    };

    return (
      <div>
        <form>
          <div
            style={{ display: "flex", flexDirection: "column", width: "40%" }}
          >
            <h1
              style={{ fontWeight: "Bold", marginLeft: "5%", marginTop: "5%" }}
            >
              <b>Create a new tag</b>
            </h1>
            <input
              type="text"
              value={this.state.tag}
              placeholder="Tag Name"
              onChange={this.handleTagChange}
              style={textStyle}
            />
            <input
              type="text"
              value={this.state.category}
              placeholder="Category"
              onChange={this.handleCategoryChange}
              style={textStyle}
            />
            <textarea
              type="text"
              value={this.state.description}
              placeholder="Tag Description"
              onChange={this.handleDescriptionChange}
              style={textStyle}
            />
            <div onClick={this.handleCreate} style={buttonStyle}>
              {this.state.status}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTag;
