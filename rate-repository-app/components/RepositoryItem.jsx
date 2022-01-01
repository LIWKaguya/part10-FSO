import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const RepositoryItem = (props) => {
    const styles = StyleSheet.create({
        box: {
            padding: 20,
            margin: 10,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#f0f0f0',
            backgroundColor: '#f9f9f9'
        }
    });
    return (    
    <View style={styles.box}>    
        <Text>
            Full name: {props.fullName} {"\n"}
            Description: {props.description} {"\n"}
            Language: {props.language} {"\n"}
            Stars: {props.stargazersCount} {"\n"}
            Forks: {props.forksCount} {"\n"}
            Reviews: {props.reviewCount} {"\n"}
            Ratings: {props.ratingAverage} 
        </Text>
    </View>
    )
}

export default RepositoryItem;