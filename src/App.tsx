import * as React from "react"
import Aside from "./components/aside_container"
import Contents from "./components/contents_container"
import SideDrawer from "./components/side_drawer"
import styled from "@emotion/styled"
import { ApolloProvider } from "react-apollo"
import client from "./client/client"
import NavBar from "./components/navbar"
import "./styles.css"

const Container = styled("div")`
  display: flex;
  width: 100%;
`

interface AppState {
    readonly selectedDj: string,
    readonly selectedDisplayName: string,
    readonly isDrawerOpen: boolean
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            selectedDj: "",
            selectedDisplayName: "",
            isDrawerOpen: true,
        }

        this.setDj = this.setDj.bind(this)
        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    setDj(selectedDj: string) {
        this.setState((prevState) => ({
            ...prevState,
            selectedDj,
            selectedDisplayName: prevState.selectedDisplayName,
        }))
    }

    toggleDrawer() {
        this.setState((prevState: AppState) => ({
            isDrawerOpen: !prevState.isDrawerOpen,
        }))
    }

    render() {
        const { selectedDj, selectedDisplayName, isDrawerOpen } = this.state
        return (
            <ApolloProvider client={client}>
                <NavBar
                    toggleDrawer={this.toggleDrawer}
                    isDrawerOpen={isDrawerOpen}
                />
                <Container>
                    <SideDrawer isOpen={isDrawerOpen}>
                        <Aside setDj={this.setDj} />
                    </SideDrawer>
                    <Contents
                        selectedDj={selectedDj}
                        selectedDisplayName={selectedDisplayName}
                        isOpen={isDrawerOpen}
                    />
                </Container>
            </ApolloProvider>
        )
    }
}

export default App
