import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOS } from "../graphql/queries";

const sortOptions = {
    latest_repos: { orderBy: "CREATED_AT", orderDirection: "DESC" },
    highest_rated_repos: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    lowest_rated_repos: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
}

const useRepositories = ({sortedWay, filter}) => {
    const [repositories, setRepositories] = useState();
    
    const result = useQuery(GET_REPOS, {
        fetchPolicy: 'cache-and-network',
        variables: { ...sortOptions[sortedWay] , filter},
        onCompleted: (data) => {
            setRepositories(data.repositories);
        }
    });

    return {
        repositories,
        error: result.error,
        loading: result.loading
    }
}

export default useRepositories