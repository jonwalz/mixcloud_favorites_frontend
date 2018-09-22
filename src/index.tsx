import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Aside from './components/aside_container'
import Contents from './components/contents_container'
import styled from 'react-emotion'
import { ApolloProvider } from 'react-apollo'
import client from './client/client'
import './styles.css'

const Container = styled('div')`
  display: flex;
  width: 100%;
`

interface AppProps {}

interface AppState {
	readonly selectedDj: string
}

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props)
		this.state = {
			selectedDj: '',
		}

		this.setDj = this.setDj.bind(this)
	}

	setDj(selectedDj) {
		this.setState({
			selectedDj,
		})
	}

	render() {
		return (
			<ApolloProvider client={client}>
				<Container>
					<Aside setDj={this.setDj} />
					<Contents selectedDj={this.state.selectedDj} />
				</Container>
			</ApolloProvider>
		)
	}
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
