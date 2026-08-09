import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutListScreen from './src/screens/WorkoutListScreen';
import WorkoutDetailsScreen from './src/screens/WorkoutDetailsScreen';
import { colors } from './src/theme/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}