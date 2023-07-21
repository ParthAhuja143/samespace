import { gql } from "@apollo/client";

export const GET_SONGS = gql`
    query ExampleQuery($playlistId: Int!, $search: String) {
        getSongs(playlistId: $playlistId, search: $search) {
            _id
            title
            photo
            url
            duration
            artist
        }
    }
`