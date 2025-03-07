import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

import HomeScreen from './index';
import AboutScreen from './about';
import EducationScreen from './education';
import ContactScreen from './contact';
import HobbiesScreen from './hobbies';

type TabParamList = {
  Home: undefined;
  About: undefined;
  Education: undefined;
  Contact: undefined;
  Hobbies: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const getTabBarIcon = (
  route: RouteProp<TabParamList, keyof TabParamList>,
  focused: boolean,
  color: string,
  size: number
) => {
  const icons: Record<keyof TabParamList, keyof typeof Ionicons.glyphMap> = {
    Home: focused ? 'home' : 'home-outline',
    About: focused ? 'person' : 'person-outline',
    Education: focused ? 'school' : 'school-outline',
    Contact: focused ? 'call' : 'call-outline',
    Hobbies: focused ? 'heart' : 'heart-outline',
  };

  return <Ionicons name={icons[route.name]} size={size} color={color} />;
};

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <LinearGradient colors={['#355c7d', '#6c5b7b', '#c06c84']} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) =>
                getTabBarIcon(route, focused, color, size),
              tabBarActiveTintColor: '#FFFFFF', 
              tabBarInactiveTintColor: '#FFFFFF', 
              tabBarStyle: {
                backgroundColor: 'transparent',
                borderTopWidth: 0,
                elevation: 0,
              },
              headerBackground: () => (
                <LinearGradient
                  colors={['#355c7d', '#6c5b7b', '#c06c84']}
                  style={{ flex: 1 }}
                />
              ),
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#FFFFFF', 
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
            <Tab.Screen name="Education" component={EducationScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
            <Tab.Screen name="Hobbies" component={HobbiesScreen} />
          </Tab.Navigator>
        </View>
      </LinearGradient>
    </SafeAreaProvider>
  );
}