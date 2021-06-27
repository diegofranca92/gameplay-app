import React from 'react'
import { theme } from '../../theme/theme'
import { Avatar } from '../Avatar'
import {
  Container,
  Title,
  SubTitle,
  Status,
  MemberContent,
  Icon
} from './styles'

type MemberProps = {
  id: string
  username: string
  avatar_url: string
  status: string
}

type Props = {
  data: MemberProps
}

export function Member({ data }: Props) {
  const { on, primary } = theme.colors
  const isOnline = data.status === 'online'

  return (
    <Container>
      <Avatar url={data.avatar_url} />
      <MemberContent>
        <Title>{data.username}</Title>
        <Status>
          <Icon style={{ backgroundColor: isOnline ? on : primary }} />
          <SubTitle>{isOnline ? 'Disponivel' : 'Ocupado'}</SubTitle>
        </Status>
      </MemberContent>
    </Container>
  )
}
