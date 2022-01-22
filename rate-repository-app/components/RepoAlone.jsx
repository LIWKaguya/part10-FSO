import RepositoryItem from "./RepositoryItem";
import { useEffect } from "react";
import * as React from 'react';
import { Button, Linking, View, Text, StyleSheet, FlatList } from "react-native";
import { useParams } from "react-router-native";
import { useLazyQuery } from "@apollo/client";
import { SPECIFIC_REPO } from "../graphql/queries";
import { useState } from "react";
import { useHistory } from "react-router-native";

const RepoDetails = ({ repo }) => {
    const history = useHistory();
    const {fullName, description, language, forksCount,
    stargazersCount, reviewCount, ratingAverage, ownerAvatarUrl,
    id} = repo;
    return (
        <View>
            <RepositoryItem  
                fullName={fullName}
                description={description}
                language={language}
                forksCount={forksCount}
                stargazersCount={stargazersCount}
                reviewCount={reviewCount}
                ratingAverage={ratingAverage}
                ownerAvatarUrl={ownerAvatarUrl}
                id={id}
            />
            <Button onPress={() => {
                Linking.openURL(url)
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

const ReviewItem = ({ review }) => {
    const {text, rating, createdAt, user } = review ;
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row'
        },
        score: {
            flex: 1
        },
        review: {
            flex: 5,
            textAlign: 'left'
        }
    });
    return (
        <View style={styles.container}>
            <View style={styles.score}> 
                <Text>{rating}</Text>
            </View>
            <View style={styles.review}>
                <Text>{user.username}</Text>
                <Text>{createdAt}</Text>
                <Text>{text}</Text>
            </View>
        </View>
    )
};

const ItemSeparator = () => <View style={{ height: 10}} />;

const RepoAlone = () => {
    const [getRepo, {data, loading}] = useLazyQuery(SPECIFIC_REPO);
    const [repo, setRepo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (Object.keys(repo).length === 0) {
          getRepo({ variables: { id: id } });
        }
        if (data) {
          setRepo(data.repository);
        }
      }, [data]);

    if(loading) return <Text>Loading...</Text>

    let reviews = [];
    if(repo.reviews) reviews = repo.reviews.edges.map((edge) => edge.node);

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => (
                <RepoDetails repo={repo}/>
            )}
            ItemSeparatorComponent={ItemSeparator}
        />
    )
}

export default RepoAlone;