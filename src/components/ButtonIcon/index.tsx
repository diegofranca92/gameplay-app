import React from 'react'
import { Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Container, Title } from './styles'
import { theme } from './../../theme/theme'
import discordIcon from '../../assets/discord.png'

type Props = RectButtonProps & {
  title: string
}

export function ButtonIcon({ title, ...props }: Props) {
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
      <Container>
        <Image source={discordIcon} />
      </Container>
      <Title>{title}</Title>
    </RectButton>
  )
}
