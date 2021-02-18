import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import Router from './router/router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
 
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

//{} represents type script object
const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
  
  

});
