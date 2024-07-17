import { AppRoutes } from '@routes/AppRoutes'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppRoutes />
    </>
  )
}
