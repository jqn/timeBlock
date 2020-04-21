import React from "react";
import ReactDOM from "react-dom";
import MainSection from "./containers/MainSection";
import Header from "./containers/Header";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainSection />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
