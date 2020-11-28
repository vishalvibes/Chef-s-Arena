import React, { Component } from "react";
import axios from "axios";
import "../autoCompleteText.css";
import Fuse from "fuse.js";
import search from "../search.png";
import ProblemList from "../ProblemList/problemlist";

class SearchTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PublicTags: [],
      PrivateTags: [],

      searchTagsPublic: [],
      searchTagsPrivate: [],

      //searchbar things, not sorted yet
      tagList: [],
      tags: [],
      isHidden: true,
      suggestions: [],
      text: "",
      display: [],

      problemSwitch: 0,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.fetchPublicTags();
    this.fetchPrivateTags();
  }

  fetchPublicTags() {
    axios
      .get(process.env.REACT_APP_URL + `/get_public_tags`, {})
      .then((res) => {
        const tempTags = res.data.map((item) => {
          return item["tag"];
        });

        this.setState({
          tagList: [...this.state.tagList, ...tempTags],
        });

        this.setState({ PublicTags: res.data });
        console.log(res);
      });
  }

  fetchPrivateTags() {
    if (this.props.username.localeCompare("error:not logged in") === 0) {
    } else {
      axios
        .create({ withCredentials: true })
        .get(process.env.REACT_APP_URL + `/tag_list`, {})
        .then((res) => {
          const tempTags = res.data.map((item) => {
            return item[1];
          });

          this.setState({
            PrivateTags: [...res.data],
            tagList: [...this.state.tagList, ...tempTags],
          });
          console.log(res);
        });
    }
  }

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
      let result = fuse_search.map((a) => a.item).slice(0, 4);
      suggestions = result;
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
              cursor: "pointer",
            }}
            // onClick={() => this.suggestionSelected(item)}

            onClick={() => {
              if (this.state.tags.includes(item) === false) {
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
              cursor: "pointer",
            }}
            onClick={() => {
              if (this.state.tags.includes(tag) === true) {
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

  handleCLick() {

    const tempTags = this.state.PublicTags.map((item) => {
      return item["tag"];
    });
    
    const tempTags2 = this.state.PrivateTags.map((item) => {
      return item[1];
    });

    this.setState({
      searchTagsPublic: this.state.tags.filter((value) =>
      tempTags.includes(value)
      ),
      searchTagsPrivate: this.state.tags.filter((value) =>
      tempTags2.includes(value)
      ),
    });
  }

  render() {
    const { text } = this.state;

    const submitStyle = {
      background: "black",
      backgroundColor: "black",
      border: "none",
      color: "white",
      width: "15%",
      height: "16%",
      padding: "1.2%",
      margin: "auto",
      textAlign: "center",
      outlineWidth: 0,
      overflow: "auto",
      cursor: "pointer",
    };

    const dStyle = {
      border: "5px solid black",
      padding: "12px 3%",
      fontWeight: "Bold",
      fontSize: 24,
      outlineWidth: 0,
      overflow: "auto",
    };

    const autoCompleteText = {
      padding: "12px 0%",
      fontWeight: "Bold",
      fontSize: 24,
    };

    if (this.state.problemSwitch === 0) {
      return (
        <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          <div
            style={{
              display: "flex",
              flex: "wrap",
              backgroundColor: "#F0F0F0",
              marginTop: "20vh",
              marginBottom: "4vh",
              overflow: "auto",
            }}
          >
            {this.renderTags()}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                margin: "auto",
                marginTop: "15vh",
              }}
            >
              <input
                onChange={this.onTextChanged}
                value={text}
                style={dStyle}
                type="text"
                className="input"
                placeholder="Search Tags"
              />
              <div style={autoCompleteText}>{this.renderSuggestions()}</div>
            </div>
            <div
              onClick={() => {
                this.handleCLick();
                this.setState({ problemSwitch: 1 });
              }}
              style={submitStyle}
              alt="Search"
            >
              🔍 Search
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <ProblemList
          searchTagsPublic={this.state.searchTagsPublic}
          searchTagsPrivate={this.state.searchTagsPrivate}
        />
      );
    }
  }
}

export default SearchTag;
