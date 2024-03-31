import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import BackgroundImg from '../../assets/images/login/login1.jpg';

// Define data for cards including image paths
const homeData = [
  {
    name: 'Exercises Database',
    image: require('../../assets/images/login/login1.jpg'),
  },
  {
    name: 'Workout Plan',
    image: require('../../assets/images/login/workoutplan.jpeg'),
  },
  {
    name: 'Workout Tracking',
    image: require('../../assets/images/login/workout-tracking.jpg'),
  },
  {
    name: 'Goal Setting',
    image: require('../../assets/images/login/goal.jpg'),
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {homeData.map((home, index) => (
        <ImageBackground
          key={index}
          source={home.image}
          style={styles.background}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.cardText}>{home.name}</Text>
          </TouchableOpacity>
        </ImageBackground>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,
  },
  background: {
    width: 350, // Adjust according to your requirement
    height: 200, // Adjust according to your requirement
    borderRadius: 10,
    overflow: 'hidden', // Ensure the image is clipped within the border radius
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
