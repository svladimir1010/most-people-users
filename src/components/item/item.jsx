import React from "react";

import styled from "styled-components";
const css = styled;

const ItemWrapper = css.div`
margin: 10px auto;
width: 70%;
padding: 10px;
border-radius: 4px;
border-bottom: 1px solid black;
display: flex;
`;

const Picture = css.img`
border-radius: 5px;
margin-right: 20px;
vertical-align: middle;
border-style: none;
width: 68px;
height: 68px;
`;

const WrapInfo = css.div`
margin-left: .5rem;
`;

const ItemName = css.div`
margin-top: .5rem!important;
@media (min-width: 768px)
 {
    margin-left: .25rem!important;
    margin-top: 0!important;
    display: inline;
}
`;
const Bio = css.p`
  margin-top: .5rem;
`;

const ListMeta = css.ul`
list-style: none;
margin: 0;
padding: 0;
margin-top: .25rem;
-ms-flex-direction: column;
flex-direction: column;
display: -ms-flexbox;
display: flex;
@media (min-width: 768px)
 {
  -ms-flex-direction: row!important;
  flex-direction: row!important;
  margin-top: .5rem!important;
}
`;

const ItemLocation = css.li`
display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
@media (min-width: 768px) {
    margin-right: 1rem;
    margin-top: 0;
}
 `;
const ItemMail = css.li`
 margin-top: .25rem;
 margin-left: .4rem;
 @media (min-width: 768px)
 {
     margin-right: 1rem!important;
     margin-top: 0!important;
 }
 `;

const LincMail = css.a`
 color: inherit;
 text-decoration: inherit;
 display: inline-block;
 font-size: inherit;
 `;

const Item = props => {
  console.log(props);
  const {
    avatar_url,
    html_url,
    login,
    name,
    bio,
    location,
    email
  } = props.item;

  return (
    <ItemWrapper>
      <a href={html_url} target="tab">
        <Picture src={avatar_url} alt="pic" />
      </a>
      <WrapInfo>
        <a href={html_url} target="_tab">
          {login}
        </a>
        &nbsp;&nbsp;
        <ItemName>{name}</ItemName>
        <Bio>{bio}</Bio>
        <ListMeta>
          <ItemLocation className="fa fa-map-marker">
            &nbsp; {location}
          </ItemLocation>

          <ItemMail>
            <LincMail
              className="fa fa-envelope-o"
              href="mailto:youCanCallMeDen@gmail.com">
              &nbsp; {email}
            </LincMail>
          </ItemMail>
        </ListMeta>
      </WrapInfo>
    </ItemWrapper>
  );
};

export default Item;
