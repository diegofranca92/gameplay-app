import React from 'react'
import { theme } from '../../theme/theme'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function ButtonAdd({ ...props }: RectButtonProps) {
  return (
    <RectButton
      {...props}
      style={{
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary
      }}>
      <MaterialCommunityIcons
        name='plus'
        size={24}
        color={theme.colors.heading}
      />
    </RectButton>
  )
}
