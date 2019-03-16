import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import Input from "@material-ui/core/Input"
import { GET_DJS } from "./favorites_list"

const SAVE_DJ = gql`
    mutation CreateDj(
        $username: String!
        $feed_url: String!
        $display_name: String!
    ) {
        createDJ(
            data: {
                username: $username
                feed_url: $feed_url
                display_name: $display_name
            }
        ) {
            username
            feed_url
            display_name
        }
    }
`

interface AddArtistFieldProps {
    readonly className: string,
    readonly toggleShowMakeArtist: () => void
}

const AddArtistField = (props: AddArtistFieldProps) => {
    return (
        <Mutation
            mutation={SAVE_DJ}
            refetchQueries={[{
                query: GET_DJS
            }]}
        >
            {(createDj, { data }) => {
                return (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            createDj({
                                variables: {
                                    username: e.target[0].value,
                                    feed_url: "",
                                    display_name: ""
                                },
                            })
                            props.toggleShowMakeArtist()
                        }}
                    >
                        <Input
                            autoFocus={true}
                            placeholder="Enter username"
                            fullWidth={true}
                        />
                    </form>
                )
            }}
        </Mutation>
    )
}

export default AddArtistField
