import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

const exercises = [
  {
    name: 'chest',
    image: require('../../assets/images/login/login1.jpg'),
    navigateTo: 'nativgate to',
  },
  {
    name: 'Back',
    image: require('../../assets/images/login/login1.jpg'),
    navigateTo: 'nativgate to',
  },
  {
    name: 'Shoulder',
    image: require('../../assets/images/login/login1.jpg'),
    navigateTo: 'nativgate to',
  },
  {
    name: 'Leg',
    image: require('../../assets/images/login/login1.jpg'),
    navigateTo: 'nativgate to',
  },
  {
    name: 'Biceps',
    image: require('../../assets/images/login/login1.jpg'),
    navigateTo: 'nativgate to',
  },
  {
    name: 'Triceps',
    image: require('../../assets/images/login/login1.jpg'),
    navigateTo: 'nativgate to',
  },
  {
    name: 'Abs',
    image: require('../../assets/images/login/login1.jpg'),
    navigateTo: 'nativgate to',
  },
  {
    name: 'Cardio',
    image: require('../../assets/images/login/login1.jpg'),
    navigateTo: 'nativgate to',
  },
];

export default function Exercises() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 100,
          width: '100%',
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 18}}>
          Ads Please subscribe the premiem package for Ads free
        </Text>
      </TouchableOpacity>
      {exercises.map((exercise, index) => (
        <TouchableOpacity>
          <ImageBackground
            style={styles.backgroundImage}
            source={exercise.image}
            key={index}>
            <Text style={{color: 'white', padding: 10}}>{exercise.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexWrap: 'wrap',
    gap: 20,
  },
  backgroundImage: {
    width: 160,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
