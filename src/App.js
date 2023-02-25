import "./App.css";
import React from "react";
import CardList from "./CardList";
import { robots } from "./Robots";
import BrowseFriend from "./BrowseFriend";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchFriend: "",
    };
  }
  findFriend = (event) => {
    this.setState({ searchFriend: event.target.value });
  };
  render() {
    const serched = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchFriend.toLowerCase());
    });
    return (
      <React.Fragment>
        <h1>RoboFriends</h1>
        <BrowseFriend search={this.findFriend} />
        <CardList robots={serched} />
      </React.Fragment>
    );
  }
}

export default App;
