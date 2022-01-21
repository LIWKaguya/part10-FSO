import RepositoryItem from "./RepositoryItem";
import { useEffect } from "react";
import * as React from 'react';
import { Button, Linking, View, Text } from "react-native";
import { useParams } from "react-router-native";
import { useLazyQuery } from "@apollo/client";
import { SPECIFIC_REPO } from "../graphql/queries";
import { useState } from "react";
import { useHistory } from "react-router-native";

const RepoAlone = () => {
    const [getRepo, {data, loading}] = useLazyQuery(SPECIFIC_REPO);
    const [repo, setRepo] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (Object.keys(repo).length === 0) {
          getRepo({ variables: { id: id } });
        }
        if (data) {
          setRepo(data.repository);
        }
      }, [data]);

    if(loading) return <Text>Loading...</Text>

    return (
        <View>
            <RepositoryItem  
                fullName={repo.fullName}
                description={repo.description}
                language={repo.language}
                forksCount={repo.forksCount}
                stargazersCount={repo.stargazersCount}
                reviewCount={repo.reviewCount}
                ratingAverage={repo.ratingAverage}
                ownerAvatarUrl={repo.ownerAvatarUrl}
                id={repo.id}
                url={repo.url}
            />
            <Button onPress={() => {
                Linking.openURL(repo.url)
            }}
            title='Open in Github'
            />
            <Button onPress={() => {
                history.push('/');
            }}
            title='Go to the list'
            />
        </View>
    );
}

export default RepoAlone;