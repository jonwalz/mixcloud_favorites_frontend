import React from "react";
import styled from "react-emotion";
import Divider from "./divider";
import gql from "graphql-tag";
import { Query } from "react-apollo";

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
  color: #64FFF6;
  font-size: 12px;
  font-weight: 200;
  display: block;
  padding: 8px 0 8px 30px;
  background-color: #992F4E;
  border: 2px solid #64FFF6;
  margin-bottom: 15px;
  margin-top: 15px;
  cursor: pointer;
`;

const DjList = ({ djs, setDj }) => {
    return djs.map(({ username }) => (
        <ListItem
            onClick={setDj.bind(setDj, username)}
        >
            {username}
        </ListItem>
    ));
};

const GET_DJS = gql`
  {
    djs {
      username
    }
  }
`;

const FavoritesList = ({ setDj }) => (
    <Query query={GET_DJS}>
        {({ loading, error, data: { djs } }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <List>
                    <h2 className="list-title">Title</h2>
                    <Divider />
                    <DjList
                        djs={djs}
                        setDj={setDj}
                    />
                </List>
            )
        }}
    </Query>
);

export default FavoritesList;
