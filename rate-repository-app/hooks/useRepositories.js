import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOS } from "../graphql/queries";


const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    
    const result = useQuery(GET_REPOS, {
        fetchPolicy: 'cache-and-network',
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