import React, { Component } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";

import { UnControlled as CodeMirror } from 'react-codemirror2'

// require('codemirror/mode/xml/xml');
// require('codemirror/mode/javascript/javascript');


class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    doMeow = e => {
        e.preventDefault();
        alert("Hey! this is a dummy button");
        // do meow here
    }

    render_redirect() {
        if (this.props.problem_code.localeCompare("error:nothing") === 0) {
            return <Redirect to="/" />
        }
    }
    render() {
        const dStyle = {
            margin: 0,
            top: "12%",
            left: "5%",
            width: "70%",
            height: "47%",
            border: "5px solid black",
            fontWeight: "Bold",
            fontSize: 16,
            position: "fixed",
            outlineWidth: 0,
            overflow: "auto"
        };

        const run = {
            top: "70%",

            backgroundColor: "black" /* Green */,
            border: "none",
            color: "white",
            padding: "15px 32px",
            marginLeft: "81.2%",
            width: "10%",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontWeight: "Bold",
            position: "fixed",
            fontSize: 24,
            outlineWidth: 0
        };
        const submit = {
            top: "80%",
            backgroundColor: "black" /* Green */,
            border: "none",
            color: "white",
            padding: "15px 32px",
            marginLeft: "81.2%",
            width: "10%",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontWeight: "Bold",
            position: "fixed",
            fontSize: 24,
            outlineWidth: 0
        };
        return (
            <div>
                {this.render_redirect()}
                <p style={{
                    fontWeight: "Bold",
                    fontSize: 35,
                    marginLeft: "5%",
                    position: "fixed"

                }}>{this.props.problem_code}</p>
                <div style={dStyle}>
                    <CodeMirror
                        value='paste your code here'
                        options={{
                            mode: {},
                            theme: 'elegant',
                            lineNumbers: true
                        }}
                        onChange={(editor, data, value) => {
                        }}
                    />
                </div>

                <form autoComplete="off">

                    <input

                        style={{
                            top: "65%",
                            left: "5%",
                            width: "35%",
                            height: "30%",
                            position: "fixed",
                            border: "5px solid black",
                            fontWeight: "Bold",
                            fontSize: 16
                        }}
                        type="text"
                        className="input"
                        placeholder="Enter Custom Input"
                    />
                    <input

                        style={{
                            top: "65%",
                            left: "40%",
                            width: "35%",
                            height: "30%",
                            position: "fixed",
                            border: "5px solid black",
                            fontWeight: "Bold",
                            fontSize: 16
                        }}
                        type="text"
                        className="input"
                        placeholder="Output will display here"
                    />

                    <button onClick={this.doMeow} style={run}>Run</button>
                    <button onClick={this.doMeow} style={submit}>Submit</button>
                    {/* 
                    <input style={{
                        submit

                    }} type="button" alt="Submit" /> */}


                </form>

            </div >
        );

    }
}

export default Submit;
