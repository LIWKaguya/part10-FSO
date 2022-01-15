import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({item}) => (
    <RepositoryItem  
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        forksCount={item.forksCount}
        stargazersCount={item.stargazersCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
        ownerAvatarUrl={item.ownerAvatarUrl}
    />
);

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
 
  return <RepositoryListContainer repositories={repositories} />
}


export default RepositoryList;