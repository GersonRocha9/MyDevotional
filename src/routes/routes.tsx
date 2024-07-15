import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { DevotionalScreen } from '../screens/devotional'
import { HomeScreen } from '../screens/home'

const Stack = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="name">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Devotional" component={DevotionalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
