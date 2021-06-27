import React from 'react'
import { View } from 'react-native'
import { theme } from './../../theme/theme'

export function ListDivider() {
  return (
    <View
      style={{
        width: '80%',
        height: 1,
        backgroundColor: theme.colors.secondary40,
        marginVertical: 21,
        alignSelf: 'flex-end'
      }}
    />
  )
}
