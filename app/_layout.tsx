import { Slot, SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import "./global.css"
import { useFonts } from 'expo-font';

const RootLayout = () => {

   SplashScreen.preventAutoHideAsync(); 

   const [ fontsLoaded, error ] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    })
    
    useEffect(() => {
        if( error ) throw error;

        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  )
}

export default RootLayout