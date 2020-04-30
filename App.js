import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Icon name='remove' size={20} color='firebrick' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
