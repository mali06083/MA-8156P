import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ReelScreen from './reel'
import PostsScreen from './posts'
import BottomTabsScreen from '../tabs'
import LoginScreen from '../login'

const Drawer = createDrawerNavigator();

const DrawersScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "white"
      }}
    >
      <Drawer.Screen name="MainTabs" component={BottomTabsScreen} />
      <Drawer.Screen name="Posts" component={PostsScreen} />
      <Drawer.Screen name="Reel" component={ReelScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  )
}

export default DrawersScreen