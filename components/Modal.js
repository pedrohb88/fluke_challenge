import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const BaseModal = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ModalContentContainer = styled.View`
  position: relative;
  background-color: #f0f0f0;
  min-width: 80%;
  min-height: 50%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: auto;
  align-self: flex-end;
`;

const Button = styled.TouchableOpacity`
  margin: 0 0 0 30px;
`;

const ConfirmText = styled.Text`
  font-weight: bold;
  color: black;
`;

const Title = styled.Text`
  align-self: flex-start;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: auto;
`;

const ChildrenContainer = styled.View`
  justify-content: center;
  margin-top: 20px;
`;

const Modal = ({children, title, onCancelPress, onConfirmPress}) => {
  return (
    <BaseModal style={{zIndex: 6}}>
      <ModalContentContainer style={{elevation: 5}}>
        <Title>{title}</Title>

        <ChildrenContainer>{children}</ChildrenContainer>

        <ButtonsContainer>
          <Button onPress={onCancelPress}>
            <Text>Cancelar</Text>
          </Button>
          <Button onPress={onConfirmPress}>
            <ConfirmText>Confirmar</ConfirmText>
          </Button>
        </ButtonsContainer>
      </ModalContentContainer>
    </BaseModal>
  );
};

export default Modal;
