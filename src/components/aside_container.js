import React from "react";
import styled from "react-emotion";
import FavoritesList from "./favorites_list";

const AsideContainer = styled("aside")`
  display: flex;
  margin-top: 100px;
  height: 100vh;
  width: 33%;
`;

const Aside = () => {
    return (
        <AsideContainer>
            <FavoritesList />
        </AsideContainer>
    );
};

export default Aside;
