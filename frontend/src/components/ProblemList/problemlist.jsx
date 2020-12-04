import React, { Component } from "react";
import axios from "axios";
import "../autoCompleteText.css";
import { Redirect } from "react-router-dom";

class ProblemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Results: [],
      PublicProblems: [],
      PrivateProblems: [],
      offsetPublic: 0,
      offsetPrivate: 0,
      refresh: 0,
      redirect: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
  }

  componentDidMount() {
    this.fetchPublicProblems();
    this.fetchPrivateProblems();
  }

  fetchPublicProblems() {
    if (this.props.searchTagsPublic.length > 0) {
      let filter = "";
      const { searchTagsPublic } = this.props;
      for (let item in searchTagsPublic) {
        filter += searchTagsPublic[item] + ",";
      }
      filter = filter.slice(0, -1);

      axios
        .create({ withCredentials: true })
        .get(process.env.REACT_APP_URL + `/public_tag_problems`, {
          params: {
            filter: filter,
            offset: this.state.offsetPublic,
          },
        })
        .then((res) => {
          let temparr = [];
          for (var k in res.data.result.data.content) temparr.push(k);
          this.setState({ PublicProblems: temparr });
          this.setState({ refresh: 1 });
          // console.log(this.state.PublicProblems);
        });
    }
  }

  fetchPrivateProblems() {
    if (this.props.searchTagsPrivate.length > 0) {
      var bodyFormData = new FormData();
      bodyFormData.append(
        "private_tags",
        JSON.stringify(this.props.searchTagsPrivate)
      );
      bodyFormData.append("offset", JSON.stringify(this.state.offsetPrivate));

      axios({
        withCredentials: true,
        method: "post",
        url: process.env.REACT_APP_URL + `/private_tag_problems`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        this.setState({ PrivateProblems: res.data, refresh: 1 });
        // console.log(this.state.PrivateProblems);
      });
    }
  }

  renderProblems() {
    if (
      this.props.searchTagsPublic.length > 0 &&
      this.props.searchTagsPrivate.length > 0
    ) {
      return this.state.PublicProblems.filter((x) =>
        this.state.PrivateProblems.includes(x)
      ).map((item) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.props.setContestCode().then(() => {
              this.props.getProblem(item).then(() => {
                this.setState({ redirect: "/problem" });
              });
            });
          }}
        >
          {item}
        </div>
      ));
    } else if (this.props.searchTagsPublic.length > 0) {
      return this.state.PublicProblems.map((item) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.props.setContestCode();
            this.props.getProblem(item);
            this.setState({ redirect: "/problem" });
          }}
        >
          {item}
        </div>
      ));
    } else {
      return this.state.PrivateProblems.map((item) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.props.setContestCode();
            this.props.getProblem(item);
            this.setState({ redirect: "/problem" });
          }}
        >
          {item}
        </div>
      ));
    }
  }

  render() {
    return (
      <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
        {this.renderProblems()}
        {this.renderRedirect()}
      </div>
    );
  }
}

export default ProblemList;
