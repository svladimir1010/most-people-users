import React from "react";

const Item = props => {
  const {
    avatar_url,
    html_url,
    login,
    name,
    bio,
    location,
    email
  } = props.da;

  return (
    <div class="d-flex flex-auto item">
      <a className="avatar" href="/NeXTs">
        <img
          className="pic"
          src={avatar_url}
          width="68"
          height="68"
          alt="@NeXTs"
        />
      </a>
      <div class="user-list-info ml-2 min-width-0">
        <a href={html_url} target="_tab">
          {login}
        </a>
        &nbsp;&nbsp;
        <div class="d-block d-md-inline f4 mt-2 mt-md-0 ml-md-1">
          {name}
        </div>
        <p class="f5 mt-2">{bio}</p>
        <ul class="user-list-meta d-flex flex-column flex-md-row f6 list-style-none text-gray mt-1 mt-md-2">
          <li class="mt-1 mt-md-0 mr-md-3 fa fa-map-marker">
            &nbsp; {location}
          </li>

          <li class="mt-1 mt-md-0 mr-md-3">
            <a
              class="muted-link fa fa-envelope-o"
              href="mailto:youCanCallMeDen@gmail.com">
              &nbsp; {email}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Item;
