import React from 'react';

import {FlatList} from 'react-native';

import ListItem from '../ListItem';

const QuestionList = ({questions, selectQuestion, navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <ListItem
        item={item.question}
        onPress={() => {
          selectQuestion(index);
          navigation.navigate('question');
        }}
      />
    );
  };

  return (
    <FlatList
      data={questions}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default QuestionList;
