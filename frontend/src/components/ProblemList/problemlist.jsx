import React, { Component } from "react";
import axios from "axios";
import "../autoCompleteText.css";

class ProblemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PublicProblems:[],
      PrivateProblems:[]
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // fetchPublicProblems();
    // fetchPrivateProblems();
  }

  /*

  /private_tag_problems
  /public_tag_problems

*/

  fetchPublicProblems() {}

  fetchPrivateProblems() {}

  renderProblems(){

  }
  
  render() {
    return <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>

    </div>;
  }
}

export default ProblemList;
