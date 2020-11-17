import React, { Component } from "react";
import {
  Link,
  Redirect
} from "react-router-dom";
import Timer from "./timer"
import Typewriter from 'typewriter-effect';

class ContestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      suggestions: [],
      text: ""
    };
  }

  render_table() {

    const listStyle = {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      border: "5px solid black",
      top: "30%",
      left: "30.8%",
      width: "60%",
      fontWeight: "Bold",
      fontSize: 24,
      position: "fixed",
      overflow: "auto",
      textAlign: "left"
    };

    if (this.props.contest_details.status === "NO") {
      if (this.props.contest_code.localeCompare("error:nothing") === 0) {
        return <Redirect to="/" />
      }
      else {
        return (
          <h4><b><div style={{ position: "fixed", marginLeft: "46%", marginTop: "14.5%" }}>
            <h1><b>Wait while we load the
      <Typewriter
                options={{
                  strings: ['Problems', 'Thrill', 'Timer', 'Learning', 'Anexity'],
                  autoStart: true,
                  loop: true,
                }}
              /></b></h1></div></b></h4>
        )
      }
    }
    else {
      return (
        <div style={listStyle}>
          <table style={{}}>
            <tr
              style={{
                backgroundColor: "black",
                color: "white"
              }}
            >
              <th>Problem Code</th>
              <th>Submissions</th>
            </tr>

            {

              this.props.contest_details.result.data.content.problemsList.map(contest => { return (<tr><Link to='/problem'><td onClick={this.props.getProblem.bind(this, contest.problemCode)}>{contest.problemCode}</td></Link><td>{contest.successfulSubmissions}</td></tr>) })
            }

          </table>
        </div>
      )
    }
  }

  redirect() {
    // if (this.props.contest_code == undefined) {
    //   // window.location.href = "localhost:80/";
    //   return <Redirect to="/" />
    // }
  }
  render() {


    const buttonStyle = {
      backgroundColor: "black" /* Green */,
      border: "2.5px solid black",
      color: "white",
      padding: "15px 32px",
      marginLeft: "65%",
      height: "10%",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontWeight: "Bold",
      fontSize: 24,
      outlineWidth: 0
    };


    return (
      <div>
        {this.redirect()}

        <Link to="/ranklist">
          <button style={buttonStyle} type="button">
            Ranklist
        </button>
        </Link>

        <Timer contest_details={this.props.contest_details} />
        {this.render_table()}
      </div>
    );
  }
}

export default ContestList;
