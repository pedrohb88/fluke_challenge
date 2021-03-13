import React, {useState, useEffect, useContext, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import {Appbar} from 'react-native-paper';

import UserContext from '../contexts/UserContext';

import ListItem from './ListItem';

import styled from 'styled-components/native';

import Pie from 'react-native-pie';
import Icon from 'react-native-vector-icons/FontAwesome';

import FloatingBtn from './FloatingBtn';
import Modal from './Modal';

const AppTitle = styled.Text`
  font-size: 20px;
  color: white;
`;

const CharContainer = styled.View`
  flex: 2;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 20px;
  border: 2px solid green;
  margin: 10px;
  border-radius: 10px;
`;

const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

const DataContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: flex-start;
  width: ${Dimensions.get('window').width}px;
`;

const NumericInput = styled.TextInput`
  border: 2px solid green;
  padding: 10px;
  border-radius: 20px;
  margin: 20px;
  width: 200px;
`;

const labels = {
  available: 'Total disponível',
  subscription: 'Contratado',
  consumed: 'Consumido',
  topup: 'Adicional',
};

const Consumption = () => {
  const user = useContext(UserContext);
  const [consumptionData, setConsumptionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState('data');
  const [modalVisible, setModalVisible] = useState(false);

  const [toBuy, setToBuy] = useState({data: 0, minutes: 0});
  const [loadingBuy, setLoadingBuy] = useState(false);

  const buyAdditional = async () => {
    setLoadingBuy(true);

    const response = await fetch(
      'https://flukenator.herokuapp.com/usage/topupPurchase',
      {
        method: 'POST',
        headers: new Headers({
          Authorization: user.email,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(toBuy),
      },
    );

    setLoadingBuy(false);

    let message;
    if (response.status === 202) {
      message = 'Compra efetuada com sucesso!';

      fetchConsumptionData(user.email);
    } else {
      message = 'Falha ao efetuar compra.';
    }

    Alert.alert(
      '',
      message,
      [
        {
          text: 'Ok',
          onPress: () => {
            if (response.status === 202) {
              setModalVisible(false);
              setToBuy({data: 0, minutes: 0});
            }
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          setModalVisible(false);
          setToBuy({data: null, minutes: null});
        },
      },
    );
  };

  const fetchConsumptionData = useCallback(async (email) => {
    setLoading(true);

    let response = await fetch(
      'https://flukenator.herokuapp.com/usage/packageInformation',
      {
        headers: new Headers({
          Authorization: email,
        }),
      },
    );
    let consumption = await response.json();

    for (let dataType in consumption) {
      let data = consumption[dataType];

      data.total = data.subscription + data.topup;
      data.consumed = data.total - data.available;
      data.consumedPercentage = (data.consumed / data.total) * 100;
    }

    setConsumptionData(consumption);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchConsumptionData(user.email);
  }, [fetchConsumptionData, user.email]);

  return (
    <>
      <Appbar style={{paddingLeft: 20}}>
        <AppTitle>Fluke</AppTitle>
      </Appbar>

      <ButtonsContainer>
        <Button onPress={() => setShow('data')}>
          <Icon name="wifi" size={25} color="green" />
          <Text>Dados</Text>
        </Button>
        <Button onPress={() => setShow('minutes')}>
          <Icon name="hourglass-end" size={25} color="green" />
          <Text>Minutos</Text>
        </Button>
      </ButtonsContainer>

      {loading && <Text>Carregando...</Text>}

      {!loading && show === 'data' && (
        <>
          <TitleContainer>
            <Text style={{fontSize: 20}}>Consumo de Dados</Text>
          </TitleContainer>
          <CharContainer>
            <Pie
              radius={80}
              innerRadius={75}
              sections={[
                {
                  percentage: consumptionData.data.consumedPercentage,
                  color: 'red',
                },
              ]}
              backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>
                {Math.trunc(consumptionData.data.consumedPercentage) + '%'}
              </Text>
            </View>
          </CharContainer>
          <DataContainer style={{zIndex: 0}}>
            <FlatList
              style={{zIndex: 0}}
              data={Object.keys(labels)}
              renderItem={(item) => {
                return (
                  <ListItem
                    item={`${labels[item.item]}: ${
                      consumptionData.data[item.item]
                    } MB`}
                  />
                );
              }}
              keyExtractor={(item) => {
                return item;
              }}
            />
          </DataContainer>
        </>
      )}

      {!loading && show === 'minutes' && (
        <>
          <TitleContainer>
            <Text style={{fontSize: 20}}>Consumo de Minutos</Text>
          </TitleContainer>
          <CharContainer>
            <Pie
              radius={80}
              innerRadius={75}
              sections={[
                {
                  percentage: consumptionData.minutes.consumedPercentage,
                  color: 'red',
                },
              ]}
              backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>
                {Math.trunc(consumptionData.minutes.consumedPercentage) + '%'}
              </Text>
            </View>
          </CharContainer>
          <DataContainer>
            <FlatList
              data={Object.keys(labels)}
              renderItem={(item) => {
                return (
                  <ListItem
                    item={`${labels[item.item]}: ${
                      consumptionData.minutes[item.item]
                    } Min`}
                  />
                );
              }}
              keyExtractor={(item) => {
                return item;
              }}
            />
          </DataContainer>
        </>
      )}

      {!loading && (
        <FloatingBtn
          onPress={() => {
            setModalVisible(true);
          }}
        />
      )}

      {modalVisible && (
        <Modal
          title="Comprar adicional"
          onCancelPress={() => setModalVisible(false)}
          onConfirmPress={() => buyAdditional()}>
          {loadingBuy && <Text>Carregando...</Text>}

          {!loadingBuy && (
            <>
              <Text>Dados</Text>
              <NumericInput
                value={toBuy.data ? toBuy.data.toString() : null}
                placeholder="Dados (Mb)"
                keyboardType="numeric"
                onChangeText={(value) =>
                  setToBuy({data: Number(value), minutes: toBuy.minutes})
                }
              />

              <Text>Minutos</Text>
              <NumericInput
                value={toBuy.minutes ? toBuy.minutes.toString() : null}
                placeholder="Minutos"
                keyboardType="numeric"
                onChangeText={(value) =>
                  setToBuy({minutes: Number(value), data: toBuy.data})
                }
              />
            </>
          )}
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', height: 1050},
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
export default Consumption;
