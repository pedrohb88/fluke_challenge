import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import {Appbar} from 'react-native-paper';

import ListItem from './ListItem';

import styled from 'styled-components/native';

import Pie from 'react-native-pie';

const AppTitle = styled.Text`
  font-size: 20px;
  color: white;
`;

const CharContainer = styled.View`
  flex: 2;
  justify-content: flex-start;
  align-items: center;
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
`;

const labels = {
  available: 'Total de dados disponíveis',
  subscription: 'Dados contratados',
  topup: 'Dados adicionais',
  bonus: 'Bônus disponível',
  consumed: 'Dados consumidos',
};

const Consumption = () => {
  useEffect(() => {
    //using useEffect hook just to simulate an api call to retrieve data

    const consumption = {
      subscription: 2000,
      topup: 1000,
      bonus: 500,
      available: 1250,
    };

    const {subscription, topup, bonus, available} = consumption;

    consumption.total = subscription + topup + bonus;
    consumption.consumed = consumption.total - available;
    consumption.consumedPercentage =
      (consumption.consumed / consumption.total) * 100;

    setConsumptionData(consumption);
  }, [consumptionData]);

  const [consumptionData, setConsumptionData] = useState(null);

  return (
    <>
      <Appbar style={{paddingLeft: 20}}>
        <AppTitle>Fluke</AppTitle>
      </Appbar>
      <TitleContainer>
        <Text style={{fontSize: 20}}>Consumo de Dados</Text>
      </TitleContainer>
      {consumptionData !== null && (
        <>
          <CharContainer>
            <Pie
              radius={80}
              innerRadius={75}
              sections={[
                {
                  percentage: consumptionData.consumedPercentage,
                  color: 'red',
                },
              ]}
              backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>
                {Math.trunc(consumptionData.consumedPercentage) + '%'}
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
                      consumptionData[item.item]
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
