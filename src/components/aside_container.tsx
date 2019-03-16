import * as React from 'react'
import styled from '@emotion/styled'
import FavoritesList from './favorites_list'

const AsideContainer = styled('aside')`
  display: flex;
  margin-top: 100px;
  height: 100vh;
`

interface AsideProps {
    readonly setDj: (selectedDj: string) => void
}

const Aside = ({ setDj }: AsideProps) => {
	return (
		<AsideContainer>
			<FavoritesList setDj={setDj} />
		</AsideContainer>
	)
}

export default Aside
