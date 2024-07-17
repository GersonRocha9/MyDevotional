import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, DevotionalScreen } from '@screens'
import * as React from 'react'

export type RootStackParamList = {
  Home: undefined
  Devotional: { devotional: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Devotional" component={DevotionalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
