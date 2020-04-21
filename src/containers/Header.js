import React, { Component } from "react";
import HeaderLeft from "../components/HeaderLeft";

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderLeft />
        <h1>Welcome to REACT!</h1>
      </div>
    );
  }
}

export default Header;
