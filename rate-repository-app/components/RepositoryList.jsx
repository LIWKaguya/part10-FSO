import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
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

const RepositoryList = () => {
  const [repositories, setRepositories] = useState();

  const fetchRepos = async () => {
    const response = await fetch('http://62.248.142.30:5000/api/repositories');
    const json = await response.json();
    setRepositories(json);
  }

  useEffect(() => {
    fetchRepos()
  }, []);
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      // other props
    />
  );
};

export default RepositoryList;