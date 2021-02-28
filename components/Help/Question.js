import React from 'react';

import {ScrollView} from 'react-native';

import styled from 'styled-components/native';

const StyledView = styled.View`
  padding: 20px;
`;

const QuestionTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const QuestionAnswer = styled.Text`
  font-size: 20px;
  line-height: 30px;
`;

const Question = ({question, answer}) => {
  return (
    <StyledView>
      <ScrollView>
        <QuestionTitle>{question}</QuestionTitle>
        <QuestionAnswer>{answer}</QuestionAnswer>
      </ScrollView>
    </StyledView>
  );
};

export default Question;
