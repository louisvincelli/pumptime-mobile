import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"])
  return (
    <Stack 
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.screen name="exercises" options={{
        presentation: 'fullScreenModal'
      }} />
      <Stack.screen name="exerciseDetails" options={{
        presentation: 'modal'
      }} />
    </Stack>
  )  
}