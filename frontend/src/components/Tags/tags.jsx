import React, { Component } from "react";

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagList:["apple","google","microsoft","new", "hard", "dynamic programming"],
            tags:["new", "hard", "dynamic programming"]
        	// input: '',
        	// output:""
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(e){

    // 		this.setState({input: e.target.value});
    // }

    renderTags() {
        return (
            this.state.tags.map(tag => {
            return (      
            <div style={{color:"black", backgroundColor:"#FFFF00",padding:"1vh", margin:"1.5vh",borderRadius:"1vh"}}>
                <span style={{marginRight:"1vh"}}>{tag}</span>
                <span style={{paddingLeft:"1vh", paddingRight:"1vh", backgroundColor:"#CCCC00", borderRadius:"1vh"}}>X</span>
            </div>);
            }
            ));
    }

    render() {

        return (
            <div style={{fontSize:"1.5em",fontWeight:"bold"}}>
                <div style={{margin:"4vh", fontSize:"1.8em"}}><span >{this.props.problem_code}</span></div>
                <div style={{display:"flex", flex:"wrap", backgroundColor:"#F0F0F0", marginBottom:"4vh"}}>
                    {this.renderTags()}
                </div>
                <div style={{display:"flex"}}>
                <div style={{ maxWidth:"17vw", backgroundColor:"black", color:"white", textAlign:"center", padding:"3vh"}}>
                    <span>Create new tag</span>
                </div>
                <div style={{ maxWidth:"17vw",marginLeft:"1vh", backgroundColor:"black", color:"white", textAlign:"center", padding:"3vh"}}>
                    <span>Apply Changes</span>
                </div>
                </div>

            </div >
        );

    }
}

export default Tags;
