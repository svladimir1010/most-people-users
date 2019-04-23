import React, { Component } from "react";
import "./App.css";
import SwapiService from "../../services";
import Item from "../item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const swapi = new SwapiService();
    swapi.getItemsUrl();
  }

  render() {
    const { items, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    const el =
      items.length === 10 &&
      items.map(i => {
        return <Item key={i.id} da={i} />;
      });

    return (
      <div className="user-list-item py-4 d-flex">{el}</div>
    );
  }
}

const mapStateToProps = ({ items, loading, error }) => {
  return { items, loading, error };
};

export default connect(mapStateToProps)(App);
