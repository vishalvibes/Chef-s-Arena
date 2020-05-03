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
        	run:"Run",
        	code:'enter your code here',
        	input: '',
        	lang: this.props.problem_details.result.data.content.languagesSupported[0],
            payload : {
                sourceCode: "input your code here",
                language: "",
                input: ""
            },
            output:""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){

    		this.setState({input: e.target.value});
    }

    doMeow = e => {
        e.preventDefault();
        alert("Hey! this is a dummy button");
        // do meow here
    }

    submit_code = e => {
        e.preventDefault();
        if (this.state.run.localeCompare(". . .") === 0) {}
        else{
        this.state.payload.input = this.state.input;
        this.state.payload.language = this.state.lang;
        this.state.payload.sourceCode = this.state.code;
        console.log(this.state.payload);
        this.setState({run:". . ."});
        axios.get(process.env.REACT_APP_URL + `/run`, {
            params: {
              username: this.props.username,
              password: this.props.password,
              code: this.state.payload
            }
          })
            .then(res => {
        			
        			console.log(res.data.result.data.link);

		        	axios.get(process.env.REACT_APP_URL + `/getSubmissionStatus`, {
		            params: {
		              username: this.props.username,
		              password: this.props.password,
		              link: res.data.result.data.link
		            }
		          })
		            .then(res => {
		            this.setState({output:res.data.result.data.output});
		            this.setState({run:"Run"});

		            console.log(res.data);
		        });    

            
            
            
        });

       
        }
    }

    render_redirect() {
        if (this.props.problem_code.localeCompare("error:nothing") === 0) {
            return <Redirect to="/" />
        }
    }

    render_select() {

        const selectStyle = {
            top: "20%",
            backgroundColor: "black" /* Green */,
            border: "none",
            color: "white",
            padding: "15px 32px",
            marginLeft: "81.2%",
            width: "15%",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontWeight: "Bold",
            position: "fixed",
            fontSize: 24,
            outlineWidth: 0
        };

        return (<select style={selectStyle} value={this.state.lang} onChange = {(l) => this.setState({lang : l.target.value})}>
            {this.props.problem_details.result.data.content.languagesSupported.map((x) => <option key={x}>{x}</option>)}
        </ select>)
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
                        value={this.state.code}
                        onChange={(editor, data, value) => {
  								this.setState({code:value})									

  																	}}
                        options={{
                            mode: {},
                            theme: 'elegant',
                            lineNumbers: true
                        }}
                    />

                </div>




                <form autoComplete="off">

                    {this.render_select()}

                    <textarea
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
                        
                        placeholder="Enter Custom Input"
                        onChange={this.handleChange}
                        value = {this.state.input}
                    >
                    </textarea>

                    <textarea
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
                        value={this.state.output}
                        placeholder="Output will display here"
                    >
                    </textarea>

                    <button onClick={this.submit_code} style={run}>{this.state.run}</button>
                    <button onClick={this.doMeow} style={submit}>Submit</button>

                </form>

            </div >
        );

    }
}

export default Submit;
