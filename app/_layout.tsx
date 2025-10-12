import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import "./global.css"

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  )
}

export default RootLayout