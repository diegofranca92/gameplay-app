import React from 'react'
import { theme } from '../../theme/theme'
import { Container, AvatarImage } from './styles'

type Props = {
  url: string
}

export function Avatar({ url }: Props) {
  const { secondary50, secondary70 } = theme.colors

  return (
    <Container colors={[secondary50, secondary70]}>
      <AvatarImage source={{ uri: url }} />
    </Container>
  )
}
