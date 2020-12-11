import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0
        };
    }

    update_time() {
        if (this.props.contest_details.status === "NO") { }
        else {
            const start = (new Date(this.props.contest_details.result.data.content.startDate)).getTime();
            const end = (new Date(this.props.contest_details.result.data.content.endDate)).getTime();
            const curr = (new Date()).getTime();
            const diff = curr > end ? 0 : curr > start ? end - curr : start - curr;

            if (this.state.days !== Math.floor(diff / (1000 * 60 * 60 * 24))) {
                this.setState({ days: Math.floor(diff / (1000 * 60 * 60 * 24)) });
            }
            if (this.state.hours !== Math.floor((diff / (1000 * 60 * 60)) % 24)) {
                this.setState({ hours: Math.floor((diff / (1000 * 60 * 60)) % 24) });
            }
            if (this.state.minutes !== Math.floor((diff / 1000 / 60) % 60)) {
                this.setState({ minutes: Math.floor((diff / 1000 / 60) % 60) });
            }
        }

    }

    render_timer() {


        if (this.props.contest_details.status === "NO") {
            return (<div style={{}}>

                <div style={{ border: "5px solid white", display: "flex", flexDirection: "column", padding: "12px" }}>
                    <h4 style={{ margin: "10px", color: "white" }}><center><b>Loading Timer</b></center></h4>
                    <div style={{ border: "none", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

                        <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                            <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>0</h3></center></div>
                            <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>days</h4></center></div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                            <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>0</h3></center></div>
                            <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}> hour</h4></center></div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                            <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>0</h3></center></div>
                            <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>mins</h4></center></div>

                        </div>
                    </div>
                </div>
            </div>
            );
        }

        const start = (new Date(this.props.contest_details.result.data.content.startDate)).getTime();
        const end = (new Date(this.props.contest_details.result.data.content.endDate)).getTime();
        const curr = (new Date()).getTime();

        if (curr >= end) {
            return (
                <div style={{}}>

                    <div style={{ border: "5px solid white", display: "flex", flexDirection: "column", padding: "12px" }}>
                        <h4 style={{ margin: "10px", color: "white" }}><center><b>Contest Ended</b></center></h4>
                        <div style={{ border: "none", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

                            <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>0</h3></center></div>
                                <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>days</h4></center></div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>0</h3></center></div>
                                <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>hour</h4></center></div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>0</h3></center></div>
                                <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>mins</h4></center></div>

                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        else if (curr < start) {
            return (
                <div style={{}}>


                    <div style={{ border: "5px solid white", display: "flex", flexDirection: "column", padding: "12px" }}>
                        <h4 style={{ margin: "10px", color: "white" }}><center><b>Contest Starting In</b></center></h4>
                        <div style={{ border: "none", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

                            <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>{this.state.days}</h3></center></div>
                                <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>days</h4></center></div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>{this.state.hours}</h3></center></div>
                                <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>hour</h4></center></div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>{this.state.minutes}</h3></center></div>
                                <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>mins</h4></center></div>

                            </div>
                        </div>
                    </div>
                </div>
            );

        }

        else {
            return (
                <div style={{}}>


                    <div style={{ border: "5px solid white", display: "flex", flexDirection: "column", padding: "12px" }}>
                        <h4 style={{ margin: "10px", color: "white" }}><center><b>Contest Ending In</b></center></h4>
                        <div style={{ border: "none", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

                            <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>{this.state.days}</h3></center></div>
                                <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>days</h4></center></div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>{this.state.hours}</h3></center></div>
                                <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>hour</h4></center></div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                <div style={{ border: "5px solid white", padding: "5px", marginBottom: "5px" }}><center><h3 style={{ color: "white" }}>{this.state.minutes}</h3></center></div>
                                <div style={{ border: "none" }}><center><h4 style={{ color: "white" }}>mins</h4></center></div>

                            </div>
                        </div>
                    </div>
                </div>
            );

        }

    }

    timer() {
        setInterval(() => {
            this.update_time();
        }, 1000)
    }

    render() {

        return (
            <div style={{ position: "fixed", marginTop: "13%", marginLeft: "2.4%", width: "20%" }}>
                {this.timer()}
                {this.render_timer()}
            </div>
        );
    }
}

export default Timer;
