import React, { Component } from "react";
import SwapiService from "./server";

class Item extends Component {
  swapi = new SwapiService();

  state = {
    items: []
  };

  body = async data => {
    const res = await fetch(data);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${data}` +
          `, recerved ${res.status}`
      );
    }
    this.setState({ items: await res.json() });
  };

  componentWillMount() {
    const { data } = this.props;
    this.body(data);
  }

  render() {
    const { items } = this.state;

    return (
      <div class="d-flex flex-auto item">
        <a className="avatar" href="/NeXTs">
          <img
            className="pic"
            src={items.avatar_url}
            width="68"
            height="68"
            alt="@NeXTs"
          />
        </a>
        <div class="user-list-info ml-2 min-width-0">
          <a href={items.html_url} target="_tab">
            {items.login}
          </a>
          &nbsp;&nbsp;
          <div class="d-block d-md-inline f4 mt-2 mt-md-0 ml-md-1">
            {items.name}
          </div>
          <p class="f5 mt-2">{items.bio}</p>
          <ul class="user-list-meta d-flex flex-column flex-md-row f6 list-style-none text-gray mt-1 mt-md-2">
            <li class="mt-1 mt-md-0 mr-md-3 fa fa-map-marker">
              &nbsp; {items.location}
            </li>

            <li class="mt-1 mt-md-0 mr-md-3">
              <a
                class="muted-link fa fa-envelope-o"
                href="mailto:youCanCallMeDen@gmail.com">
                &nbsp; {items.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Item;
