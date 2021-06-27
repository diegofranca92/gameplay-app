import React from 'react'
import { View, TouchableOpacityProps } from 'react-native'
import { GuildIcon } from '../GuildIcon'
import { theme } from '../../theme/theme'
import { Feather } from '@expo/vector-icons'

import { Wrapper, Container, Title, TypeUser } from './styles'

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps
}

export function Guild({ data, ...props }: Props) {
  return (
    <Wrapper {...props} activeOpacity={0.7}>
      <GuildIcon />
      <Container>
        <View>
          <Title>{data.name}</Title>
          <TypeUser>{data.owner ? 'Administrador' : 'Convidado'}</TypeUser>
        </View>
      </Container>
      <Feather name='chevron-right' size={24} color={theme.colors.heading} />
    </Wrapper>
  )
}
