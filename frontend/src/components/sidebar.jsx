import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    const sidebarStyle = {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "DodgerBlue",
      padding: 0,
      width: "25%",
      background: "#000000",
      position: "fixed",
      height: "100%",
      overflow: "auto"
    };

    return (
      <div style={sidebarStyle}>
        <div>

        </div>

        {/* <Recent />
        <ImportantLinks /> */}

      </div>
    );
  }
}

export default Sidebar;
