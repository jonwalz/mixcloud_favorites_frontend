import React from "react";
import styled from "react-emotion";

const ContentsContainer = styled("section")`
  height: 100vh;
  width: 66%;
  margin-top: 100px;
`;

const Contents = ({ selectedDj }) => {
  return (
    <ContentsContainer>
      {selectedDj}
    </ContentsContainer>
  )
}

export default Contents;
