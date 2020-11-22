import React, { Component } from "react";
import "../autoCompleteText.css";
import Fuse from "fuse.js";

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagList: [
        "apple",
        "google",
        "microsoft",
        "new",
        "hard",
        "dynamic programming",
      ],
      tags: ["new", "hard", "dynamic programming"],
      isHidden: true,
      suggestions: [],
      text: "",
      display: [],

      // input: '',
      // output:""
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e){

  // 		this.setState({input: e.target.value});
  // }

  onTextChanged = (e) => {
    let value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      if (value[value.length - 1] === "\\") {
        value = value.substring(0, value.length - 1);
      }
      if (value[value.length - 1] === "(") {
        value = value.substring(0, value.length - 1);
      }
      if (value[value.length - 1] === "+") {
        value = value.substring(0, value.length - 1);
      }
      if (value[value.length - 1] === "[") {
        value = value.substring(0, value.length - 1);
      }
      if (value[value.length - 1] === "$") {
        value = value.substring(0, value.length - 1);
      }

      this.setState({
        display: this.state.tagList.map((currentvalue, index, array) => {
          return this.state.tagList[index];
        }),
      });

      //implementing fuzzy search
      const fuse = new Fuse(this.state.display, {});
      let fuse_search = fuse.search(value);
      let result = fuse_search.map((a) => a.item);
      suggestions = result.slice(0, 4);
    }

    this.setState(() => ({ suggestions, text: value }));
  };
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul style={{ paddingInlineStart: "0px" }}>
        {suggestions.map((item) => (
          <li
            style={{
              listStyleType: "none",
              border: "5px solid black",
              borderTop: "none",
              height: "10%",
              cursor:"pointer"
            }}
            // onClick={() => this.suggestionSelected(item)}

            onClick={() => {
              if (this.state.tags.includes(item) == false) {
                this.setState({ tags: [...this.state.tags, item] });
              }
            }}
            key={item}
          >
            <div
              style={{
                paddingLeft: "6%",
                paddingTop: "0.8%",
                paddingBottom: "0.8%",
              }}
            >
              {" "}
              {item}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [value],
    }));
  }

  toggleIsHidden() {
    this.setState((currentState) => ({
      isHidden: !currentState.isHidden,
    }));
  }

  renderTags() {
    return this.state.tags.map((tag) => {
      return (
        <div
          style={{
            color: "black",
            backgroundColor: "#FFFF00",
            padding: "1vh",
            margin: "1.5vh",
            borderRadius: "1vh",
          }}
        >
          <span style={{ marginRight: "1vh" }}>{tag}</span>
          <span
            style={{
              paddingLeft: "1vh",
              paddingRight: "1vh",
              backgroundColor: "#CCCC00",
              borderRadius: "1vh",
              cursor:"pointer"
            }}
            onClick={() => {
              if (this.state.tags.includes(tag) == true) {
                const idx = this.state.tags.indexOf(tag);
                const arr = [...this.state.tags];
                arr.splice(idx, 1);
                this.setState({ tags: [...arr] });
              }
            }}
          >
            X
          </span>
        </div>
      );
    });
  }

  render() {
    const { text } = this.state;

    const dStyle = {
      margin: 0,
      top: "43%",
      left: "36%",
      width: "50%",
      height: "10%",
      border: "5px solid black",
      padding: "12px 3%",
      fontWeight: "Bold",
      fontSize: 24,
      position: "fixed",
      outlineWidth: 0,
      overflow: "auto",
    };

    const autoCompleteText = {
      margin: 0,
      top: "51%",
      left: "36%",
      width: "50%",
      padding: "12px 0%",
      fontWeight: "Bold",
      fontSize: 24,
      position: "fixed",
    };

    return (
      <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
        <div style={{ margin: "4vh", fontSize: "1.8em" }}>
          <span>{this.props.problem_code}</span>
        </div>
        <input
          onChange={this.onTextChanged}
          value={text}
          style={dStyle}
          type="text"
          className="input"
          placeholder="Search Tags"
        />
        <div style={autoCompleteText}>{this.renderSuggestions()}</div>
        <div
          style={{
            display: "flex",
            flex: "wrap",
            backgroundColor: "#F0F0F0",
            marginBottom: "4vh",
          }}
        >
          {this.renderTags()}
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              maxWidth: "17vw",
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
              padding: "3vh",
              marginTop:"40vh"
            }}
          >
            <span>Create new tag</span>
          </div>
          <div
            style={{
              maxWidth: "17vw",
              marginLeft: "1vh",
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
              padding: "3vh",
              marginTop:"40vh"
            }}
          >
            <span>Apply Changes</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
