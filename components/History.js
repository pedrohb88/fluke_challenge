import React, {useEffect, useState, useCallback} from 'react';

import {Appbar} from 'react-native-paper';

import styled from 'styled-components/native';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import DateTimePicker from '@react-native-community/datetimepicker';

import UserContext from '../contexts/UserContext';
import {useContext} from 'react/cjs/react.development';

const AppTitle = styled.Text`
  font-size: 20px;
  color: white;
`;

const StyledView = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`;

const DatePicker = styled.TouchableOpacity`
  border: 2px solid green;
  border-radius: 20px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const DatesPickerContainer = styled.View`
  margin-top: 20px;
  width: ${Dimensions.get('window').width - 50 + 'px'};
`;

const Label = styled.Text`
  font-size: 18px;
`;

const HistoryItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listItem}>
      <View style={styles.listItemView}>
        <View>
          <View style={styles.listItemLine}>
            <Text style={styles.listItemTitle}>Consumo de minutos</Text>
            <Text style={styles.listItemText}>
              {(item.voice / 60).toFixed(2)} min
            </Text>
          </View>
          <View style={styles.listItemLine}>
            <Text style={styles.listItemTitle}>Consumo de dados</Text>
            <Text style={styles.listItemText}>
              {(item.data / Math.pow(2, 20)).toFixed(2)} Mb
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.listItemTitle}>
            {item.date.split('-').reverse().join('/')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const formatDate = (date) => {
  let formated =
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  return formated;
};

const History = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [startDate, setStartDate] = useState(new Date(2020, 1, 28));
  const [endDate, setEndDate] = useState(new Date(2020, 7, 21));

  const user = useContext(UserContext);

  const fetchData = useCallback(
    async (startDate, endDate) => {
      const sDate = formatDateToRequest(startDate);
      const eDate = formatDateToRequest(endDate);

      let response = await fetch(
        `https://flukenator.herokuapp.com/usage/records/?startDate=${sDate}&endDate=${eDate}`,
        {
          headers: new Headers({
            Authorization: user.email,
          }),
        },
      );
      response = await response.json();
      setData(response.reverse());
      setLoading(false);
    },
    [user.email],
  );

  useEffect(() => {
    fetchData(new Date(2020, 1, 28), new Date(2020, 7, 21));
  }, [fetchData]);

  const onstartDateChange = async (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setLoading(true);

    setShowDatePicker(false);

    if (currentDate > endDate) {
      Alert.alert(
        'Data inválida',
        'A data inicial não pode ser maior que a data final.',
        [{text: 'Ok'}],
      );
      setLoading(false);
    } else {
      setStartDate(new Date(currentDate));
      await fetchData(currentDate, endDate);
      setLoading(false);
    }
  };

  const onEndDateChange = async (event, selectedDate) => {
    setLoading(true);
    const currentDate = selectedDate || endDate;

    setShowDatePicker(false);

    if (currentDate < startDate) {
      Alert.alert(
        'Data inválida',
        'A data final não pode ser menor que a data inicial.',
        [{text: 'Ok'}],
      );
      setLoading(false);
    } else {
      setEndDate(new Date(currentDate));
      await fetchData(startDate, currentDate);
      setLoading(false);
    }
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDateToRequest = (date) => {
    return formatDate(date)
      .split('/')
      .reverse()
      .map((v, i) => (i !== 0 && v < 10 ? '0' + v : v))
      .join('-');
  };

  return (
    <>
      <Appbar style={{paddingLeft: 20}}>
        <AppTitle>Fluke</AppTitle>
      </Appbar>

      <StyledView>
        <Text style={{fontSize: 20}}>Histórico de Consumo</Text>

        <DatesPickerContainer>
          <Label>Início do período</Label>
          <DatePicker
            onPress={() => {
              setShowDatePicker('startDate');
            }}>
            <Text>{formatDate(startDate)}</Text>
          </DatePicker>

          <Label>Fim do período</Label>
          <DatePicker
            onPress={() => {
              setShowDatePicker('endDate');
            }}>
            <Text>{formatDate(endDate)}</Text>
          </DatePicker>
        </DatesPickerContainer>

        {showDatePicker === 'startDate' && (
          <DateTimePicker
            minimumDate={new Date(2020, 1, 28)}
            maximumDate={new Date(2020, 7, 21)}
            testID="startDate"
            value={startDate}
            mode="date"
            display="default"
            onChange={onstartDateChange}
          />
        )}

        {showDatePicker === 'endDate' && (
          <DateTimePicker
            minimumDate={new Date(2020, 1, 28)}
            maximumDate={new Date(2020, 7, 21)}
            testID="endDate"
            value={endDate}
            mode="date"
            display="default"
            onChange={onEndDateChange}
          />
        )}

        {loading && <Text>Carregando...</Text>}

        {!loading && (
          <FlatList
            data={data}
            renderItem={({item}) => {
              return <HistoryItem item={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </StyledView>
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: Dimensions.get('window').width,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 2,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  listItemText: {
    fontSize: 18,
  },
  listItemLine: {
    marginBottom: 10,
  },
});

export default History;
