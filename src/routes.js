import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './pages/Home';
import Teste from './pages/Teste';
const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Dados') {
              return (
                <Icon
                  name="database"
                  size={20}
                  style={{color: focused ? '#BB86FC' : 'white'}}
                />
              );
            } else if (route.name === 'Teste') {
              return (
                <Icon
                  name="align-justify"
                  size={20}
                  style={{color: focused ? '#BB86FC' : 'white'}}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: '#121212',
          inactiveBackgroundColor: '#121212',
          activeTintColor: '#BB86FC',
          inactiveTintColor: 'white',
        }}>
        <Tab.Screen name="Dados" component={Home} />
        <Tab.Screen name="Teste" component={Teste} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
