import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar.jsx";
import Searchbar from "./components/searchbar";
import Login from "./components/login";
import ContestList from "./components/contestList";
import Problem from "./components/problem";
import Submit from "./components/submit";
import Ranklist from "./components/ranklist";
import Donate from "./components/donate";
import Tags from "./components/Tags/tags";
import SearchTags from "./components/SearchTags/searchtags";
import SearchTagsButton from "./components/SearchTagsButton/searchtagsbutton";
import CreateTag from "./components/CreateTag/createtag";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import load from "./components/load.svg";
import ca_v from "./components/ca_v.png";
import ca_h from "./components/ca_h.png";
import Typewriter from "typewriter-effect";
require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.getContest = this.getContest.bind(this);
    this.getProblem = this.getProblem.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      allContestCode: [],
      allContestName: [],
      username: "error:not logged in",
      password: "error:not logged in",
      contest_fetched: 0,
      contest_code: "error:nothing",
      contest_details: { status: "NO" },
      problem_code: "error:nothing",
      problem_details: { status: "NO" },
      ranklist: { status: "NO" },
      submissions: { status: "NO" },
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.setContestCode = this.setContestCode.bind(this);
  }

  componentDidMount() {
    this.getAllContest();
  }

  getQueryParams = (params, url) => {
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp("[?&]" + params + "=([^&#]*)", "i");
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  };

  login() {
    if (this.state.username.localeCompare("error:not logged in") === 0) {
      let temp = this.getQueryParams("code", window.location.href);

      if (temp != null) {
        console.log(temp);

        this.setState({ username: ". . ." });
        axios
          .get(process.env.REACT_APP_URL + `/getuser`, {
            params: {
              code: temp,
            },
          })
          .then((res) => {
            console.log(res.data.username);
            if (res.data.username != null) {
              this.setCookie("username", res.data.username, 180);
              this.setCookie("password", res.data.password, 180);
              this.setState({ username: res.data.username });
              this.setState({ password: res.data.password });
              // window.location.href = "/";
            } else {
              console.log("wrong code");
              this.login();
            }
          });
      } else {
        console.log("no params");
      }
    }
  }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  auto_login() {
    if (this.getCookie("username") === "") {
    } else {
      if (this.state.username.localeCompare("error:not logged in") === 0) {
        this.setState({ username: this.getCookie("username") });
        this.setState({ password: this.getCookie("password") });
      }
    }
  }

  logout() {
    this.setState({ username: "error:not logged in" });
    this.setCookie("username", "", -1);
    this.setState({ contest_fetched: 0 });
    window.location.href = "/";
  }

  getAllContest() {
    if (this.state.username.localeCompare("error:not logged in") === 0) {
    } else {
      if (this.state.password.localeCompare("error:not logged in") === 0) {
      } else {
        if (this.state.username.localeCompare(". . .") === 0) {
        } else {
          if (this.state.contest_fetched === 0) {
            this.setState({ contest_fetched: 1 });
            axios
              .create({
                withCredentials: true,
              })
              .get(process.env.REACT_APP_URL + `/contestlist`, {})
              .then((res) => {
                console.log(res.data);

                this.setState({
                  allContestCode: res.data.result.data.content.contestList.map(
                    (contest) => {
                      return contest.code;
                    }
                  ),
                });
                this.setState({
                  allContestName: res.data.result.data.content.contestList.map(
                    (contest) => {
                      return contest.name;
                    }
                  ),
                });

                if (res.data.status.localeCompare("OK") === 0) {
                  console.log("recieved all-contest");
                } else {
                  this.logout();
                }
              });
          }
        }
      }
    }
  }

  setContestCode(){
    this.setState({ contest_code: "PRACTICE" });
    this.setCookie("contest_code", "PRACTICE", 180);
    console.log("practice set");
  }

  getContest(code) {
    if (this.state.username.localeCompare("error:not logged in") === 0) {
    } else {
      if (this.state.username.localeCompare(". . .") === 0) {
      } else {
        if (this.state.contest_code.localeCompare(code) === 0) {
        } else {
          this.setState({ contest_code: code });
          this.setCookie("contest_code", code, 180);
          this.setState({ contest_details: { status: "NO" } });
          axios
            .create({
              withCredentials: true,
            })
            .get(process.env.REACT_APP_URL + `/contest`, {})
            .then((res) => {
              this.setState({ contest_details: res.data });
              console.log(this.state.contest_details);
              if (res.data.status.localeCompare("OK") === 0) {
                console.log("recieved contest");
                this.getRanklist(code);
              } else {
                this.logout();
              }
            });
        }
      }
    }
  }

  getRanklist(code) {
    console.log("fetching ranklist");
    axios
      .create({
        withCredentials: true,
      })
      .get(process.env.REACT_APP_URL + `/ranklist`, {})
      .then((res) => {
        this.setState({ ranklist: res.data });
        console.log(this.state.ranklist);
        if (res.data.status.localeCompare("OK") === 0) {
          console.log("recieved ranklist");
        } else {
          this.logout();
        }
      });
  }

  getSubmissions(code) {
    console.log("fetching submissions");
    axios
      .create({
        withCredentials: true,
      })
      .get(process.env.REACT_APP_URL + `/submission`, {
        params: {
          username: this.state.username,
          password: this.state.password,
          contest: this.state.contest_code,
          problem: code,
        },
      })
      .then((res) => {
        this.setState({ submissions: res.data });
        console.log(this.state.submissions);
        if (res.data.status.localeCompare("OK") === 0) {
          console.log("recieved submissions");
        } else {
          this.logout();
        }
      });
  }

  dev_login() {
    if (this.state.username.localeCompare("error:not logged in") === 0) {
      this.setState({ username: "chaos_" });
      this.setState({ password: "5e7c867782c32" });
      console.log("dev_login");
    }
  }

  auto_logout() {
    if (this.state.username.localeCompare("error:not logged in") === 0) {
    } else if (this.state.username.localeCompare(". . .") === 0) {
    } else if (
      this.state.username.localeCompare(this.getCookie("username")) !== 0
    ) {
      this.logout();
      alert("You are logged out, please login again to continue");
    }
  }

  getProblem(code) {
    if (this.state.username.localeCompare("error:not logged in") === 0) {
    } else {
      if (this.state.username.localeCompare(". . .") === 0) {
      } else {
        if (this.state.problem_code.localeCompare(code) === 0) {
        } else {
          this.setState({ problem_code: code });
          this.setCookie("problem_code", code, 180);
          axios
            .create({
              withCredentials: true,
            })
            .get(process.env.REACT_APP_URL + `/problem`, {})
            .then((res) => {
              this.setState({ problem_details: res.data });
              console.log(this.state.problem_details);
              if (res.data.status.localeCompare("OK") === 0) {
                console.log(res);
                this.getSubmissions(code);
              }
            });
        }
      }
    }
  }

  render_searchbar() {
    const submitStyle = {
      margin: 0,
      top: "43%",
      left: "60%",
      padding: 0,
      background: "black",
      border: "none",
      width: "5%",
      height: "10%",
      position: "fixed",
      outlineWidth: 0,
      overflow: "auto",
    };

    if (this.state.allContestCode.length === 0) {
      if (this.state.username.localeCompare("error:not logged in") === 0) {
        return (
          <div
            style={{ position: "fixed", marginLeft: "50%", marginTop: "20%" }}
          >
            <h1>
              <b>
                Login to start
                <Typewriter
                  options={{
                    strings: [
                      "Coding",
                      "Competing",
                      "Contributing",
                      "Learning",
                      "Growing",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
            </h1>
          </div>
        );
      } else {
        return (
          <input type="image" style={submitStyle} src={load} alt="Submit" />
        );
      }
    } else {
      return (
        <Searchbar
          username={this.state.username}
          password={this.state.password}
          allContestCode={this.state.allContestCode}
          allContestName={this.state.allContestName}
          getContest={this.getContest}
        />
      );
    }
  }

  render() {
    const cavStyle = {
      margin: 0,
      top: "35.5%",
      left: "6%",
      padding: 0,
      background: "black",
      border: "none",
      width: "12%",
      position: "fixed",
      outlineWidth: 0,
      overflow: "auto",
    };

    const cahStyle = {
      margin: 0,
      top: "3.5%",
      left: "4.8%",
      padding: 0,
      background: "black",
      border: "none",
      width: "15%",
      position: "fixed",
      outlineWidth: 0,
      overflow: "auto",
    };

    return (
      <React.StrictMode>
        {this.auto_login()}
        {this.auto_logout()}
        {this.login()}

        {/* temp login for dev purposes */}
        {/* {this.dev_login()} */}

        <Router>
          <Switch>
            <Route exact path="/">
              <Sidebar
                username={this.state.username}
                password={this.state.password}
              />
              <input type="image" style={cavStyle} src={ca_v} alt="Submit" />
              {this.render_searchbar()}
              <Donate />
              <SearchTagsButton />
            </Route>

            <Route exact path="/#">
              {this.getAllContest()}
              <Sidebar
                username={this.state.username}
                password={this.state.password}
              />
              <input type="image" style={cavStyle} src={ca_v} alt="Submit" />
              {this.render_searchbar()}
              <Donate />
            </Route>

            <Route exact path="/contest">
              <Sidebar
                username={this.state.username}
                password={this.state.password}
              />
              <Link to="/">
                <input type="image" style={cahStyle} src={ca_h} alt="Submit" />
              </Link>
              <ContestList
                username={this.state.username}
                password={this.state.password}
                contest_code={this.state.contest_code}
                contest_details={this.state.contest_details}
                getProblem={this.getProblem}
              />
            </Route>

            <Route exact path="/problem">
              <Problem
                problem_details={this.state.problem_details}
                submissions={this.state.submissions}
                problem_code={this.state.problem_code}
              />
            </Route>

            <Route exact path="/submit">
              <Submit
                username={this.state.username}
                password={this.state.password}
                problem_details={this.state.problem_details}
                problem_code={this.state.problem_code}
              />
            </Route>

            <Route exact path="/ranklist">
              <Ranklist
                problem_details={this.state.problem_details}
                problem_code={this.state.problem_code}
                contest_code={this.state.contest_code}
                ranklist={this.state.ranklist}
              />
            </Route>

            <Route exact path="/tags">
              <Tags
                problem_details={this.state.problem_details}
                problem_code={this.state.problem_code}
                contest_code={this.state.contest_code}
              />
            </Route>

            <Route exact path="/searchtags">
              <SearchTags setContestCode={this.setContestCode} getProblem={this.getProblem} username={this.state.username} />
            </Route>

            <Route exact path="/createtag">
              <CreateTag />
            </Route>
          </Switch>
        </Router>

        <Login
          username={this.state.username}
          password={this.state.password}
          logout={this.logout}
        />
      </React.StrictMode>
    );
  }
}

export default App;
