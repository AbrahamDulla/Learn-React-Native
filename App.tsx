import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './app/components/screens/LoginScreens';
import HomeScreen from './app/components/screens/HomeScreen';
import {Text, TouchableOpacity} from 'react-native';
import Exercises from './app/components/screens/Exercises';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="exercises"
          component={Exercises}
          options={({navigation}) => ({
            headerTitle: 'Exercises',
          })}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerTitle: '',
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => navigation.navigate('Login')}>
                <Text>Logout</Text>
              </TouchableOpacity>
            ),
            headerBackVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
