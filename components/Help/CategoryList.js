import React from 'react';

import {FlatList} from 'react-native';

import ListItem from '../ListItem';

const CategoryList = ({categories, selectCategory, navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <ListItem
        item={item.category}
        onPress={() => {
          selectCategory(index);
          navigation.navigate('questions');
        }}
      />
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default CategoryList;
