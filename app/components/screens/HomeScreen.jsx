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
    name: 'Exercises',
    image: require('../../assets/images/login/login1.jpg'),
    navigateTo: 'exercises',
  },
  {
    name: 'Plans',
    image: require('../../assets/images/login/workoutplan.jpeg'),
    navigateTo: 'plans',
  },
  {
    name: 'Tracking',
    image: require('../../assets/images/login/workout-tracking.jpg'),
    navigateTo: 'tracking',
  },
  {
    name: 'Goals',
    image: require('../../assets/images/login/goal.jpg'),
    navigateTo: 'goals',
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
            onPress={() => navigation.navigate(home.navigateTo)}>
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
    width: 350,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'flex-start',
  },
  cardText: {
    width: 120,
    display: 'flex',
    top: 10,
    left: 10,
    padding: 5,
    backgroundColor: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 5,
  },
});

export default HomeScreen;
