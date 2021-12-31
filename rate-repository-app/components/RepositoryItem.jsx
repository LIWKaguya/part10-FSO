import React from 'react';
import { Text } from 'react-native';

const RepositoryItem = (props) => {
    return (        
        <Text>
            Full name: {props.fullName} {"\n"}
            Description: {props.description} {"\n"}
            Language: {props.language} {"\n"}
            Stars: {props.stargazersCount} {"\n"}
            Forks: {props.forksCount} {"\n"}
            Reviews: {props.reviewCount} {"\n"}
            Ratings: {props.ratingAverage} {"\n"}
        </Text>
    )
}

export default RepositoryItem;