import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";
import load from "./load.svg";

class Ranklist extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderItem() {
        return (
            this.props.ranklist.result.data.content.map(index => {
                return (<tr style={{ fontWeight: "Bold", borderBottom: "1pt solid black", width: "100%" }}>
                    <td style={{ width: "30%" }}><center>{index.rank}</center></td>
                    <td style={{ width: "30%" }}><center>{index.username}</center></td>
                    <td style={{ width: "30%" }}><center>{index.country}</center></td>
                </tr>);
            }
            ));
    }

    renderlist() {
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
            textAlign: "left",
            maxHeight: 400
        };

        const submitStyle = {
            margin: 0,
            top: "43%",
            left: "47.5%",
            padding: 0,
            background: "black",
            border: "none",
            width: "5%",
            height: "10%",
            position: "fixed",
            outlineWidth: 0,
            overflow: "auto"
        };

        if (this.props.ranklist.status === "NO") {
            if (this.props.contest_code.localeCompare("error:nothing") === 0) {
                return <Redirect to="/" />
            }
            else {
                return (

                    <input type="image" style={submitStyle} src={load} alt="Loading" />
                )
            }
        }
        return (
            <div style={{ listStyle }}>
                <table style={{ width: "100%" }}>
                    <tr
                        style={{
                            backgroundColor: "black",
                            color: "white",

                        }}
                    >
                        <th style={{ width: "30%" }}><center>Rank</center></th>
                        <th style={{ width: "30%" }}><center>Username</center></th>
                        <th style={{ width: "30%" }}><center>Country</center></th>
                    </tr>
                    {this.renderItem()}
                </table>
            </div>
        );
    }

    render() {


        return (

            <div>
                <h1><center><b>Ranklist</b></center></h1>
                <br />
                <h3><center><b>{this.props.contest_code}</b></center></h3>
                <br />
                {this.renderlist()}
            </div>


        );
    }
}

export default Ranklist;
