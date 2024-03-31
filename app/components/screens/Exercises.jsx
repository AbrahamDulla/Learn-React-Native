import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const exercises = [
  {
    name: 'chest',
    image: 'image',
    navigateTo: 'nativgate to',
  },
  {
    name: 'chest',
    image: 'image',
    navigateTo: 'nativgate to',
  },
  {
    name: 'chest',
    image: 'image',
    navigateTo: 'nativgate to',
  },
  {
    name: 'chest',
    image: 'image',
    navigateTo: 'nativgate to',
  },
  {
    name: 'chest',
    image: 'image',
    navigateTo: 'nativgate to',
  },
  {
    name: 'chest',
    image: 'image',
    navigateTo: 'nativgate to',
  },
  {
    name: 'chest',
    image: 'image',
    navigateTo: 'nativgate to',
  },
  {
    name: 'chest',
    image: 'image',
    navigateTo: 'nativgate to',
  },
];

export default function Exercises() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {exercises.map((exercise, index) => (
        <TouchableOpacity style={styles.card} key={index}>
          <Text>{exercise.name}</Text>
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
    padding: 30,
    flexWrap: 'wrap',
    gap: 25,
  },
  card: {
    width: '46%',
    height: 150,
    backgroundColor: 'blue',
    textColor: 'white',
  },
});
