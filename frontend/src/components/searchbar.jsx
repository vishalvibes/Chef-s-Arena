import React, { Component } from "react";
import search from "./search.png";
import "./autoCompleteText.css";
import {
  Link,
} from "react-router-dom";
import Fuse from 'fuse.js';

//autocomplete from props
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.list = ["COOK116", "CHGORAM", "COOK115", "COOK114", "CHEFSPA"];
    this.type = ["contest", "problem", "contest", "contest", "problem"];
    this.state = {
      selected_problem: -1,
      isHidden: true,
      suggestions: [],
      text: "",
      display: []
    };
  }
  //handle \ in regex
  onTextChanged = e => {
    let value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      if (value[value.length - 1] === '\\') {
        value = value.substring(0, value.length - 1);
      }
      if (value[value.length - 1] === '(') {
        value = value.substring(0, value.length - 1);
      }
      if (value[value.length - 1] === '+') {
        value = value.substring(0, value.length - 1);
      }
      if (value[value.length - 1] === '[') {
        value = value.substring(0, value.length - 1);
      }
      if (value[value.length - 1] === '$') {
        value = value.substring(0, value.length - 1);
      }
      // const regex = new RegExp(`${value}`, "i");
      this.setState({display: this.props.allContestCode.map((currentvalue, index, array) => { return (this.props.allContestName[index].concat(" ").concat("(").concat(this.props.allContestCode[index])).concat(")") }) });
      // suggestions = this.state.display.filter(v => regex.test(v)).slice(0, 4);

      //implementing fuzzy search
      const fuse = new Fuse(this.state.display, {});
      let fuse_search = fuse.search(value);
      let result = fuse_search.map(a => a.item);
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
        {suggestions.map(item => (
          <li
            style={{
              listStyleType: "none",
              border: "5px solid black",
              borderTop: "none",
              height: "10%"
            }}
            onClick={() => this.suggestionSelected(item)}
            key={item}
          >
            <div
              style={{
                paddingLeft: "6%",
                paddingTop: "0.8%",
                paddingBottom: "0.8%"
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
      suggestions: [value]
    }));
  }
  toggleIsHidden() {
    this.setState(currentState => ({
      isHidden: !currentState.isHidden
    }));
  }

  outp() {
    console.log("submit button working");
  }

  get_code() {
    if (this.state.display.length === 0) {
      return (
        "error: nothing"
      );
    }
    return this.props.allContestCode[this.state.display.indexOf(this.state.suggestions[0])];
  }

  render_submit_button() {

    const submitStyle = {
      margin: 0,
      top: "43%",
      left: "86%",
      padding: 0,
      background: "black",
      border: "none",
      width: "5%",
      height: "10%",
      position: "fixed",
      outlineWidth: 0,
      overflow: "auto"
    };

    if (this.state.text === "") {
      return <input type="image" style={submitStyle} src={search} alt="Submit" />
    }

    else if (this.state.suggestions.length === 0) {
      return <input type="image" style={submitStyle} src={search} alt="Submit" />
    }

    else {
      return (

        <Link to="/contest">
          <input type="image" onClick={this.props.getContest.bind(this, this.get_code())} style={submitStyle} src={search} alt="Submit" />
        </Link>
      );
    }
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
      overflow: "auto"
    };

    const autoCompleteText = {
      margin: 0,
      top: "51%",
      left: "36%",
      width: "50%",
      padding: "12px 0%",
      fontWeight: "Bold",
      fontSize: 24,
      position: "fixed"
    };



    return (
      <form autoComplete="off">
        <input
          onChange={this.onTextChanged}
          value={text}
          style={dStyle}
          type="text"
          className="input"
          placeholder="Enter Contest Name"
        />
        <div style={autoCompleteText}>{this.renderSuggestions()}</div>
        {/* make onSubmit function to send an axios request */}


        {this.render_submit_button()}
      </form>
    );
  }
}

export default Searchbar;
