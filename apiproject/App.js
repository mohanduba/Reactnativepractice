import { Provider } from 'react-redux';

import GetBranch from './apidata/GetBranch';
import { store } from './api/store';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
    
    <Provider store={store}>
      <GetBranch/>
    </Provider>
    </View>

  );
}