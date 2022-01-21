import { gql } from '@apollo/client'
import { REPO_DETAILS } from './fragments'

export const GET_REPOS = gql`
    ${REPO_DETAILS}
    query {
        repositories {
            edges {
                node {
                    ...RepoDetails
                }
            }
        }
    }
`

export const CHECK_USER = gql`
    query {
        authorizedUser {
            id
            username
        }
    }
`

export const SPECIFIC_REPO = gql`
    ${REPO_DETAILS}
    query getRepository($id: ID!) {
        repository(id: $id) {
          ...RepoDetails
        }
    }
`