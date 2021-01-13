import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.line1}>UnsplashTV</Text>
        <Text style={styles.line2}>Built by Hiter Harris</Text>
        <Text style={styles.line3}>Unsplash API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 20,
  },
  line1: {
    fontSize: 32,
    color: 'white',
    fontWeight: '200',
    padding: 2,
  },
  line2: {
    fontSize: 22,
    color: 'white',
    fontWeight: '200',
    padding: 2,
  },
  line3: {
    fontSize: 22,
    color: 'white',
    fontWeight: '200',
    padding: 2,
  },
});

export default Footer;
