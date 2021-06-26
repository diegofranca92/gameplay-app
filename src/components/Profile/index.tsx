import React from 'react'
import { View } from 'react-native'
import { Avatar } from '../Avatar'

import { Wrapper, Container, User, Greeting, Username, Message } from './styles'

export function Profile() {
  return (
    <Wrapper>
      <Avatar url='https://github.com/diegofranca92.png' />
      <Container>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>Diego</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </Container>
    </Wrapper>
  )
}
