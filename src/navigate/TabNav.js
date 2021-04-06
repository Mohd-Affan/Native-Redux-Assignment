import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Search() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
      }}>
      <Text style={{color: 'white'}}>Search!</Text>
    </View>
  );
}

function More() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1c1c1c',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>More!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'More') {
              iconName = focused ? 'menu' : 'menu-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#1c1c1c',
          },
          activeTintColor: 'tomato',
          inactiveTintColor: '#fff',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
