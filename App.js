import React, {useState} from 'react';
import {
  BottomNavigation,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import History from './components/History';
import Consumption from './components/Consumption';
import Help from './components/Help';

const HistoryRoute = () => <History />;
const ConsumptionRoute = () => <Consumption />;
const HelpRoute = () => <Help />;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'red',
  },
};

const App = () => {
  const [index, setIndex] = useState(1);

  const [routes] = useState([
    {key: 'history', title: 'Histórico', icon: 'history'},
    {key: 'consumption', title: 'Consumo', icon: 'account-details'},
    {key: 'help', title: 'Ajuda', icon: 'help-circle-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    history: HistoryRoute,
    consumption: ConsumptionRoute,
    help: HelpRoute,
  });

  return (
    <PaperProvider theme={theme}>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );
};

export default App;
