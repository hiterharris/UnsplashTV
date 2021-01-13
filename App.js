import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Photo from './components/Photo';
import Footer from './components/Footer';

const App = () => {
  return (
        <View style={styles.App}>
          <Photo />
          <Footer />
        </View>
  );
};

const styles = StyleSheet.create({
  App: {},
});

export default App;
