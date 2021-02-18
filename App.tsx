import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import {Router} from './router/router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
 
  return (
    <Provider store={store}>
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  </Provider>
=======
      <View style={styles.container}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </View>
    </Provider>
>>>>>>> 684fc08769397235de672049e04764013a5a6404
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
