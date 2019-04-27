import * as React from 'react'
const { useState } = React
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import styled from "@emotion/styled"
import { withStyles, Theme } from '@material-ui/core/styles';

export interface ServiceSelectProps {}

const themeStyles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
})

const ServiceSelect: React.SFC<ServiceSelectProps> = () => {
    const [ selectedValue, setSelectValue ] = useState<string>('mixcloud')
    const handleSelect = (e: any) => {
        setSelectValue(e.target.value)
    }

    return (
        <ContainerStyles>
            <InputLabel htmlFor="service-select-label" className="service-select-label">Service</InputLabel>
            <Select
                className="service-select"
                value={selectedValue}
                onChange={handleSelect}
                inputProps={{
                    name: 'service',
                    id: 'service-select',
                }}
            >
                <MenuItem value="TEST">
                    <em>Test</em>
                </MenuItem>
                <MenuItem value="mixcloud">
                    <em>Mixcloud</em>
                </MenuItem>
            </Select>
        </ContainerStyles>
    )
}

export default withStyles(themeStyles, { withTheme: true })(ServiceSelect)

const ContainerStyles = styled.div`
    min-height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

    .service-select-label {
        font-size: 10px;
        width: 100%;
    }

    .service-select {
        width: 100%;
    }

    .service-select:before {
        background-color: white;
        border-bottom: none;
    }
`