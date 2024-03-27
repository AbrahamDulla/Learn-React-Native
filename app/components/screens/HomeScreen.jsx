import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import BackgroundImg from '../../assets/images/login/login.jpg';

function HomeScreen() {
  return (
    <ImageBackground source={BackgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
