import React from 'react'
import { View } from 'react-native'
import { theme } from './../../theme/theme'

type Props = {
  isCentered?: boolean
}

export function ListDivider({ isCentered }: Props) {
  return (
    <View
      style={[
        {
          width: '78%',
          height: 1,
          backgroundColor: theme.colors.secondary40,
          alignSelf: 'flex-end'
        },
        isCentered
          ? { marginVertical: 12 }
          : {
              marginTop: 2,
              marginBottom: 31
            }
      ]}
    />
  )
}
