import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context'

const ScreenWrapper = ({ children, ...props }: PropsWithChildren & SafeAreaViewProps) => {
  return (
   <SafeAreaView {...props}>
    {children}
   </SafeAreaView>
  )
}

export default ScreenWrapper