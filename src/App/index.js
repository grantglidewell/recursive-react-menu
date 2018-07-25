import React, { Component } from "react";
import { Nav } from "./Nav";

import "./styles.less";

import { content } from "./content";
export default class App extends Component {
  state = {
    selected: ""
  };
  componentDidMount() {
    this.setState({ selected: window.location.href.split("/").pop() });
  }
  render() {
    return (
      <main>
        <Nav content={content} selected={this.state.selected} />
        <h1>{window.location.href.split("/").pop()}</h1>
      </main>
    );
  }
}
