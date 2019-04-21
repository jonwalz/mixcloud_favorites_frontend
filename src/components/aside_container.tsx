import * as React from 'react'
// const { useState } = React
import styled from '@emotion/styled'
import FavoritesList from './favorites_list'
import ServiceSelect from './service_select'


const AsideContainer = styled('aside')`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

interface AsideProps {
    readonly setDj: (selectedDj: string) => void
}

const Aside = ({ setDj }: AsideProps) => {
    // const [ setSelectValue ] = useState('')
    return (
        <AsideContainer>
            <ServiceSelect/>
            <FavoritesList setDj={setDj} />
        </AsideContainer>
    )
}

export default Aside