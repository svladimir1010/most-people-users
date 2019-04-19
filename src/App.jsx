import React, { Component } from "react";
import "./App.css";
import SwapiService from "./server";
import Item from "./item";

class App extends Component {
  swapi = new SwapiService();

  state = {
    arrayUrl: [],
    arrayItems: []
  };

  componentWillMount() {
    this.swapi.getResource().then(res => {
      this.setState({ arrayUrl: res });
      console.log(this.state.arrayUrl[0]);
    });
  }

  render() {
    const { arrayUrl } = this.state;

    const el = arrayUrl.map(res => (
      <Item data={res.url} />
    ));

    return (
      <div className="user-list-item py-4 d-flex">
        {el}
      </div>
    );
  }
}

export default App;


