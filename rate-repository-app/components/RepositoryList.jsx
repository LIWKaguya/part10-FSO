import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import {useHistory} from 'react-router-native'
import PickerSorting from './PickerSorting';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, sortedWay, setSortedWay }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const history = useHistory();

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <PickerSorting 
          setSortedWay={setSortedWay}
          sortedWay={sortedWay} />
      )}
      renderItem={({item}) => (
        <Pressable onPress={() => {
          history.push(`/${item.id}`)
        }}>
        <RepositoryItem  
          fullName={item.fullName}
          description={item.description}
          language={item.language}
          forksCount={item.forksCount}
          stargazersCount={item.stargazersCount}
          reviewCount={item.reviewCount}
          ratingAverage={item.ratingAverage}
          ownerAvatarUrl={item.ownerAvatarUrl}
          id={item.id}
        />
        </Pressable>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const RepositoryList = () => {
  const [sortedWay, setSortedWay] = useState('lowest_rated_repos')
  const { repositories } = useRepositories(sortedWay);
 
  return <RepositoryListContainer repositories={repositories} sortedWay={sortedWay} setSortedWay={setSortedWay} />
}


export default RepositoryList;