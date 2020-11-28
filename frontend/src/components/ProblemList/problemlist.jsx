import React, { Component } from "react";
import axios from "axios";
import "../autoCompleteText.css";

class ProblemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Results: [],
      PublicProblems: [],
      PrivateProblems: [],
      offsetPublic: 0,
      offsetPrivate: 0,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.fetchPublicProblems();
    this.fetchPrivateProblems();

    // console.log(this.props.searchTagsPublic);
    // console.log(this.props.searchTagsPrivate);
  }

  /*

  /private_tag_problems
  /public_tag_problems

*/

  fetchPublicProblems() {
    if (this.props.searchTagsPublic.length > 0) {
      let filter = "";
      const { searchTagsPublic } = this.props;
      for (let item in searchTagsPublic) {
        filter += searchTagsPublic[item] + ",";
      }
      filter = filter.slice(0, -1);

      axios({ withCredentials: true })
        .get(process.env.REACT_APP_URL + `/public_tag_problems`, {
          params: {
            filter: filter,
            offset: this.state.offset,
          },
        })
        .then((res) => {
          console.log(res);
        });

      console.log(filter);
    }
  }

  fetchPrivateProblems() {
    if (this.props.searchTagsPrivate.length > 0) {
      var bodyFormData = new FormData();
      bodyFormData.append("private_tags", JSON.stringify(this.props.searchTagsPrivate));
      bodyFormData.append("offset", JSON.stringify(this.state.offsetPublic));

      axios({
        withCredentials: true,
        method: "post",
        url: process.env.REACT_APP_URL + `/private_tag_problems`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
      });
    }
  }

  renderProblems() {}

  render() {
    return <div style={{ fontSize: "1.5em", fontWeight: "bold" }}></div>;
  }
}

export default ProblemList;
