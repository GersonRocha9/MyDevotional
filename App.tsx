import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { Routes } from './src/routes/routes'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  )
}
