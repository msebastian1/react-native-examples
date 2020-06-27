import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorScreen from './components/ColorGenerator';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorCounter from './components/ColorCounter';
import Home from './components/Home';
import ColorCounterWithReducer from './components/ColorCounterWithReducer';
import TextScreen from './components/TextScreen';
import BoxScreen from './components/BoxScreen';

export type RootStackParamList = {
  Home: undefined;
  Counter: {name:string,options:{title:string}};
  Generator: {name:string,options:{title:string}};
  CounterReducer: {name:string,options:{title:string}};
  TextScreen: {name:string, options:{title:string}};
  BoxScreen: {name:string, options:{title: string}};

};


const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Generator" component={ColorScreen} options={{ title: "Color Generator" }} />
        <Stack.Screen name="Counter" component={ColorCounter} options={{ title: "Color Counter" }} />
        <Stack.Screen name="CounterReducer" component={ColorCounterWithReducer} options={{title: "Color Counter with Reducer"}} />
        <Stack.Screen name="TextScreen" component={TextScreen} options={{ title: "Text Screen" }} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} options={{ title: "Box Screen" }} />


      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
