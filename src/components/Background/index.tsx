import React, { ReactNode } from 'react'
import { theme } from '../../theme/theme'
import { Container } from './styles'

type Props = {
  children: ReactNode
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors

  return <Container colors={[secondary80, secondary100]}>{children}</Container>
}
