import React from 'react';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MyTouchableOpacity = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: green;
  position: absolute;
  bottom: 30px;
  right: 10px;
  justify-content: center;
  align-items: center;
`;

const FloatingBtn = ({onPress}) => {
  return (
    <MyTouchableOpacity style={{zIndex: 2}} onPress={onPress}>
      <Icon name="plus" color="white" size={16} />
    </MyTouchableOpacity>
  );
};

export default FloatingBtn;
