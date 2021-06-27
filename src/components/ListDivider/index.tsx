import React from 'react'
import { View } from 'react-native'
import { theme } from './../../theme/theme'

export function ListDivider() {
  return (
    <View
      style={{
        width: '78%',
        height: 1,
        backgroundColor: theme.colors.secondary40,
        marginVertical: 31,
        alignSelf: 'flex-end',
        marginTop: 2
      }}
    />
  )
}
