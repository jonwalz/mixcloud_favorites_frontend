import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from '@emotion/styled'
import Feed from './feed_list'
import classNames from 'classnames'
import { withStyles, Theme } from '@material-ui/core/styles'

const GET_USERNAME = gql`
    query($username: String!) @client {
        dj(username: $username) {
            display_name
        }
    }
`

const ContentsContainer = styled('section')`
  height: 100vh;
  width: 66%;
  margin-top: 73px;
  padding: 0px 10px;

  h2 {
    color: #1A3937;
    margin-bottom: 0;
    min-height: 35px;
  }
`
interface StyleClasses {
    content: string
    contentShift: string
}

interface ContentsProps {
    readonly selectedDj: string
    readonly selectedDisplayName: string
    readonly isOpen: boolean
    readonly classes: StyleClasses
}

const Contents = ({
    selectedDj,
    isOpen,
    classes,
}: ContentsProps) => {
    return (
        <ContentsContainer
            className={classNames(classes.content, {
                [classes.contentShift]: isOpen,
            })}
        >
            <Query query={GET_USERNAME} variables={{ username: selectedDj }}>
                {(data: any) => (
                    <>
                        <h2>{data.display_name}</h2>
                        {selectedDj && <Feed username={selectedDj} />}
                        {!selectedDj && (
                            <span style={{ margin: '0 auto' }}>Nothingy selected</span>
                        )}
                    </>
                )}
            </Query>
        </ContentsContainer>
    )
}

const drawerWidth = 240

const styles = (theme: Theme) => ({
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
})

export default withStyles(styles)(Contents)
