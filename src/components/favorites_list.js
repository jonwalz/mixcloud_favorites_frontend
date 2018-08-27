import React from "react";
import styled from "react-emotion";
import Divider from "./divider";

const List = styled("ul")`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0px 10px;
  border: 1px solid black;

  .list-title {
    color: #64FFF6;
    margin-bottom: 0;
  }
`;

const ListItem = styled("li")`
  display: block;
  padding: 8px 0 8px 30px;
  background-color: #992F4E;
  border: 2px solid #64FFF6;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const DjList = () => {
    return Array.from(new Array(5)).map(() => {
        return <ListItem>Item</ListItem>;
    });
};

const FavoritesList = () => (
    <List>
        <h2 className="list-title">Title</h2>
        <Divider />
        <DjList />
    </List>
);

export default FavoritesList;
