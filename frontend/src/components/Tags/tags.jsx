import React, { Component } from "react";
import "../autoCompleteText.css";
import Fuse from "fuse.js";
import axios from "axios";
import {
  Link
} from "react-router-dom";

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagList: [],
      tags: [],
      isHidden: true,
      suggestions: [],
      text: "",
      display: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    this.fetchProblemTags();
    this.fetchTags();
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
      let result = fuse_search.map((a) => a.item);
      suggestions = result.slice(0, 4);
    }

    this.setState(() => ({ suggestions, text: value }));
  };


  fetchProblemTags(){
    axios.create({withCredentials: true})
    .get(process.env.REACT_APP_URL + `/problem_tags`, {
             
    })
    .then((res) => {

      const tempTags2 = res.data.map(item => {return item[1]});
      this.setState({tags:tempTags2});
      console.log(res);
    });
  }

  fetchTags(){
    axios.create({withCredentials: true})
    .get(process.env.REACT_APP_URL + `/tag_list`, {
             
    })
    .then((res) => {
      const tempTags = res.data.map(item => {return item[1]});
      this.setState({tagList:tempTags});
      console.log(res);
    });
  }

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
          
                var bodyFormData = new FormData();
                bodyFormData.append('tag', item);

                axios({
                  withCredentials: true,
                  method: "post",
                  url: process.env.REACT_APP_URL + `/add_tag_to_problem`,
                  data: bodyFormData,
                  headers: { "Content-Type": "multipart/form-data" },
                })
                  .then((res) => {
                    this.setState({ tags: [...this.state.tags, item] });
                    console.log(res);
                  });
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
                //dummy data
                var bodyFormData = new FormData();
                bodyFormData.append('tag', tag);

                axios({
                  withCredentials: true,
                  method: "post",
                  url: process.env.REACT_APP_URL + `/remove_tag_from_problem`,
                  data: bodyFormData,
                  headers: { "Content-Type": "multipart/form-data" },
                }) .then((res) => {
                  const idx = this.state.tags.indexOf(tag);
                  const arr = [...this.state.tags];
                  arr.splice(idx, 1);
                  this.setState({ tags: [...arr] });
                });
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
      margin:"auto",
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
      margin:"auto",
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
            overflow:"auto"
          }}
        >
          {this.renderTags()}
        </div>
        <div style={{ display: "flex" }}>
         
        <Link to="/createtag">
          <div
            style={{
              maxWidth: "17vw",
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
              padding: "3vh",
              margin:"auto",
              marginTop: "40vh",
              
            }}
          >
            <span>Create new tag</span>
          </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Tags;
