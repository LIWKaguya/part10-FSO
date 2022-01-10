import { gql } from '@apollo/client';

export const REPO_DETAILS = gql`
    fragment RepoDetails on Repository {
        id
        name
        ownerName
        createdAt
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
    }
`