import React from "react";
import ReactDOM from "react-dom";
import Aside from "./components/aside_container";
import Contents from "./components/contents_container";
import styled from "react-emotion";
import "./styles.css";

const Container = styled("div")`
  display: flex;
  width: 100%;
 `;

function App() {
    return (
        <Container>
            <Aside>Aside</Aside>
            <Contents>Content</Contents>
        </Container>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
