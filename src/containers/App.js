import "./App.css";
import React from "react";
import CardList from "../components/CardList";
import BrowseFriend from "../components/BrowseFriend";
import Scroll from "../components/Scroll";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchFriend: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  findFriend = (event) => {
    this.setState({ searchFriend: event.target.value });
  };
  render() {
    const { robots, searchFriend } = this.state;
    const serched = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchFriend.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <BrowseFriend search={this.findFriend} />
        <Scroll>
          <CardList robots={serched} />
        </Scroll>
      </div>
    );
  }
}

export default App;
