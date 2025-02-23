import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './home'
import OptionsScreen from './options'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function BottomTabsScreen() {
  return (
   <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    }}
   >
    <Tab.Screen 
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" size={size} color={color} />
      )
    }}
    name="Home" component={HomeScreen} />
    <Tab.Screen 
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="settings" size={size} color={color} />
      )
    }}
    name="Options" component={OptionsScreen} />
   </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})