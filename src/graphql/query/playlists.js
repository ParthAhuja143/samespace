import { gql } from "@apollo/client";

export const GET_PLAYLISTS = gql`
    query ExampleQuery {
    getPlaylists {
        id
        title
    }
}

`