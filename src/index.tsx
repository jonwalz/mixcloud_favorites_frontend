import React from "react";
import ReactDOM from "react-dom";
import Aside from "./components/aside_container";
import Contents from "./components/contents_container";
import styled from "react-emotion";
import { ApolloProvider } from "react-apollo";
import client from "./client"
import "./styles.css";

const Container = styled("div")`
  display: flex;
  width: 100%;
  max-width: 900px;
 `;

interface AppProps { }

interface AppState {
    readonly selectedDj: string
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)

        /*
            The app is not complex enough to need a state management library
            since the only piece of state to track is the selected dj
        */

        this.state = {
            selectedDj: '',
        }

        this.setDj = this.setDj.bind(this)
    }

    setDj(selectedDj) {
        this.setState({
            selectedDj
        })
    }

    render() {
        return (
            <ApolloProvider client={client} >
                <Container>
                    <Aside setDj={this.setDj} />
                    <Contents selectedDj={this.state.selectedDj} />
                </Container>
            </ApolloProvider>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
