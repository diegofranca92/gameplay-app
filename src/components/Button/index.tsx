import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Title } from './styles'
import { theme } from './../../theme/theme'

type Props = RectButtonProps & {
  title: string
}

export function Button({ title, ...props }: Props) {
  return (
    <RectButton
      {...props}
      style={{
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary
      }}>
      <Title>{title}</Title>
    </RectButton>
  )
}
