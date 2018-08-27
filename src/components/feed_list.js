import React from "react";
import styled from "react-emotion";
import { ListItem } from './favorites_list'
import Divider from "./divider";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_FEED = gql`
    query Feed($username: String!){
        feed(username: $username) {
            url
        }
    }
`;

const FeedContainer = styled('ul')`
    list-style-type: none;
    padding: 0;
`

const FeedList = ({ username }) => (
    <Query query={GET_FEED} variables={{ username }}>
        {({ loading, err, data }) => {
            if (loading) return "Loading...";
            if (err) return `Error!: ${err}`;

            return data.feed.map(({ url }) => {
                return (<ListItem>{url}</ListItem>)
            })
        }}
    </Query>
)

const Feed = ({ username }) => {
    return (
        <FeedContainer>
            <FeedList username={username} />
        </FeedContainer>
    )
}

export default Feed;