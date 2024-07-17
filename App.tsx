import { AppRoutes } from '@routes'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from '@theme'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <AppRoutes />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
