import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';

export default function App() {
 
  return (
    <View style={styles.container}>
    <Text>Code Nesta</Text>
    </View>
  )
}

//{} represents type script object
const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
  
  

});
