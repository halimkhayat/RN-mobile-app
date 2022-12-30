import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import redux state management
import { Provider } from 'react-redux';

// import store
import store from './redux/store';

// bottom Tab 
import Tabs from './navigation/Tab';

export default function App() {
  return(
    <Provider store={store}>
       <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </Provider>
   
  )
};
