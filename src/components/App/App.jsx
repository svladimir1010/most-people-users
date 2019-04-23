import React, { Component } from "react";
import SwapiService from "../../services";
import Item from "../item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { connect } from "react-redux";

import styled from "styled-components";
const css = styled;
const AppWrapper = css.div`
  display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: 1.5rem!important;
`;

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
        return <Item key={i.id} item={i} />;
      });

    return <AppWrapper>{el}</AppWrapper>;
  }
}

const mapStateToProps = ({ items, loading, error }) => {
  return { items, loading, error };
};

export default connect(mapStateToProps)(App);
