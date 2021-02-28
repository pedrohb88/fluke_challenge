import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import categories from '../../assets/questions.json';

import CategoryList from './CategoryList';
import QuestionList from './QuestionList';
import Question from './Question';

const Stack = createStackNavigator();

const Help = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const selectCategory = (id) => {
    setSelectedCategory(id);
  };

  const selectQuestion = (id) => {
    setSelectedQuestion(id);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="categories" options={{title: 'Dúvidas Frequentes'}}>
          {(props) => (
            <CategoryList
              {...props}
              categories={categories}
              selectCategory={selectCategory}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="questions"
          options={{
            title:
              selectedCategory !== null &&
              categories[selectedCategory].category,
          }}>
          {(props) => {
            return (
              <QuestionList
                {...props}
                questions={
                  selectedCategory !== null &&
                  categories[selectedCategory].questions
                }
                selectQuestion={selectQuestion}
              />
            );
          }}
        </Stack.Screen>
        <Stack.Screen
          name="question"
          options={{
            title:
              selectedCategory !== null &&
              categories[selectedCategory].category,
          }}>
          {(props) => {
            let question = null;

            if (selectedQuestion !== null) {
              question =
                categories[selectedCategory].questions[selectedQuestion];

              return (
                <Question
                  {...props}
                  question={question.question}
                  answer={question.answer}
                />
              );
            }
          }}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Help;
